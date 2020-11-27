import React, { useEffect, useState } from "react";
import axios from "axios";
import {Icon,Row,Col} from "antd";
import TableImage from "./section/TableImage";
import TableInfo from "./section/TableInfo";


function ReservationPage(props) {
  const tableId = props.match.params.tableId;
  const [Table, setTable] = useState({});

  useEffect(() => {
    axios
      .get(`/api/table/tables_by_id?id=${tableId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log("response:", response.data);
          setTable(response.data.table[0]);
        } else {
          alert("Failed to get table info detail");
        }
      });
  }, []);

  return (
    <div style={{ width: "100%", padding: "3rem 5rem" }}>
      <div sytle={{ display: "flex", justifyContent: "center" }}>
        <h3><Icon type="schedule" /> {Table.tableName}</h3>
      </div>
      
      <br />
      <Row gutter={[16, 16]}>
      <Col lg={12} sm={24}>
            {/**Table Image */}
            <TableImage detail={Table}/>
      </Col>

      <Col lg={12} sm={24}>
            {/**Menu Info */}
            <TableInfo detail={Table}/>
      </Col>



          
      </Row>
    </div>
  );
}

export default ReservationPage;
