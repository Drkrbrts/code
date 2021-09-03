import React from "react";
import * as userServices from "../../services/userServices";
import SingleFriend from "./SingleFriend";

class Friends extends React.Component {
  state = { friends: [{ title: "", summary: "", photoImage: "" }] };

  componentDidMount() {
    userServices
      .getFriends(0, 3)
      .then(this.onGetSuccess)
      .catch(this.onGetError);
  }

  onGetSuccess = (myFriends) => {
    let frie = myFriends.data.item.pagedItems;
    console.log(myFriends.data.item.pagedItems);
    this.setState((preState) => {
      return { mappedFriends: frie.map(this.mapFriend) };
    });
  };
  onGetError = (error) => {
    console.log(error);
  };

  onEditClickFull = (friend) => {
    let ticks = friend.id;
    console.log(friend.id);
    this.props.history.push(`/friend/${ticks}/edit`, friend);
  };

  onDeleteClickFull = (friend) => {
    console.log(friend.id);
    userServices
      .deleteFriendsId(friend.id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };
  onDeleteSuccess = (friend) => {
    console.log("onDelete", { friend: friend });

    this.setState((prevState) => {
      let url = friend.config.url;
      console.log(url.substring(43) === 28068);
      const indexOfPerson = prevState.mappedFriends.findIndex(
        (singleArrayMember) => singleArrayMember.id === url.substring(43)
      );

      const updatedFriends = [...prevState.mappedFriends];

      if (indexOfPerson >= 0) {
        updatedFriends.splice(indexOfPerson, 1);
      }

      return {
        friends: updatedFriends,
        formData: null,
      };
    }, this.stateChanged);
  };
  onDeleteError = (error) => {
    console.log(error);
  };

  mapFriend = (oneFriend) => {
    return (
      <SingleFriend
        friend={oneFriend}
        onDelete={this.onDeleteClickFull}
        onEdit={this.onEditClickFull}
        key={oneFriend.id}
      ></SingleFriend>
    );
  };
  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Friends</h1>
        <hr />
        <div className="row">{this.state.mappedFriends}</div>
      </div>
    );
  }
}
export default Friends;
