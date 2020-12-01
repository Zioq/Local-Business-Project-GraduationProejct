import React, { Component } from "react";
import WeatherAPI from "./Home/WeatherAPI";
import MenuLandingPage from "./MenuLandingPage/MenuLandingPage";
import RecommandationLandingPage from "./MenuRecommandationPage/RecommandationLandingPage";
class Home extends Component {
  state = {

  };

  render() {
    return (
      <>
        <WeatherAPI />
        <RecommandationLandingPage />
      </>
    );
  }
}

export default Home;
