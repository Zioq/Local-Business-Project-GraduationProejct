import React, { Component } from "react";
import WeatherAPI from "./Home/WeatherAPI";
import MenuSlice from "./Home/MenuSlide";
import MenuLandingPage from "./MenuLandingPage/MenuLandingPage";

class Home extends Component {
  state = {

  };

  render() {
    return (
      <>
        <WeatherAPI />
        <MenuLandingPage />
      </>
    );
  }
}

export default Home;
