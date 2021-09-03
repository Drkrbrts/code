import React from "react";

function WelcomeMessage(props) {
  let isLoggedIn = props.userLoggedIn.isLoggedIn;

  if (isLoggedIn && isLoggedIn === true) {
    let userName = props.userLoggedIn.user.data.firstName;
    return (
      <React.Fragment>
        <h1
          style={{
            fontSize: "110px",
            wordSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          Welcome {userName}!
        </h1>
      </React.Fragment>
    );
  } else if (!isLoggedIn && isLoggedIn === false) {
    return (
      <React.Fragment>
        <h1
          style={{
            fontSize: "110px",
            wordSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          Welcome!
        </h1>
        <h4>Please Sign In or Register.</h4>
      </React.Fragment>
    );
  }
}

export default WelcomeMessage;
