import React from "react";

export default function Home(props) {
  return props.isLoggedIn ? (
    <h3>Welcome back!</h3>
  ) : (
    <h3>Please register or login.</h3>
  );
}
