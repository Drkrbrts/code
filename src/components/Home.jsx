import React from "react";

export default function Home(props) {
  return props.isLoggedIn ? (
    <h3>Welcome back {props.currentUserName}!</h3>
  ) : (
    <h3>Please register or login.</h3>
  );
}
