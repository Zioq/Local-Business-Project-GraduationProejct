import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import EmployeeNavigation from "../EmployeeNavigation";
import EmployeeInsert from "./EmployeeInsert";

class AddNewEmployee extends Component {
    constructor(props) {
        super (props);
        this.state = {
            redirect:false
        }
        this.logout = this.logout.bind(this);
    }
    componentWillMount() {
        if(sessionStorage.getItem("userData")) {
            console.log("Call User Feed");
        } else {
            this.setState({redirect: true});
        }
    }

    logout() {
        sessionStorage.setItem("userData","");
        sessionStorage.clear();
        this.setState({redirect: true});

    }
    render() { 
        if(this.state.redirect) {
            return(<Redirect to={'/Admin'} />)
        }
        return ( 
            <div>
                <EmployeeNavigation />
                <EmployeeInsert />
            </div>
         );
    }


}
 
export default AddNewEmployee;