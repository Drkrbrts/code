import React from "react";
import Products from "./Products";
import List from "./List";
import currentUser from "../services/homePageService";
import signOutUser from "../services/signOutService";

class SiteNav extends React.Component {
  componentDidMount() {
    currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }
  onCurrentUserSuccess = (e) => {
    console.log("show the user some feedback...");
  };
  onCurrentUserError = (err) => {
    this.props.history.push("/login");
  };
  onLogOutClicked = (e) => {
    // console.log(e);
    signOutUser();
    this.props.history.push("/login");
  };
  onFriendsClicked = (e) => {
    //console.log("going to friends...");
    this.props.history.push("/Friends");
  };
  onSabioClicked = (e) => {
    //console.log("clicked sabio....");
    this.props.history.push("/jumbo");
  };
  onProductsClicked = (e) => {
    console.log("products clicked....");
    this.props.history.push("/products");
  };
  // componentDidUpdate(prevProps) {
  //   let currentPath = this.props.location.pathname;
  //   let previousPath = prevProps.location.pathname;
  //   console.log({ currentPath, previousPath });
  // }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark sabio">
          <button
            className="link-button navbar-brand"
            onClick={this.onSabioClicked}
          >
            Sabio
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button
                  className="nav-link link-button"
                  onClick={this.onLogOutClicked}
                >
                  Log Out<span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item active">
                <button
                  className="nav-link link-button"
                  onClick={this.onFriendsClicked}
                >
                  Friends<span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link link-button">
                  Jobs<span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item active">
                <button
                  className="nav-link link-button"
                  onClick={this.onProductsClicked}
                >
                  Products<span className="sr-only"></span>
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link link-button">
                  Tech Companies <span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link link-button">
                  Events <span className="sr-only">(current)</span>
                </button>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default SiteNav;
