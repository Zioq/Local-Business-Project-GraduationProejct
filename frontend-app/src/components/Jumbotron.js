import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import voiceImage from "../Images/main.png";

const Styles = styled.div`
  .jumbo {
    background: url(${voiceImage});
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
  }
  .container {
    font: bold;
    color:  #3366cc;
  }
  h3 {
    font-style: oblique;
    font-weight: bold;
    color: #3333cc;
    
  }
  h2 {
    color: #3366cc;
    font-weight: bold;
  }
`;

function Jumobtron() {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container className="container">
          <h1>Just Speak! We will guide you!</h1>
          <h2>
            This page use voice Recognition.   Just speak! we will guide you!
          </h2>
          <h3>*Tips*</h3>
          <h3>For main page: speak "Go home"</h3>
          <h3>For check reservation: speak "Reservation"</h3>
          <h3>For ehcek tables: speak "Table"</h3>
        </Container>
      </Jumbo>
    </Styles>
  );
}

export default Jumobtron;
