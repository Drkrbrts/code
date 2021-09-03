import React from "react";
import { NavLink } from "react-router-dom";
import FriendCard from "./friendsCard";
import { friends } from "../services/friendServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as updateService from "../services/friendServices";
import * as deleteService from "../services/friendServices";

class Friends extends React.Component {
  //EXAMPLE FRIEND
  constructor(props) {
    super(props);
    this.state = {
      title: "Assistant Professor",
      bio: "Universal multi-state encryption",
      summary:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      headline: "Drake",
      slug: "411-76-5543",
      statusId: false,
      primaryImage: "https://shutr.bz/3AaPM5m",
    };
  }
  //FRIENDS MOUNTING
  componentDidMount() {
    friends().then(this.onGetFriendsSuccess).catch(this.onGetFriendsError);
  }

  //FRIENDS MOUNTING SUCCESS
  onGetFriendsSuccess = (response) => {
    console.log("onGetFriendsSuccess Fired", response.data);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedfriends: response.data.item.pagedItems.map(this.mapFriends),
      };
    });
  };

  //FRIENDS MOUNTING ERROR
  onGetFriendsError = (response) => {
    console.warn("onGetFriendsError Fired", response.data);
  };

  //MAPPING FUNCTION OF FRIENDS
  mapFriends = (friends) => <FriendCard friends={friends} key={friends.id} />;

  //EDIT BUTTON onCLICKED
  onEditClicked = (e) => {
    e.preventDefault();

    const payload = { ...this.state };

    updateService
      .update(payload)
      .then(this.onUpdateSuccess)
      .catch(this.onUpdateError);
  };

  onUpdateSuccess = (response) => {
    console.log("onUpdateSuccess Fired", response.data);
    toast.success("Friend Updated!");
  };

  onUpdateError = (response) => {
    console.log("onUpdateError Fired", response.data);
    toast.error("Ooops! We couldnt update friend. Sorry!");
  };

  //DELETE BUTTON onClicked
  onDeleteClicked = (e) => {
    e.preventDefault();

    deleteService
      .deletefriend()
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (response) => {
    console.log("onDeleteSuccess Fired", response.data);
    toast.warn("Friend Deleted!");
  };

  onDeleteError = (response) => {
    console.log("onDeleteError Fired", response.data);
    toast.error("Friend could not be deleted");
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <div className="nav-brand">Friends Page</div>
              <NavLink to="/friendsform" className="nav-link">
                + Add Friend
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="row">{this.state.mappedfriends}</div>
      </div>
    );
  }
}
export default Friends;
