import React, {useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import page navigator componenets
import Main from "./components/Main";
import Admin from "./components/Admin";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Reservation from "./components/Reservation";
import Table from "./components/Table";
import Navigation from "./components/Navigation";
import EmployeeNavigation from "./components/EmployeeNavigation";


//Voice Recognition

function App() {


  return (
    <div className="App">
    
      <Navigation />

      <div className="container">
      <Router>
        <Switch>
          <Route exact path = "/" component={Main} />
          <Route path="/Home"  component={Home} />
          <Route path="/Reservation" component={Reservation}/>
          <Route path="/Table" component={Table} />
          <Route path="/Admin" component={Admin} />
          <Route path="/EmployeeNavigation" component = {EmployeeNavigation} />          
          <Route component={NoMatch} />
        </Switch>
      </Router>
     
      </div>
    </div>
  );
}

export default App;
