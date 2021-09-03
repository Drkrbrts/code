import React from "react";
/* import ReactDOM from 'react-dom' */
import "rc-pagination/assets/index.css";
/* import Pagination from 'rc-pagination'
import { container } from 'webpack' */
import * as friendService from "./auth/friendService";
import SingleFriend from "./singleFriend";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    friendService
      .getFriends(0, 10)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  }

  onAddFriendClick = () => {
    this.props.history.push("/addfriend");
  };

  onGetFriendsSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    var friendsArr = response.data.item.pagedItems;
    this.setState((prevState) => {
      return { friends: friendsArr.map(this.mapFriends) };
    });
  };

  onGetFriendsError = (err) => {
    console.log(err);
  };

  logClick = (obj) => {
    console.log("in log click", obj);
  };

  mapFriends = (friend) => {
    return (
      <React.Fragment key={`friend-${friend.id}`}>
        <SingleFriend friend={friend} onClick={this.logClick}></SingleFriend>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Friends</h1>
          <button
            className="btn btn-primary my-3"
            onClick={this.onAddFriendClick}
          >
            Add Friend
          </button>
          <div className="row">{this.state.friends}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default React.memo(Friends);
/* ReactDOM.render(<Pagination/>, container) */
