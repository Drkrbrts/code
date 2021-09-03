import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "rc-pagination/assets/index.css";
import Home from "./components/Home";
import Registering from "./components/Registering";
import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendsUpdate from "./components/FriendsUpdate.jsx";
import WidgetEntity from "./components/CodingChallenge/WidgetEntity";
import Footer from "./components/Footer";

class App extends React.Component {
  // state = {
  //   formData: {
  //     firstName: "johnny",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     passwordConfirm: "",
  //     avatarUrl: "",
  //     tenantId: "U024PTVBSP9",
  //   },
  // };

  render() {
    return (
      <BrowserRouter>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/register" exact component={Registering}></Route>
        <Route path="/login" exact component={Login}></Route>{" "}
        <Route path="/friends" exact component={Friends}></Route>
        <Route path="/friends/update" exact component={FriendsUpdate}></Route>
        <Route path="/codingchallenge" exact component={WidgetEntity}></Route>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
