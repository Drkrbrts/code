import React from "react";
import friendsService from "../services/friends";
import SingleFriend from "../SingleFriend";
import { withRouter } from "react-router-dom";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  mapFriends = (friend) => {
    return (
      <React.Fragment key={`Friends-${friend.id}`}>
        <SingleFriend friend={friend} onClick={this.onEditBtnClickFull} />
      </React.Fragment>
    );
  };

  componentDidMount() {
    friendsService.showAll().then(this.showSuccess).catch(this.showError);
  }

  showSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    this.setState({ friends: response.data.item.pagedItems });
  };

  showError = (response) => {
    console.log(response);
  };

  addBtnClicked = () => {
    this.props.history.push("/friends/new");
  };

  onEditBtnClickFull = (presId, friendData) => {
    console.log(presId, friendData);
    this.props.history.push("/friends/" + presId + "/edit", {
      type: "ADD_TO_FRIENDFORM",
      payload: friendData,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Friends
          <button
            className="btn btn-success"
            size="lg"
            onClick={this.addBtnClicked}
          >
            Add
          </button>
        </h1>
        <div className="row">{this.state.friends.map(this.mapFriends)}</div>
      </div>
    );
  }
}

export default withRouter(Friends);
