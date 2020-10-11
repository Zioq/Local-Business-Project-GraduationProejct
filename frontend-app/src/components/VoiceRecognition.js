import React, {useEffect} from "react";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.start();

function voiceRecognition() {
  
    const voiceCommands = ()=> {
        recognition.start = () =>{
            console.log(`Voice is activate`);
        }
    };
    
    //Check the voice recognition activate
    recognition.onresult = (e) =>{
        let current = e.resultIndex;
        
        let transcript = e.results[current][0].transcript;
        console.log(transcript);
    }

}

export function Recognition() {
    return voiceRecognition();
}
