import React from "react";
import styled from "styled-components";

const Styles = styled.div`

.weatherContainer {
    width: 350px;
    height: 50px;
    padding: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: 	rgb(255,215,0);
}

.weatherContainer h2 {
    font-family: Montserrat;
    font-size: 18px;
    text-align: left;
    color: #4a4a4a;
    position: relative;
}

.weatherContainer {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}

.weatherContainer {
    padding: 10px 20px;
    height: 100%;
}
.weatherContainer  h3 {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: left;
    color: #4a4a4a;
}
`;


function RenderWeatherHTML({temperature,weather,img}) {

    return(
        <Styles>
             <div className="weatherContainer">
            <h3>TODAY WEATHER</h3>
            <h2>Today Temperature: {kelvinToCelsius(temperature)}&#8451;</h2>
            <h2>Today Weather: {weather}</h2>
            <img src={img} />
        </div>
        </Styles>
       
    )
};

const kelvinToCelsius = k => {
    return (k - 273.15).toFixed(0);
};

export default RenderWeatherHTML;

