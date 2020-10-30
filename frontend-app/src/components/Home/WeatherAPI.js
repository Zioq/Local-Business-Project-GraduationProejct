import React, { Component } from "react";

class WeatherAPI extends Component {
    state = {
        temperature:"",
        weather:"",
        img:""
      };
      getWeather = async () => {
        console.log("check");
    
        //Set the Weather API
        const openWeatherKey = "fd3ee3aacf7b96f369c35f9b11b46187";
        const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
    
        try {
          const location = "Vancouver";
          const urlToFetch = `${weatherUrl}?&q=${location}&APPID=${openWeatherKey}`;
    
          //Get the response
          const response = await fetch(urlToFetch);
          // Check the status of response
          if(response.ok) {
              const jsonResponse = await response.json();
              console.log(jsonResponse);
              //return jsonResponse; 
              console.log(jsonResponse.main.temp);
              console.log(jsonResponse.weather[0].description);
              this.setState({
                temperature: jsonResponse.main.temp, 
                weather: jsonResponse.weather[0].description,
                img: "https://openweathermap.org/img/wn/"+jsonResponse.weather[0].icon+"@2x.png"
              });
    
              
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      componentDidMount() {
        this.getWeather();
      }
    
    render() { 
        return ( 
            <>
            <h1>This is weatherAPI component </h1>
            <img src={this.state.img} />
            </>
         );
    }
}
 
export default WeatherAPI;