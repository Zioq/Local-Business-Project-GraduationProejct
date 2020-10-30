import React, { Component } from "react";
import WeatherAPI from "./Home/WeatherAPI";

class Home extends Component {
  state = {

  };

  render() {
    return (
      <>
        <h1>This is Home</h1>
        <WeatherAPI />
      </>
    );
  }
}

export default Home;
