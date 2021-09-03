import React from "react";
import { getAllFriends } from "../../services/friendService";
import SingleFriend from "./SingleFriend";
import { deleteFriend } from "../../services/friendService";
import FriendsForm from "./FriendsForm";
import "rc-pagination/assets/index.css";
//import FriendsForm from "./FriendsForm";
class Friends extends React.Component {
  state = {
    title: [""],
  };

  componentDidMount() {
    getAllFriends(0, 3)
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
  }

  onGetAllFriendsSuccess = (myFriends) => {
    console.log(myFriends);
    var friendsArray = myFriends.data.item.pagedItems;
    this.setState((preState) => {
      return { mappedFriends: friendsArray.map(this.mapFriend) };
    });
  };

  onGetAllFriendsError = (err) => {
    console.log(err);
  };

  onDeleteSuccess = (friendId) => {
    console.log("deleted", friendId);

    this.setState((prevState) => {
      const indexOfPerson = prevState.mappedFriends.findIndex(
        (singleArrayMember) =>
          singleArrayMember.props.children.props.friend.id === friendId
      );
      const mappedFriends = [...prevState.mappedFriends];
      if (indexOfPerson >= 0) {
        //do not slice or otherwise mutate the objects in array
        mappedFriends.splice(indexOfPerson, 1);
      }
      return {
        mappedFriends,
        formData: null,
      };
    }, this.stateChanged);
  };

  onDeleteError = (err) => {
    console.error(err);
  };
  onEditClicked = (friend) => {
    console.log(friend);

    this.setState(() => {
      return { formData: friend };
    }, this.stateChanged);
    this.props.history.push({
      pathname: `/friendsForm/${friend.id}/edit`,
      state: friend,
    });
  };
  onDeleteClicked = (friend) => {
    let identity = friend.id;
    deleteFriend(identity)
      .then(this.onDeleteSuccess(identity))
      .catch(this.onDeleteError);
  };
  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <SingleFriend
          friend={oneFriend}
          onEditClick={this.onEditClicked}
          onDeleteClick={this.onDeleteClicked}
        ></SingleFriend>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="col-md-10 p-5">
        <h1>Friends</h1>
        <hr />
        <div className="row">{this.state.mappedFriends}</div>
        {this.state.formData && (
          <FriendsForm
            key={this.state.formData.id}
            friendData={this.state.formData}
            onDelete={this.onDeleteClicked}
            onSave={this.onSaveClicked}
          />
        )}
      </div>
    );
  }
}

export default Friends;
