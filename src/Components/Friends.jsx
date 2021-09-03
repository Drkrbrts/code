import React from "react";
import Navbar from "./Navbar";
import Friend from "./Friend";
import FriendForm from "./FriendForm";
import {
  getRecords,
  deleteFriend,
  getFriendQuery,
} from "../services/friendServices";

import { Route } from "react-router-dom";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  //all urls should be lowercase
  //do a get paginated ressponse on didmountmethod and then get by id and pass to friend
  //we just need the title summary and photo url.

  addFriendClicked = () => {
    this.props.history.push("/friends/add");
  };

  componentDidMount() {
    // this.setState((preState) => {
    //   return { mappedFriends: preState.friends.map(this.mapFriends) };
    // });
    console.log("componenet did mount");
    getRecords().then(this.onGetRecordsSuccess).catch(this.onGetRecordsError);
  }

  // mapFriends = (friend) => {
  //   <Friend
  //     key={friend.id}
  //     id={friend.id}
  //     title={friend.title}
  //     summary={friend.summary}
  //     imageUrl={friend.primaryImage.imageUrl}
  //     delete={this.onDeleteButtonClicked}
  //     edit={this.onEditButtonClicked}
  //   />;
  // };

  onGetRecordsSuccess = (response) => {
    const friends = response.data.item.pagedItems;
    this.setState({ friends });
  };

  onGetRecordsError = (response) => {
    console.log(response);
  };

  onDeleteButtonClicked = (buttonId) => {
    const friends = this.state.friends.filter(
      (friend) => friend.id !== buttonId
    );
    this.setState({ friends });
    deleteFriend(buttonId)
      .then(this.onDeleteFriendSuccess)
      .catch(this.onDeleteFriendError);
  };

  onDeleteFriendSuccess = (response) => {
    console.log("delete friend success", response);
  };

  onDeleteFriendError = (response) => {
    console.log("deletefriend error", response);
  };

  onEditButtonClicked = (friendId) => {
    // this.props.history.push(`/friends/${friendId}`);
    // console.log("edit firing!", friendId);
    // console.log()
    // console.log(this.state.friends.indexOf(friendId));
    const filteredFriend = this.state.friends.filter(
      (friend) => friend.id === friendId
    );

    this.props.history.push(`/friends/${friendId}`, filteredFriend);

    // const friend = { ...this.state, filteredFriend };
    // this.setState(friend);
  };

  mapFriend = (oneFriend) => {
    return (
      <Friend
        key={oneFriend.id}
        id={oneFriend.id}
        title={oneFriend.title}
        summary={oneFriend.summary}
        imageUrl={oneFriend.primaryImage.imageUrl}
        delete={this.onDeleteButtonClicked}
        edit={this.onEditButtonClicked}
      />
    );
  };

  showState = () => {
    console.log(this.state);
  };
  render() {
    console.log("inside of render");
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <div className="row mt-2">
            <div className="col">
              <button onClick={this.addFriendClicked} className="btn btn-dark">
                + Friend
              </button>
              <button onClick={this.showState} className="btn btn-dark">
                show me state
              </button>
            </div>
            <div className="col-md-3 me-1">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-md-1">
              <button className="btn btn-light">Search</button>
            </div>
          </div>
          <div className="container-fluid mt-5 shadow">
            <div className="card-group">
              <div className="row">
                {this.state.friends.map(this.mapFriend)}
                {/* {this.state.mappedFriends} */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
