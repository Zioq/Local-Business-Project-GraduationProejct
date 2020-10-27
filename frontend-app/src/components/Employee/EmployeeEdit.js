import React, { Component } from "react";
import {Redirect} from 'react-router';
import axios from "axios";

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePasscode = this.onChangePasscode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      position: "",
      phone: "",
      passcode: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:8888/reactJsCRUD/getById.php?id="+this.props.match.params.id)
      .then((response) => {
        console.log(response.data.employeeName);
        this.setState({
          name: response.data.employeeName,
          postition: response.data.employeePosition,
          phone: response.data.employeePhone,
          passcode: response.data.employeePasscode,
          redirect :false
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePosition(e) {
    this.setState({
      position: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangePasscode(e) {
    this.setState({
      passcode: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      position: this.state.position,
      phone: this.state.phone,
      passcode: this.state.passcode,
    };
    console.log(obj);
    axios.post("http://localhost:8888/reactJsCRUD/update.php?id=" + this.props.match.params.id, obj)
      .then(res=> {
        if(res.status) {
          this.setState({redirect:true});
        }
      })
  }

  render() {

    const {redirect} =this.state;
    if(redirect) {
        return < Redirect to='/EmployeeManage'/>
    }
    return (
      <div style={{ marginTop: 10 }} className="w-50 p-3">
        <h3> Edit Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group-3">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="positionFormSelect">Position: </label>
            <select
              className="form-control"
              id="positionFormSelect"
              value={this.state.position}
              onChange={this.onChangePosition}
            >
              <option>Select the position</option>
              <option value="Manager">Manager</option>
              <option value="Server">Server</option>
              <option value="cook">Cook</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label>Passcode: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.passcode}
              onChange={this.onChangePasscode}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Employee Info"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeEdit;
