import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Guu Garden :)</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Menu">Check Our Menu</Nav.Link>
            <Nav.Link href="/Reservation">Make A Reservation</Nav.Link>
            <Nav.Link href="/Checkreservation">Check Today Reservation</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/login">Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
