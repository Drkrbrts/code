import React from "react";
import SingleFriend from "./SingleFriend";
import * as friendService from "../services/friendService";
import FriendsNav from "./FriendsNav";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  state = {
    mappedFriends: [],
  };

  componentDidMount() {
    friendService
      .getFriends()
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  }

  onGetFriendsSuccess = (response) => {
    console.log(response.data.item.pagedItems);

    this.setState(() => {
      return {
        mappedFriends: response.data.item.pagedItems.map(this.mapFriend),
      };
    });
  };

  mapFriend = (friend) => (
    <SingleFriend {...this.props} singleFriend={friend} key={friend.id} />
  );

  onGetFriendsError = (error) => {
    console.log(error);
  };

  onDeleteFriendSuccess = (reponse) => {
    console.log("friend deleted", reponse);
    // update the DOM with state
  };

  onDeleteFriendError = (err) => {
    console.log(err);
  };

  render() {
    return (
      <div>
        <FriendsNav></FriendsNav>
        <div className="container">
          <div className="row row-cols-md-4 g-4">
            {this.state.mappedFriends}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
