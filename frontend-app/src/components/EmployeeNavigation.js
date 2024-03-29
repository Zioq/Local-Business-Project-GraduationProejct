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
            <Nav.Link href={"/CheckOrder"}>Check Order</Nav.Link>
            <Nav.Link href="/reservationManagement">
              Reservation Management
            </Nav.Link>
            <Nav.Link href="/tableManagement">Table Management</Nav.Link>
            {/* <Nav.Link href="/tableRegister">Table Management</Nav.Link> */}
            <Nav.Link href="/setRecommandation">Set Recommandation</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/product/upload"}>
                Add New Menu
              </NavDropdown.Item>
              <NavDropdown.Item href={"/AddNewEmployee"}>
                Add New Employee
              </NavDropdown.Item>
              <NavDropdown.Item href={"/EmployeeManage"}>
                Employee Management
              </NavDropdown.Item>
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
