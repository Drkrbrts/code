import React from "react";
import * as friendsService from "../services/friendsService";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default class Friends extends React.Component {
  state = {
    formData: null,
  };
  componentDidMount() {
    friendsService.getPaginated().then(this.onGetSucces).catch(this.onGetError);
  }
  onGetSucces = (response) => {
    console.log(response);
    this.setState(() => {
      return {
        mappedFriends: response.data.item.pagedItems.map(this.mapFriend),
      };
    });
  };
  onGetError = (error) => {
    console.log(error);
  };

  onSaveRequest = (payload) => {
    console.log(payload);
    if (payload.id) {
      friendsService
        .edit(payload)
        .then(this.onEditSuccess)
        .catch(this.onEditError);
    } else {
      friendsService
        .add(payload)
        .then(this.onAddSuccess)
        .catch(this.onAddError);
    }
  };
  onAddSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return { formData: null };
    });
  };
  onAddError = (error) => {
    console.log(error);
  };
  onEditSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return { formData: null };
    });
  };
  onEditError = (error) => {
    console.log(error);
  };

  onCancelRequest = () => {
    this.setState(() => {
      return { formData: null };
    });
  };
  onDeleteRequest = (id) => {
    friendsService
      .destroy(id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };
  onDeleteSuccess = (response) => {
    console.log(response);
  };
  onDeleteError = (error) => {
    console.log(error);
  };

  onAddFriendClick = (e) => {
    e.preventDefault();
    this.setState(() => {
      return {
        formData: {},
      };
    });
  };
  onEditFriendClick = (friend) => {
    console.log(friend);
    this.setState(() => {
      const derivedFormDataFromFriend = {
        id: friend.id,
        title: friend.title,
        bio: friend.bio,
        summary: friend.summary,
        headline: friend.headline,
        slug: friend.slug,
        statusId: friend.statusId,
        primaryImage: friend.primaryImage.imageUrl,
      };
      return {
        formData: derivedFormDataFromFriend,
      };
    });
  };

  mapFriend = (friend) => {
    return (
      <FriendCard
        key={friend.id}
        friend={friend}
        onEditClick={this.onEditFriendClick}
        onDelete={this.onDeleteRequest}
      />
    );
  };
  render() {
    return (
      <>
        <h3 className="col-2">Friends</h3>
        <hr />
        {this.state.formData === null && (
          <>
            <button
              type="button"
              className="btn btn-primary col-2"
              onClick={this.onAddFriendClick}
            >
              Add Friend
            </button>
            <div className="row">{this.state.mappedFriends}</div>
          </>
        )}
        {this.state.formData && (
          <FriendForm
            friendToEdit={this.state.formData}
            onSave={this.onSaveRequest}
            onCancel={this.onCancelRequest}
          />
        )}
      </>
    );
  }
}
