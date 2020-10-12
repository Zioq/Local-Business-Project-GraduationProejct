import React, { Component } from "react";
import EmployeeNavigation from './EmployeeNavigation';
import { Redirect } from 'react-router-dom';

class AdminHome extends Component {
    
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
            <h1> This is admin HomePage This will be show everything about employee add employee info in here</h1>
            
            <button type = "button" className="button" onClick={this.logout}>Logout</button>

        </div>
         ); 
    }
}
 
export default AdminHome;

