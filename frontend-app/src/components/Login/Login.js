import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: "",
      password: "",
      redirect: false
    };
    this.login = this.login.bind(this);
    this.onChangePasscode = this.onChangePasscode.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  login(e) {

    if (this.state.passcode && this.state.password) {

      const body = this.state;
      axios.post("/api/employee/login",body)
        .then((response)=> {
          if(response.data.success) {
            console.log("Log data",response.data);
            this.setState({redirect:true});
          } else {
            console.log(response.data);
            alert("Check your passcode");
          }
        });
    } else {
      alert("Enter your passcode and passcodepassword");
    }
    //console.log("Login function");
    //console.log(this.state);
    e.preventDefault();
  }

  onChangePasscode(e) {
    this.setState({
      passcode: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    if(this.state.redirect) {
      return (
        <Redirect to= {'/CheckOrder'} />
      ) 
    }

    if(sessionStorage.getItem("userData")) {
      return (
        <Redirect to= {'/AdminHome'} />
      ) 
    }

    return (
      <Form style={{ justifyContent: "center" }}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Passcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Passcode"
            onChange={this.onChangePasscode}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Passcode Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
        </Form.Group>
        <Button
          variant="success"
          className="button"
          type="submit"
          onClick={this.login}
        >
          Login
        </Button>
      </Form>
    );
  }
}
export default Login;
