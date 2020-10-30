import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import data from "./data/data";
import cash from "./assets/cash.svg";

const Styles = styled.div`
  .Carousel {
    width: 400px;
    height: 350px;
    padding: 20px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: rgb(255, 215, 0);
  }

  .Carousel h2 {
    font-family: Montserrat;
    font-size: 18px;
    line-height: 1;
    text-align: left;
    color: #4a4a4a;
    position: relative;
    padding: 5px;
  }

  .Carousel {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Menuslice {
    padding: 10px 20px;
    height: 100%;
  }
  .Carousel h3 {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 3.4px;
    text-align: center;
    color: #4a4a4a;
  }
  .imgContainer {
    border-radius: 15px;
  }
`;

class MenuSlice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }
  render() {
    return (
      <Styles>
        <Carousel className="Carousel">
        {this.state.properties.map(property=> <Carousel.Item>
            <h3>TODAY CHEF CHOICE</h3>
            <div className="imgContainer">
                <img src={property.img}/>
            </div>
            <div className="info">
              <h4>{property.name}</h4>
              <img src={cash} /> Price: {property.price} 
            </div>
          </Carousel.Item>)}
          
        </Carousel>
      </Styles>
    );
  }
}
export default MenuSlice;
