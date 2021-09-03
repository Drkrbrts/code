import React from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
//import WelcomeMessage from "../generic/welcomeMessage";

class InternalClock extends React.Component {
    // render is the most importand part of the component lifecycle
    render() { 
        return <React.Fragment>
            {/* React. Fragment allow you to include sibling elements and return them */}
            <h1>Hello Test</h1> 
            {/* <WelcomeMessage></WelcomeMessage> */}
            <Clock value = {new Date()} size = {100} renderNumbers = {true}/> 

            
            </React.Fragment> 
        ;

    }
}

export default InternalClock;