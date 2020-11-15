import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import page navigator componenets
import Main from "./components/Main";
import Admin from "./components/Admin";
import Home from "./components/Home";
import ReservationPage from "./components/ReservationPage/ReservationPage";
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
import DetailProductPage from "./components/DetailProductPage/DetailProductPage";
import TableRegister from "./components/TableRegisterPage/TableRegisterPage";

//Voice Recognition

function App() {
  return (
    <>
      <Navigation />

      <div className="container" style={{ paddingTop: '10px', minHeight: 'calc(100vh - 80px)' }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Home" component={Home} />
            <Route path="/Reservation" component={ReservationPage} />
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
            <Route path="/product/:productId" component= {DetailProductPage} />
            <Route path="/tableRegister" component= {TableRegister} />
            
            

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
