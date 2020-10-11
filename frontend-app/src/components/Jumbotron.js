import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import voiceImage from "../Images/voice.png";

const Styles = styled.div`
  .jumbo {
    background: url(${voiceImage});
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
  }
  .container .p {
    padding-top: 35px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    color: #c05deb;
    margin: auto;
  }
`;

function Jumobtron() {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container className="container">
          <h1>Welcome to Guu Garden!</h1>
          <p>
            This page use voice Recognition.Just speak! we will open new pages
            for you!
          </p>
          <p>*Tips*</p>
          <p>For main page: speak "Go home"</p>
          <p>For check reservation: speak "Reservation"</p>
          <p>For ehcek tables: speak "Table"</p>
        </Container>
      </Jumbo>
    </Styles>
  );
}

export default Jumobtron;
