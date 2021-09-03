import React from "react";
import userService from "./services/userService";

class Buttons extends React.Component {
  onRequestDetails = (e) => {
    let ticks = new Date().getSeconds();
    //ticks simulate a product id
    console.log("onRequestDetails was clicked", ticks);
    this.props.history.push("/products/" + ticks);
  };
  onRequestDetailsFixed = (e) => {
    console.log("onRequestDetails was clicked");
    this.props.history.push("/products/88");
  };
  onBuyClicked = (e) => {
    let seconds = new Date().getSeconds();
    console.log("onBuyClicked was clicked", seconds);
    this.props.history.push("/cart/");
  };
  onLogOutClicked = () => {
    console.log("onLogOutClicked", new Date());
    userService.logout().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = () => {
    console.log("onLogOutSuccess - we are logged out", new Date());
    this.props.history.push("/");
  };
  onLogOutError = (err) => {
    console.log(err);
  };

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("buttons", { currentPath, previousPath });
  }

  render() {
    console.log("rendering buttons");
    return (
      <React.Fragment>
        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={this.onBuyClicked}
          >
            Buy Product
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={this.onLogOutClicked}
          >
            Log Out
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={this.onRequestDetails}
          >
            See Product Details
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={this.onRequestDetailsFixed}
          >
            See Product Details 88
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Buttons;
