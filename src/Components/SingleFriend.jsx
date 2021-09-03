import React from "react";
import * as friendService from "../services/friendService";
// import AddFriend from "./Components/AddFriend";

class SingleFriend extends React.Component {
  onEditHandle = () => {
    console.log("edit clicked");
    this.props.history.push("/addfriends");
    let friendData = this.props.singleFriend;
    console.log(friendData);
    // <AddFriend {...this.props} editFriend={friendData}></AddFriend>;
    friendService
      .editFriend(friendData)
      .then(this.onEditFriendSuccess)
      .catch(this.onEditFriendError);
  };

  onEditFriendSuccess = (response) => {
    console.log("edit friend success", response);
  };

  onEditFriendError = (err) => {
    console.log(err);
  };

  onDeleteHandle = () => {
    let id = this.props.singleFriend.id;
    console.log(id);
    friendService
      .deleteFriend(id)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess(reponse) {
    console.log("friend deleted", reponse);
    this.props.history.push("/addfriends");
  }

  onDeleteFriendError(err) {
    console.log(err);
  }

  render() {
    return (
      <>
        <img
          src={this.props.singleFriend.primaryImage.imageUrl}
          className="card-img-top"
          alt="friend"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.singleFriend.title}</h5>
          <p className="card-text">{this.props.singleFriend.headline}</p>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.onEditHandle}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteHandle}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default SingleFriend;
