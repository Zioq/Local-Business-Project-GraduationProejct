import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import EmployeeManage from "./Employee/EmployeeManage";
// change it to the Class not a function.
function EmployeeNavigation() {
  return (
    <div className="Navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark2" variant="dark">
        <Navbar.Brand href="/">Guu Garden :)</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="Admin/Menu">Check Menu</Nav.Link>
            <Nav.Link href="Admin/Check_Order">Reservation Management</Nav.Link>
            <Nav.Link href="Admin/Table_Management">Check Table</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/EmployeeManage"}>Employee Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href= "#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Admin">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default EmployeeNavigation;
