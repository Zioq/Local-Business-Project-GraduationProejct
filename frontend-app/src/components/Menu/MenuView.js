import React, { Component } from "react";
import EmployeeNavigation from "../EmployeeNavigation";
import {Accordion,Card} from 'react-bootstrap';
import FoodMenu from './FoodMenu';
import  DrinkMenu from './DrinkMenu';

class MenuView extends Component {
  constructor(props) {
    super(props);
    this.state = { munes: [] };
  }

  render() {
    return (
      <div>
        <EmployeeNavigation />
        <h3>Menu Management</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Food Category
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <FoodMenu />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Drink Category
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <DrinkMenu />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default MenuView;
