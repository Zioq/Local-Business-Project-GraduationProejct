import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import EmployeeView from "./EmployeeView";

class EmployeeManage extends Component {


    render() { 


        return (
            <div>
            <EmployeeView />
            </div>
          

          );
    }
}
 
export default EmployeeManage;