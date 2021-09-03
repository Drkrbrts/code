import React from "react";
import { toast } from "react-toastify";
import * as friendsService from "../services/friendsService";

class Friends extends React.Component {
  state = { newFriends: "" };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    friendsService
      .getFriends()
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  onGetFriendsSuccess = (response) => {
    let newState = {
      friends: response.data.item.pagedItems.map(this.mapYourFriends),
      friendArray: response.data.item.pagedItems,
    };
    this.setState(newState);
  };

  onGetFriendsError = (response) => {
    console.log("error");
  };

  onClickAddFriend = () => {
    this.props.history.push("/friends/addfriend");
  };

  onClickEditFriend = (e) => {
    console.log(e.currentTarget.dataset.friendsId);
    let editTarget = e.currentTarget.dataset.friendsId;
    this.props.history.push("/friends/editfriend/" + editTarget);
  };

  onClickDeleteFriend = (e) => {
    friendsService
      .deleteFriend(e.currentTarget.dataset.friendsId)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (id) => {
    toast.success("Successfully deleted friend " + id);

    this.setState((prevState) => {
      const indexOfFriend = prevState.friends.findIndex(
        (friendArray) => friendArray.id === id
      );

      const updatedFriends = [...prevState.friendArray];

      if (indexOfFriend >= 0) {
        updatedFriends.splice(indexOfFriend, 1);
      }
      return {
        friendArray: updatedFriends,
        formData: null,
      };
    }, this.stateChanged);
  };

  onDeleteFriendError = (errResponse) => {
    toast.warning("Failed to delete friend");
    console.log(errResponse);
  };

  mapYourFriends = (input) => {
    return (
      <React.Fragment key={`friends-${input.id}`}>
        <div className="card col-md-3">
          <img
            src={input.primaryImage.imageUrl}
            className="card-img-top"
            alt="404"
          />
          <div className="card-body">
            <h5 className="card-title">{input.title}</h5>
            <p className="card-text">{input.summary}</p>
            <button
              className="btn btn-warning"
              onClick={this.onClickEditFriend}
              data-friends-id={input.id}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={this.onClickDeleteFriend}
              data-friends-id={input.id}
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="pb-3">
              <button
                className="btn btn-primary"
                onClick={this.onClickAddFriend}
              >
                Add New Friend
              </button>
            </div>
          </div>
          <div className="row">{this.state.friends}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
