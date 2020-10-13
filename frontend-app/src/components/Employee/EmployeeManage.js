import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import EmployeeNavigation from "../EmployeeNavigation";
import EmployeeView from "./EmployeeView";

class EmployeeManage extends Component {

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
            <EmployeeView />
            <h1>This is employee Management Web page section. especailly, employee table</h1>
            </div>
          

          );
    }
}
 
export default EmployeeManage;