import React from "react";
import { NavLink } from "react-router-dom";
import * as friendService from "../services/friendService";

class Friends extends React.Component {
  getFriends = () => {
    friendService
      .getFriends()
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  onGetFriendsSuccess = (response) => {
    console.log(response);
    return renderFriendCards(response.data.items);

    function renderFriendCards(friends) {
      let arrayOfTemplates = friends.map(mapFriend);
      return <div>{arrayOfTemplates}</div>;
    }

    function mapFriend(friend) {
      let newFriend = {
        title: friend.title,
        summary: friend.summary,
      };
      return newFriend;
    }
  };
  onGetFriendsError = (error) => {
    console.warn(error);
  };

  render() {
    return (
      <React.Fragment>
        <h1> Friends Page</h1>
        <NavLink
          className="nav-link px-2 text-black link-button"
          to="/friendform"
        >
          Create New Friend
        </NavLink>
      </React.Fragment>
    );
  }
}

export default Friends;
