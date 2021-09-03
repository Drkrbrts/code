import React from "react";
import { toast } from "react-toastify";
import * as friendsService from "../services/friendsService";

class Friends extends React.Component {
  state = { newFriends: "" };

  componentDidMount() {
    this.renderFriends();
  }

  //this is creating an infinite loop. it probably needs to be moved into the edit and update calls
  // componentDidUpdate() {
  //   this.renderFriends();
  // }

  //EDIT friend needs to use the same component as add friend

  renderFriends = () => {
    friendsService
      .getFriends()
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  onGetFriendsSuccess = (response) => {
    let friends = {
      newFriend: response.data.item.pagedItems.map(this.mapYourFriends),
    };
    this.setState(friends);
  };

  onGetFriendsError = (response) => {
    console.log("error");
  };

  onClickAddFriend = () => {
    this.props.history.push("/friends/addfriend");
  };

  onClickEditFriend = () => {
    this.props.history.push("/friends/editfriend");
  };

  onClickDeleteFriend = () => {};

  mapYourFriends = (input) => {
    return (
      //Make this a child component to clean up the code
      //then you can use that to reference the id for delete and edit?
      <React.Fragment key={input.id}>
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
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={this.onClickDeleteFriend}
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
          <div className="row">{this.state.newFriend}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
