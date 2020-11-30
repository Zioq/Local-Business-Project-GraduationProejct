import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import EmployeeNavigation from "../EmployeeNavigation";
import EmployeeInsert from "./EmployeeInsert";

class AddNewEmployee extends Component {
    
    render() { 
    
        return ( 
            <div>
                <EmployeeNavigation />
                <EmployeeInsert />
            </div>
         );
    }


}
 
export default AddNewEmployee;