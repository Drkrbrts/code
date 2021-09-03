import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "../Components/Friend";
import * as friendsService from "../services/friendsService";

class Friends extends React.Component {
  state = { mappedFriends: [] };

  onAddFriendClicked = (e) => {
    e.preventDefault();
    this.props.history.push("/addfriends");
  };
  componentDidMount() {
    friendsService
      .getFriends(0, 100)
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  }
  onGetAllFriendsSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    this.setState(() => {
      let friendsData = response.data.item.pagedItems;
      console.log(friendsData);
      return { mappedFriends: friendsData.map(this.mapFriends) };
    });
  };
  onGetAllFriendsError = (response) => {
    console.log(response);
    this.props.history.push("/addfriends");
  };

  mapFriends = (theFriend) => {
    return (
      <Friend
        key={theFriend.id}
        theFriend={theFriend}
        onClick={this.onFriendClickFull}
      ></Friend>
    );
  };

  onFriendClickFull = (friend) => {
    console.log(friend);
    friendsService
      .deleteFriends(friend.id)
      .then(this.onDeleteFriendsSuccess)
      .catch(this.onDeleteFriendsError);
  };

  onDeleteFriendsSuccess = (response) => {
    console.log(response);
  };

  onDeleteFriendsError = (response) => {
    console.log(response);
  };

  render() {
    return (
      <React.Fragment>
        <h2>All My Friends</h2>
        <NavLink to="/addfriends">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={this.onAddFriendClicked}
          >
            Add New Friend
          </button>
        </NavLink>
        <div className="d-flex justify-content p-3">
          {this.state.mappedFriends}
        </div>
      </React.Fragment>
    );
  }
}
export default Friends;
