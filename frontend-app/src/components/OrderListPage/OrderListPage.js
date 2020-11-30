import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import "./orderListPage.css";
import EmployeeNavigation from "../EmployeeNavigation";
function OrderListPage() {

  const [OrdersList, setOrdersList] = useState([]);

  // get the order list Data
  useEffect(() => {
    fetchOrderList();
  }, []);

  const fetchOrderList = () => {
    axios.post("/api/order/list").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setOrdersList(response.data.info);
      } else {
        alert("Failed to get the response data ");
      }
    });
  };

  const confirmOrder = (OrderId) => {
    const body = {
      orderId: OrderId,
    };
    axios.post("/api/order/confirm", body).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        fetchOrderList();
      } else {
        alert("Failed to get the response data ");
      }
    });
  };

  const cancelOrder = (OrderId) => {
    const body = {
      orderId: OrderId,
    };

    axios.post("/api/order/cancel", body).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        fetchOrderList();
      } else {
        alert("Failed to get the response data ");
      }
    });
  };

  const renderTableBody = OrdersList.map((order, index) => {
    return (
      <tr key={index}>
        <td>{order.tableName}</td>
        <td>{order.ItemName}</td>
        <td>{order.numOfOrder}</td>
        <td>
          <Button type="primary" onClick={() => confirmOrder(order._id)}>
            Confirm the Order
          </Button>
        </td>
        <td>
          <Button type="danger" onClick={() => cancelOrder(order._id)}>
            Cancel the Order
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "100%", margin: "1rem auto" }}>
      <EmployeeNavigation />
      <div style={{ textAlign: "center" }}>
        <h2>Check Orders Just Arrive!</h2>
        <h5>
          Go to customer and get last confirmation and click the `Confirmation`
          button
        </h5>
        <br />
      </div>

      <table>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Dish/Drink Name</th>
            <th>Number of Item</th>
            <th>Confirmation</th>
            <th>Cancelation</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default OrderListPage;
