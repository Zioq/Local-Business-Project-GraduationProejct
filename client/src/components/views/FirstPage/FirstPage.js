import React,{ useEffect} from 'react'
import Jumbotron from "../Jumbotron/Jumbotron";


function FirstPage() {
    
    return (
        
        <>  
            <div className="app">
            <Jumbotron />
            <span style={{ fontSize: '2rem' }}>Welcome to Guu Garden! :) </span>
            </div>
      
        </>
    )
}

export default FirstPage
