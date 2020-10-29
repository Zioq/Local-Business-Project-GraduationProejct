import React, { Component } from "react";
import axios from "axios";
import RecordsList from './RecordsList';
class EmployeeView extends Component {
    constructor(props) {
        super(props);
        this.state = {employees:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:8888/reactJsCRUD/EmployeeCRUD/list.php')
         .then(response=> {
             this.setState( {employees:response.data});
         })
         .catch(function (error) {
             console.log(error);
         });
    }

    userList() {
        return this.state.employees.map(function(object, i){
            return < RecordsList obj= {object} key={i} />;
        });
    }

    render() { 
        return (  
            <div>
                <h3 align ="center">Employee List</h3>
                <table className="table table-striped" style={ {marginTop:20} }>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Position</th>
                            <th>Employee Phone Number</th>
                        </tr>
                    </thead>

                    <tbody>
                         {this.userList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default EmployeeView;