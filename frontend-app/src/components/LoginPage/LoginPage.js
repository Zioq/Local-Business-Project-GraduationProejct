import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../_actions/user_actions";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  dispalyErrors = (errors) => errors.map((error, i) => <p key={i}>{error}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.isFormvalid(this.state)) {
      this.setState({ errors: [] });

      this.props.dispatch(loginUser(dataToSubmit)).then((response) => {
        if (response.payload.loginSuccess) {
          this.props.history.push("/Admin");
        } else {
          this.setState({
            errors: this.state.errors.concat(
              "Failed to log in, you can check your Email and password"
            ),
          });
        }
      });
    } else {
      this.setState({
        errors: this.state.errors.concat("Form is not valid"),
      });
    }
  };

  isFormvalid = ({ email, password }) => email && password;

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <div className="row">
          <form
            className="col s12"
            onSubmit={(event) => this.submitForm(event)}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  id="email"
                  type="email"
                  className="validate"
                />
                <label className="active" htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="Type a right type email"
                  data-succeuss="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  id="password"
                  type="password"
                  className="validate"
                />
                <label className="active" htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-succeuss="right"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
              <div>{this.dispalyErrors(this.state.errors)}</div>
            )}

            <div className="row">
              <div className="col s12">
                <button
                  className="btn waves-effect red lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Login
                </button>{" "}
                &nbsp; &nbsp;
                <Link to="/register">
                <button
                  className="btn waves-effect red lighten-2"
                  type="submit"
                  name="action"
                >
                  Sign up
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Login);
