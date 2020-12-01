import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Popover } from "antd";
import EmployeeNavigation from "../EmployeeNavigation";
import { useHistory } from 'react-router-dom';
function TableListPage() {

  const history = useHistory();

  const [Tables, setTables] = useState([]);

  useEffect(() => {
    fetchTable();
  }, []);

  const fetchTable = () => {
    axios.post("/api/table/tablelist").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setTables(response.data.tableInfo);
      } else {
        alert("Failed to get the response data ");
      }
    });
  };

  const DeleteTableHandler = (tableId) => {
    const body = {
      _id: tableId,
    };

    axios.post("/api/table/tabledelete", body).then((response) => {
      if (response.data.success) {
        fetchTable();
      } else {
        alert("Failed to get the response data ");
      }
    });
  };

  const renderTableBody = Tables.map((table, index) => {
    const content = (
      <div>
        <img
          src={`http://localhost:5000/${table.images}`}
          width={400}
          height={300}
        />
      </div>
    );

    const TableName = (table) => {
      if(table.location === 1) {
        return "Patio"
      } else if(table.location === 2) {
        return "Bar"
      } else {
        return "Inside"
      }
    }

    return (
      <tr key={index}>
        <Popover content={content} title={table.tableName}>
          <td>{table.tableName}</td>
        </Popover>
        <td>{TableName(table)}</td>
        <td>{table.description}</td>
        <td>{table.time} Pm</td>
        <td>
          <Button type="danger" onClick={() => DeleteTableHandler(table._id)}>
            Remove Table
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "100%", margin: "3rem auto" }}>
      <EmployeeNavigation />
      <div style={{ textAlign: "center" }}>
        <h2>Table Management</h2>
        <h5>
          If you wnat to set new table click this `Setting` button
        </h5>
        <Button onClick={()=>history.push('/tableRegister')}>Setting New Table</Button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Table Location</th>
            <th>Table Description</th>
            <th>Table Time</th>
            <th>Delete Table</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default TableListPage;
