import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";
import SingleFriend from "./SingleFriend";

class Friends extends React.Component {
  state = {
    newFriendsAdded: [],
  };

  componentDidMount() {
    userService
      .getAllFriends(0, 10)
      .then(this.renderFriendSuccess)
      .catch(this.renderFriendError);
  }

  buddies = (myFriend) => {
    return (
      <SingleFriend
        key={myFriend.id}
        theFriend={myFriend}
        onClick={this.onFriendEditButtonClick}
      />
    );
  };

  renderFriendSuccess = (response) => {
    console.log("renderfriendgoood", response);

    this.setState(() => {
      let friendsData = response.data.item.pagedItems;
      return { newFriendsAdded: friendsData.map(this.buddies) };
    });
  };

  renderFriendError = (error) => {
    console.error("renderfriendbaddd", error);
  };

  onFriendEditButtonClick = (props) => {
    let id = props.id;
    this.props.history.push(`/addfriend/${id}/edit`);
    console.log("hellofromtheotherSide");
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="form-group p-2">
            <NavLink to="/addfriend">
              <button type="submit" className="btn btn-primary ">
                Add Friend
              </button>
            </NavLink>
          </div>
        </div>
        <div className="container row">{this.state.newFriendsAdded}</div>
      </>
    );
  }
}

export default Friends;
