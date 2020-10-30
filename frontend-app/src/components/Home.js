import React, { Component } from "react";
import WeatherAPI from "./Home/WeatherAPI";
import bgImage from "../Images/main.png";
import MenuSlice from "./Home/MenuSlide";

class Home extends Component {
  state = {

  };

  render() {
    return (
      <>
        <WeatherAPI />
        <MenuSlice />
      </>
    );
  }
}

export default Home;
