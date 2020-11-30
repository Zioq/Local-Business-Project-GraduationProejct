import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import EmployeeNavigation from "../EmployeeNavigation";


function EmployeeView() {

    const [EmployeesList, setEmployeesList] = useState([]);

    useEffect(() => {
        fetchEmployeeList();
    }, []);

    const fetchEmployeeList = () => {
        axios.post("/api/employee/list").then((response) => {
          if (response.data.success) {
            console.log(response.data);
            setEmployeesList(response.data.info);
          } else {
            alert("Failed to get the response data ");
          }
        });
    };

    const deleteEmployee = (employeeId) => {
        const body = {
            _id: employeeId,
        };
    
        axios.post("/api/employee/delete", body).then((response) => {
          if (response.data.success) {
            console.log(response.data);
            fetchEmployeeList();
          } else {
            alert("Failed to get the response data ");
          }
        });
      };

    const renderTableBody = EmployeesList.map((employee, index) => {
        return (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.phonenumber}</td>
            <td>
              <Button type="danger" onClick={() => deleteEmployee(employee._id)}>
                Delete
              </Button>
            </td>
          </tr>
        );
      });


    return (
        <div style={{ width: "100%", margin: "1rem auto" }}>
          <EmployeeNavigation />
          <div style={{ textAlign: "center" }}>
            <h5>
              Employee List
            </h5>
            <br />
          </div>
    
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Position</th>
                <th>Employee Phone Number</th>
                <th>Delete Employee Info</th>
              </tr>
            </thead>
            <tbody>{renderTableBody}</tbody>
          </table>
        </div>
      );
}

export default EmployeeView
