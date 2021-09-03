import React from "react";
import { NavLink } from "react-router-dom";
import * as friendService from "../services/friendServices";
import SingleFriend from "./SingleFriend";

class Friends extends React.Component {
  state = {
    mapFriends: [],
  };

  onAddFriendClicked = (e) => {
    e.preventDefault();
    console.log("firing");
    this.props.history.push("/friendform");
  };

  componentDidMount() {
    console.log("friends page mounting");

    friendService
      .getAllFriends(0, 100)
      .then(this.getAllSuccess)
      .catch(this.getAllError);
  }

  getAllSuccess = (response) => {
    console.log(response);

    this.setState(() => {
      let friendData = response.data.item.pagedItems;
      console.log(friendData);
      return { mappedFriends: friendData.map(this.mapFriend) };
    });
  };

  getAllError = (errResponse) => {
    console.log(errResponse);
  };

  onDeleteClicked = (friend) => {
    // console.log(friend);
  };

  onEditClicked = (obj) => {
    console.log("onEditClicked", obj);
  };

  mapFriend = (aFriend) => {
    return (
      <SingleFriend
        key={aFriend.id}
        aFriend={aFriend}
        onClick={this.onDeleteClicked}
        {...this.props}
        // onEditClicked={this.onEditClicked}
      ></SingleFriend>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content p-3">
          <h2>Friends Page </h2>
          <NavLink to="/friendform">
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={this.onAddFriendClicked}
            >
              Add Friend
            </button>
          </NavLink>
        </div>
        <br></br>

        <div className="row">{this.state.mappedFriends}</div>
      </React.Fragment>
    );
  }
}

export default Friends;
