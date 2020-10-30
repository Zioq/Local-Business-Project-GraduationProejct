import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import bathtub from "./assets/bathtub.svg";

const Styles = styled.div`
/* #region Default styles */



/* DEMO STYLES */
.nav {
  padding: 30px 0;
  background-color: #222; }

.nav a {
  display: inline-block;
  width: 100px;
  text-align: center;
  margin: 0 15px;
  padding: 10px;
  border: 1px rgba(255, 255, 255, 0.5) solid;
  transition: all 0.3s linear;
  text-decoration: none;
  color: white; }

.nav a.active {
  background-color: #61DAFB;
  color: #222; }

section {
  padding: 20px 0;
  max-width: 600px;
  margin: 0 auto; }

/* #endregion */
/* #region Card */
/* Card */
.card {
  border: 3px #f3f3f3 solid;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s linear;
  cursor: pointer;
  background-color: #f3f3f3;
  padding: 10px;
  max-width: 220px;
  text-align: left;
  margin: 0 auto; }
  .card:hover {
    background-color: #f3f3f3;
    border-color: #f3f3f3; }
  .card img {
    max-width: calc(100%);
    margin: 0 auto;
    display: block; }
  .card .index {
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 0 10px; }
  .card .price {
    margin: 0;
    padding: 10px 0;
    font-weight: bold; }
  .card .details {
    position: relative; }
  .card .features {
    list-style: none;
    padding: 0;
    margin: 0; }
    .card .features li {
      padding-left: 24px;
      margin-right: 10px;
      display: inline-block; }
      .card .features li span {
        display: none; }
      .card .features li.icon-bed {
        background: url(${bathtub});
        background-size: auto 100%;
        background-repeat: no-repeat; }
      .card .features li.icon-bath {
        background: url(./assets/bathtub.svg);
        background-size: auto 100%;
        background-repeat: no-repeat; }
      .card .features li.icon-car {
        background: url(./assets/car-compact.svg);
        background-size: auto 100%;
        background-repeat: no-repeat; }

/* #endregion */
/* #region cards slider */
.cards-slider-wrapper {
  display: flex; }

.cards-slider {
  position: relative;
  max-width: 226px;
  margin: 0 auto; }
  .cards-slider .card {
    flex: 1; }
  .cards-slider:after {
    content: '';
    display: block;
    width: 100%;
    height: 264px;
    outline: 5px solid #61DAFB;
    position: absolute;
    top: 0;
    left: 0; }

/* #endregion */

`;


const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <Styles>
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
            </div>
        </div>
        </Styles>
        
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;