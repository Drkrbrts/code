import React from "react";
import * as userService from "../services/userServices";
import HomePage from "./HomePage";
import SingleFriend from "./SingleFriend";
class Friends extends React.Component {
  state = {
    friends: [
      {
        id: 1,
        name: "hardcoded name",
        summary: "hardcoded summary",
        avatar:
          "https://i.pinimg.com/originals/42/e6/d4/42e6d4daaae1f88070d61ce361503912.jpg",
      },
    ],
  };
  componentDidMount() {
    console.log("Friends component did mount");
    userService
      .getFriends(0, 10)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  }

  onGetFriendsSuccess = (response) => {
    //set state for friends var
    //map through friends array to get information
    var friends = response.data.item.pagedItems;
    console.log("getting friends success", friends);
    this.setState((preState) => {
      return { mappedFriends: friends.map(this.mapFriend) };
    });
  };

  onGetFriendsError = (response) => {
    console.warn({ error: response });
  };

  onFriendClick = (friend) => {
    console.log(friend);
  };

  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={`Friends- ${oneFriend.id}`}>
        <SingleFriend
          friend={oneFriend}
          onClick={this.onFriendClick}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  mapFriendSimple = (oneFriend) => {
    return <p key={`Friends- ${oneFriend.id}`}>{oneFriend.name}</p>;
  };
  render() {
    return (
      <React.Fragment>
        <HomePage></HomePage>

        <div className="col-md-12 p-5">
          <h1>Friends</h1>
          <hr />
          <div className="row">
            {/* {this.state.friends.map(this.mapFriend)} */}
            {this.state.mappedFriends}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Friends;
