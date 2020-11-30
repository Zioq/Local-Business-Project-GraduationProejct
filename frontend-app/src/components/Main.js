import React, { useEffect } from "react";
import Jumbotron from "./Jumbotron";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function Main() {
  const voiceCommands = () => {
    recognition.start();
    // On start
    recognition.onstart = () => {
      console.log("Voice is actived");
    };
    // Recognize the voice
    recognition.onresult = (e) => {
      let current = e.resultIndex;
      let userVoice = e.results[current][0].transcript;
      console.log(userVoice);

      if (userVoice === "go home") {
        goToHome();
      } else if (userVoice === "reservation") {
        goToReservation();
      } else if (userVoice === "table") {
        goToTable();
      } else {
        alert(
          "Sorry, we are not support other voice instructions Sorry for your inconvenience 🤗"
        );
      }
    
      setTimeout(() => {
        recognition.start();
      }, 2000);
      
    };
  };
 
  function goToHome() {
    window.location = "http://localhost:3000/Home";
  }
  function goToReservation() {
    window.location = "http://localhost:3000/Reservation";
  }

  function goToTable() {
    window.location = "http://localhost:3000/Checkreservation";
  }

  useEffect(()=>{
    voiceCommands();
  })

  return (
    <div>
      <h1> Welcome to Guu Garden! :)</h1>
      <Jumbotron />
    </div>
  );
}

export default Main;
