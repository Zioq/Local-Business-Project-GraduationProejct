import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { PostData } from "../services/PostData";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: "",
      passcodePassword: "",
      redirect: false
    };
    this.login = this.login.bind(this);
    this.onChangePasscode = this.onChangePasscode.bind(this);
    this.onChangePasscodePassword = this.onChangePasscodePassword.bind(this);
  }

  login(e) {
    if (this.state.passcode && this.state.passcodePassword) {
      PostData("login", this.state).then((result) => {
        let responseJSON = result;
        console.log(responseJSON);
        if (responseJSON.userData) {
          sessionStorage.setItem('userData',responseJSON );
          this.setState({redirect:true});

        } else {
          console.log("Login Failed");
          alert("Login Failed");
        }
      });
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

  onChangePasscodePassword(e) {
    this.setState({
      passcodePassword: e.target.value,
    });
  }

  render() {
    if(this.state.redirect) {
      return (
        <Redirect to= {'/EmployeeNavigation'} />
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
            onChange={this.onChangePasscodePassword}
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
