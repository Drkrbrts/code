import React from "react";
import * as friendService from "../services/friendServices";
import Friend from "./SingleFriend";
import "rc-pagination/assets/index.css";
import { toast } from "react-toastify";

class ViewFriends extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      formData: {
        title: "",
        bio: "",
        primaryImage: "",
      },
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
    friendService
      .getAllFriends()
      .then(this.onGetSuccess)
      .catch(this.onGetError);
  }

  onGetSuccess = (data) => {
    console.log(data.data.item.pagedItems);
    let newFriend = data.data.item.pagedItems;
    let mappedFriend = newFriend.map(this.mapFriends);

    this.setState((prevState) => {
      return {
        Friends: mappedFriend,
      };
    });
  };

  onGetError = (err) => {
    console.error(err);
  };

  onEditClick = (friend) => {
    console.log("edit button was clicked", new Date());

    this.props.history.push(`/friends/edit/${friend.id}`);
  };

  onDeleteRequested = (friendId) => {
    this.setState((prevState) => {
      console.log("prevState.people", prevState.Friends);

      const indexOfPerson = prevState.Friends.findIndex(
        (singleFriend) => singleFriend.key === `Friends-${friendId.id}`
      );

      const updatedPeople = [...prevState.Friends];

      if (indexOfPerson >= 0) {
        updatedPeople.splice(indexOfPerson, 1);
      }

      return {
        Friends: updatedPeople,
      };
    });
  };

  onDeleteClick = (id) => {
    console.log(id);
    friendService
      .deleteFriend(id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (responseFriendId) => {
    toast.success("Friend delete successful!");
    this.onDeleteRequested(responseFriendId);
    this.props.history.push("/all-friends");
  };

  onDeleteError = () => {
    toast.error("Friend delete was not successful, try again");
  };

  onAddFriendClicked = (e) => {
    e.preventDefault();
    this.props.history.push("/friends");
  };

  mapFriends = (oneFriend) => {
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <Friend
          friend={oneFriend}
          onClick={this.onEditClick}
          delete={this.onDeleteClick}
        ></Friend>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="p-5">
        <h1>Friends</h1>
        <button className="btn btn-warning" onClick={this.onAddFriendClicked}>
          Add Friend
        </button>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 float-end">
          <input
            type="search"
            className="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <hr />
        <div className="row">{this.state.Friends}</div>
      </div>
    );
  }
}

export default ViewFriends;
