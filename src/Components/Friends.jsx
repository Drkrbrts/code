import React from "react";
import Navbar from "./Navbar";
import Friend from "./Friend";

class Friends extends React.Component {
  state = {};

  addFriendClicked = () => {
    this.props.history.push("/Friends/FriendForm");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container" id="friendList">
          <div className="row mt-2">
            <div className="col">
              <button
                onClick={this.addFriendClicked}
                className="btn btn-dark"
                id="addFriendButton"
              >
                {" "}
                + Friend
              </button>
            </div>
            <div className="col-md-3 me-1">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchInput"
              />
            </div>
            <div className="col-md-1">
              <button className="btn btn-light" id="searchButton">
                Search
              </button>
            </div>
          </div>
          <div class="container-fluid mt-5 shadow" id="cardContainer">
            <div class="card-group">
              <div class="row"></div>
              <Friend></Friend>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
