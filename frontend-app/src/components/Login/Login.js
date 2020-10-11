import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import {PostData} from "../services/PostData";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passcode: "",
            passcodePassword: ""
        }
        this.login = this.login.bind(this);
        this.onChangePasscode = this.onChangePasscode.bind(this);
        this.onChangePasscodePassword = this.onChangePasscodePassword.bind(this);
    }

    login(e) {
        e.preventDefault();
        //console.log("Login function");
        //console.log(this.state);
        PostData('login',this.state).then((result)=> {
            let responseJSON = result;
            console.log(responseJSON);
        })
        
    }

    onChangePasscode(e) {
        this.setState({
            passcode: e.target.value
        });
        
    }

    onChangePasscodePassword(e) {
        this.setState({ 
            passcodePassword: e.target.value
        });
    }

  render() {
    return (
      <Form style={{ justifyContent: "center" }}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Passcode</Form.Label>
          <Form.Control type="text" placeholder="Enter Passcode" onChange= {this.onChangePasscode} />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Passcode Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange= {this.onChangePasscodePassword}/>
        </Form.Group>
        <Button variant="success" className= "button" type="submit" onClick ={this.login}>Login</Button>
      </Form>
    );
  }
}
export default Login;
