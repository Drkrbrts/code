import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import homePage from "./components/homePage";
import { withRouter, Route } from "react-router-dom";

class App extends Component {
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("App", { currentPath, previousPath });
  }
  render() {
    console.log("rendering app");
    return (
      <React.Fragment>
        <Route path="/" exact component={homePage}></Route>

        <main role="main">
          {/* <div className="container">
            <div className="row m-3">
              <Button {...this.props}></Button>
            </div>
            <div className="row m-3">
              <Route path="/cart" exact={true} component={Cart}></Route>
              <Route
                path="/products/:productId(\d+)"
                exact={true}
                component={Product}
              ></Route>
            </div>
          </div> */}

          <Jumbo></Jumbo>
          <Content></Content>
        </main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
