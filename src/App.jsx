import React, { Component } from "react";
import Footer from "./Components/Footer";
import SiteNav from "./Components/SiteNav";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Jumbo from "./Components/Jumbo";
import Buttons from "./Components/Buttons";
import Content from "./Components/Content";
import Presidents from "./Components/Presidents";
import Home from "./Components/Home";
import AddFriends from "./Components/AddFriends";
import ViewFriends from "./Components/ViewFriends";
import Widget from "./Components/codechallenge/Widget";
import Cars from "./Components/codechallenge/Cars";
import Car from "./Components/codechallenge/Car";
import Friend from "./Components/Friend";
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./App.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log("App", { currentPath, previousPath });
  }

  render() {
    console.log("Rendering App");
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav />
          <main role="main">
            <Route path="/content" exact component={Content}></Route>
            <Route path="/jumbo" exact component={Jumbo}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/buttons" exact component={Buttons}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/widget" exact component={Widget}></Route>
            <Route path="/addfriend" exact component={AddFriends}></Route>
            <Route path="/viewfriends" exact component={ViewFriends}></Route>
            <Route path="/presidents" exact component={Presidents}></Route>
            <Route path="/friend" exact component={Friend}></Route>
            <Route path="/cars" exact component={Cars}></Route>
            <Route path="/car" exact component={Car}></Route>

            <div className="container">
              <div className="row m-3">
                {/* <Buttons {...this.props}></Buttons> */}
              </div>
            </div>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
