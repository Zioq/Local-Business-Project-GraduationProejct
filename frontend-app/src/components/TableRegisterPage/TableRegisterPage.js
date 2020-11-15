import React, { Component } from "react";
import {registerTable} from "../../_actions/table";
import axios  from "axios";

export class TableRegister extends Component {

    state= {
        tablename:"",
        capacity:"",
        isAvailable:true,
        location: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

      submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {
            tablename: this.state.tablename,
            capacity: this.state.capacity,
            isAvailable: this.state.isAvailable,
            location: this.state.location,
        };

        console.log(dataToSubmit);
        //this.props.dispatch(registerTable(dataToSubmit))
        axios.post("/api/table",dataToSubmit)
        .then(response=> {
            console.log(response);
            if(response.data.success) {
                this.props.history.push('/');
            } else {
                console.log("Fail to send data to BD");
            }
        })
        .catch(err=> {
            console.log(err);
        });
      };
    
  render() {

    return (
      <div className="container">
        <h2>Table register Page</h2>
        <div className="row">
            <form className="col s12">

            {/** Table Name */}
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="tablename"
                  value={this.state.tablename}
                  onChange={(e) => this.handleChange(e)}
                  id="tablename"
                  type="text"
                  className="validate"
                />
               <label className="active" htmlFor="tableName">Table Name</label>
                <span
                  className="helper-text"
                  data-succeuss="right"
                />
              </div>
            </div>

            {/**For Table Capacity  */}
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="capacity"
                  value={this.state.capacity}
                  onChange={(e) => this.handleChange(e)}
                  id="capacity"
                  type="text"
                  className="validate"
                />
                <label className="active" htmlFor="capacity">Capacity: Number</label>
                <span
                  className="helper-text"
                  data-succeuss="right"
                />
              </div>
            </div>

            {/**For Table Location  */}
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="location"
                  value={this.state.location}
                  onChange={(e) => this.handleChange(e)}
                  id="location"
                  type="text"
                  className="validate"
                  text="test"
                />
                <label className="active" htmlFor="capacity">Location: Inside, Bar, or Patio</label>
                <span
                  className="helper-text"
                  data-succeuss="right"
                />
              </div>
            </div>

            {/**Submit Button */}
            <div className="row">
              <div className="col s12">
                <button
                  className="btn waves-effect blue lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Setting Table
                </button>{" "}
                &nbsp; &nbsp;
              </div>
            </div>

            </form>
        </div>
      </div>
    );
  }
}

export default TableRegister;
