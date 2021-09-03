import React from "react";
import { getFriends } from "../services/friendsService";
import { deleteFriend, editFriend } from "../services/friendsService";
import Friend from "./Friend";

class ViewFriends extends React.Component {
  state = {};

  componentDidMount() {
    getFriends().then(this.onGetSuccess).catch(this.onGetError);
  }

  onGetSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    let oGState = response.data.item.pagedItems;
    this.setState((prevState) => {
      return { mappedFriends: oGState.map(this.mapFriend) };
    });
  };

  onGetError = (err) => {
    console.error(err);
  };

  onEditFriendClicked = (msg, id) => {
    console.log(msg, id);
    console.log("Im Clicked", new Date());
    editFriend(id).then(this.onEditFriendSuccess).catch(this.onEditFriendError);
  };

  onEditFriendSuccess = (response) => {
    console.log(response, "Success");
  };

  onEditFriendError = (response) => {
    console.log(response, "Error");
  };

  onDeleteFriendClicked = (msg, id) => {
    console.log(msg, id);
    deleteFriend(id)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (response) => {
    console.log(response, "Success");
  };

  onDeleteFriendError = (response) => {
    console.log(response, "Error");
  };

  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <Friend
          banana={oneFriend}
          onEditFriendClicked={this.onEditFriendClicked}
          onDeleteFriendClicked={this.onDeleteFriendClicked}
        />
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Friends</h1>
        <hr />

        <div className="row">{this.state.mappedFriends}</div>
      </div>
    );
  }
}

export default ViewFriends;
