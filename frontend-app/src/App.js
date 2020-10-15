import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeEdit from "./components/Employee/EmployeeEdit";

//import page navigator componenets
import Main from "./components/Main";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Table from "./components/Table";
import Navigation from "./components/Navigation";
import EmployeeNavigation from "./components/EmployeeNavigation";
import AdminHome from "./components/AdminHome";
import EmployeeManage from "./components/Employee/EmployeeManage";
import AddNewEmployee from "./components/Employee/AddNewEmployee";
//Voice Recognition

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Home" component={Home} />
            <Route path="/Reservation" component={Reservation} />
            <Route path="/Table" component={Table} />
            <Route path="/Admin" component={Admin} />
            <Route path="/AdminHome" component={AdminHome} />
            <Route path= "/EmployeeManage" component={EmployeeManage} />
            <Route path= "/AddNewEmployee" component={AddNewEmployee} />
            <Route path= "/EmployeeManage/Edit/:id" component={EmployeeEdit} />

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
