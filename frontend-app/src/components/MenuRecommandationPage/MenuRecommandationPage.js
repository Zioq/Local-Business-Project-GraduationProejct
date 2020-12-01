import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Popover } from "antd";
import EmployeeNavigation from "../EmployeeNavigation";

function MenuRecommandationPage() {
  const [MenuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    axios.post("/api/product/wholelist").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setMenuList(response.data.productInfo);
      } else {
        alert("Failed to get the response data ");
      }
    });
  };

  const RecommandationHandler = (menuId) => {
    const body = {
      _id: menuId,
    };
    axios.post("/api/product/recommandation",body)
        .then((response)=> {
            if(response.data.success) {
                fetchMenu();
            } else {
                alert("Failed to get the response data ");
            }
        })
  };

  const DeleteRecommandationHandler = (menuId) => {
    const body = {
      _id: menuId,
    };
    axios.post("/api/product/DeleteRecommandation",body)
        .then((response)=> {
            if(response.data.success) {
                fetchMenu();
            } else {
                alert("Failed to get the response data ");
            }
        })
  };


  const renderTableBody = MenuList.map((menu, index) => {
    const content = (
      <div>
        <img src={`http://localhost:5000/${menu.images}`} width={400} height={300} />
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={menu.title}>
          <td>{menu.title}</td>
        </Popover>
        <td>{menu.price}</td>
        <td>{menu.description}</td>
        {menu.recommandation == true ? 
            <td>
          <Button
            type="danger"
            onClick={() => DeleteRecommandationHandler(menu._id)}
          >
            Delete From Recommandation List
          </Button>
        </td>
        : <td>
          <Button
            type="primary"
            onClick={() => RecommandationHandler(menu._id)}
          >
            Add to Recommandation List
          </Button>
        </td>}
        
        <td></td>
      </tr>
    );
  });

  return (
    <div style={{ width: "100%", margin: "1rem auto" }}>
      <EmployeeNavigation />
      <div style={{ textAlign: "center" }}>
        <h2>Setting Today Recommandation</h2>
        <h5>
          Click the 'Recommandation' button to set today's recommandation menu
        </h5>
        <br />
      </div>

      <table>
        <thead>
          <tr>
            <th>Menu Name</th>
            <th>Menu Price</th>
            <th>Description</th>
            <th>Setting a Recommandation</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default MenuRecommandationPage;
