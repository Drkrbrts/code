import React from "react";

class Buttons extends React.Component {
  onBuyClicked = (e) => {
    console.log("Buy was clicked");
    let seconds = new Date().getSeconds();
    this.props.history.push("/cart/" + seconds);
  };
  onLogOutClicked = (e) => {
    console.log("Log Out was clicked" + new Date());
    this.props.history.push("/");
  };
  onProductDetailsClicked = (e) => {
    let seconds = new Date().getSeconds();
    console.log("Product Details was clicked");
    this.props.history.push("/products/" + seconds);
  };

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log("Buttons", { currentPath, previousPath });
  }

  render() {
    console.log("Rendering Buttons");
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
            onClick={this.onProductDetailsClicked}
          >
            See Product Details
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
