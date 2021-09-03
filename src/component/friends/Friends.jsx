import React from "react";
import {
  getFriends,
  deleteFriends,
  editFriends,
} from "../../services/userService";
import SingleFriend from "./SingleFriend";

class Friends extends React.Component {
  state = {
    friend: [],
  };

  componentDidMount() {
    getFriends().then(this.onGetFriendsSuccess).catch(this.onGetFriendsError);
  }

  onGetFriendsSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return { mappedFriends: response.friends.map(this.mapFriend) };
    });
    console.log(this.state);
  };

  onGetFriendsError = (error) => {
    console.log(error);
  };

  onAddFriendClick = (e) => {
    e.preventDefault();
    this.props.history.push("/friendsform");
  };

  onFriendDelete = (frd) => {
    // e.preventDefault();
    console.log(frd);
    let id = frd.id;
    deleteFriends(id)
      .then(this.onFriendDeleteSuccess)
      .catch(this.onFriendDeleteError);
  };

  onFriendDeleteSuccess = (response) => {
    console.log(response);
  };

  onFriendDeleteError = (error) => {
    console.log(error);
  };

  onFriendEdit = (frd) => {
    console.log(frd);
    let id = frd.id;
    // let payload = frd;
    this.props.history.push("/friends/" + id);
    // editFriends(id, payload)
    //   .then(this.onEditFriendSuccess)
    //   .catch(this.onEditFriendError);
  };

  onEditFriendSuccess = (response) => {
    console.log(response);
  };

  onEditFriendError = (error) => {
    console.log(error);
  };

  mapFriend = (aFriend) => {
    return (
      <SingleFriend
        friend={aFriend}
        onDeleteClick={this.onFriendDelete}
        onEditClick={this.onFriendEdit}
      ></SingleFriend>
    );
  };

  mapFriendKey = (aFriend) => {
    return <p key={`Friend # ${aFriend.id}`}>{aFriend.title}</p>;
  };

  render() {
    return (
      <React.Fragment>
        <div className="p-2 bg-light rounded-3 mb-4">
          <div className="container">
            {/* <h3 className="display-7 fw-bold">Friends</h3>
            <button className="btn btn-primary btn-md">+ Friend</button>
            <div>
              <form action="/" method="get">
                <label htmlFor="header-search">
                  <span className="visually-hidden">Search Friends</span>
                </label>
                <input
                  type="text"
                  id="header-search"
                  placeholder="Search Friends"
                  name="s"
                />
                <button className="m-1" type="submit">
                  Search
                </button>
              </form>
            </div> */}
            <div className="col-md-12 p-5">
              <h2>Friends</h2>
              <button
                onClick={this.onAddFriendClick}
                className="btn btn-primary btn-md"
              >
                + Friend
              </button>
              <hr />
              <div className="row">{this.state.mappedFriends}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
