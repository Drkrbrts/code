import React from "react";
import SingleFriend from "./SingleFriend";
import * as friendService from "../services/friendService";
import FriendsNav from "./FriendsNav";

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

  render() {
    return (
      <div>
        <FriendsNav></FriendsNav>
        <div className="container">
          <div className="row row-cols-3 row-cols-md-4 rows-cols-lg-3 g-4">
            <div className="col">
              <div className="card">
                <div>{this.state.mappedFriends}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
