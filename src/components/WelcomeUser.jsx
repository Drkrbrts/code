import React from "react";



class WelcomeUser extends React.Component {
    render() {
 
       const { auth } = this.props
 
       var pageTitle = `Welcome, { auth.firstname }`
 
       return (
          <h1>{ pageTitle }</h1>
       )
   }
 }
 
 export default WelcomeUser