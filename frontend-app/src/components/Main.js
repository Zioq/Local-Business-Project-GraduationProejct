import React ,{useEffect}from 'react';
import Jumbotron from "./Jumbotron";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.start();

function Main() {
    const voiceCommands = () => {
        // On start
        recognition.onstart = () => {
          console.log('Voice is actived');
        };
      }
      
      // Recognize the voice
      recognition.onresult = (e) => {
          let current = e.resultIndex;
          let transcript = e.results[current][0].transcript;
          console.log(transcript);
      }
      
      useEffect(()=> {
        voiceCommands();
      });
    return (
       
        <div>
            <h1> Welcome to Guu Garden! :)</h1>
            <Jumbotron />
            
        </div>

    )
}

export default Main;