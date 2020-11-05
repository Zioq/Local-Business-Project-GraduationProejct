import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import EmployeeEdit from "./components/Employee/EmployeeEdit";
import Menu from "./components/Menu/MenuView";
import Login from "./components/LoginPage/LoginPage";
import Register from "./components/RegisterPage/RegisterPage";
import UploadProductPage from "./components/UploadProductPage/UploadProductPage";

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
            <Route path="/edit/:id" component={EmployeeEdit} />
            <Route path="/Menu" component={Menu} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/product/upload" component= {UploadProductPage} />

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
