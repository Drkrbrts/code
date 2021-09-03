import React, { Component } from "react";
import * as friendService from "../services/friendService";
import { toast } from "react-toastify";

class FriendForm extends Component {
  state = {
    friendInfo: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
  };
  componentDidMount() {
    if (this.props.match.params.friendId !== "add") {
      let currentFriendEditId = this.props.match.params.friendId;

      friendService
        .getFriendById(currentFriendEditId)
        .then(this.getFriendByIdSuccess)
        .catch(this.getFriendByIdError);
    } else {
      return;
    }
  }

  onEditOrAddFormInfo = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let friendInfo = { ...this.state.friendInfo };
      friendInfo[inputName] = newValue;
      return { friendInfo };
    });
  };

  getFriendByIdSuccess = (response) => {
    let friendEditingInfo = response.data.item;
    let mappedFriend = this.mapFriendData(friendEditingInfo);
    this.setState(() => {
      return { friendInfo: mappedFriend };
    });
  };

  mapFriendData = (oldFriendData) => {
    return {
      id: oldFriendData.id,
      title: oldFriendData.title,
      bio: oldFriendData.bio,
      summary: oldFriendData.summary,
      headline: oldFriendData.headline,
      slug: oldFriendData.slug,
      statusId: oldFriendData.statusId,
      primaryImage: oldFriendData.primaryImage.imageUrl,
    };
  };

  getFriendByIdError = (err) => {
    console.error(err);
  };

  //   Buttons
  goBackTofriends = () => {
    this.props.history.push("/FriendsPage");
  };

  createOrEditFriend = () => {
    let currentId = this.props.match.params.friendId;
    let friendFormData = this.state.friendInfo;

    console.log(currentId, friendFormData);
    if (this.props.match.params.friendId !== "add") {
      friendService
        .editFriend(currentId, friendFormData)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditFriendError);
    } else if (this.props.match.params.friendId === "add") {
      friendService
        .addNew(friendFormData)
        .then(this.onAddNewSuccess)
        .catch(this.onAddNewError);
    }
  };

  onEditFriendSuccess = (response) => {
    console.log(response);
    toast.success("Friend has been edited!");
  };
  onEditFriendError = (err) => {
    console.error(err);
    toast.error("There seems to be an issue please check info.");
  };

  onAddNewSuccess = (response) => {
    console.log(response);
    toast.success("New Friend Created!");
  };
  onAddNewError = (err) => {
    console.error(err);
    toast.error("There seems to be an issue please check info.");
  };

  render() {
    return (
      <div className="container">
        <div className="row py-5 justify-content-center">
          <div className="col-lg-6 col-12">
            <h1 className="text-center">Add or Edit Friend</h1>
            <form id="addOrEditFriend">
              <div className="form-group">
                <input
                  type="hidden"
                  readOnly
                  value={this.props.match.params.friendId}
                  className="form-control rounded-pill"
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Title"
                  name="title"
                  value={this.state.friendInfo.title}
                  onChange={this.onEditOrAddFormInfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Friend Bio</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  name="bio"
                  placeholder="Bio"
                  onChange={this.onEditOrAddFormInfo}
                  value={this.state.friendInfo.bio}
                />
              </div>
              <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  name="summary"
                  placeholder="Summary"
                  value={this.state.friendInfo.summary}
                  onChange={this.onEditOrAddFormInfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="headline">Headline</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Headline"
                  name="headline"
                  value={this.state.friendInfo.headline}
                  onChange={this.onEditOrAddFormInfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Slug"
                  name="slug"
                  value={this.state.friendInfo.slug}
                  onChange={this.onEditOrAddFormInfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Friend Status</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Status"
                  name="statusId"
                  value={this.state.friendInfo.statusId}
                  onChange={this.onEditOrAddFormInfo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="primaryImg">Image Url</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="imageUrl"
                  name="primaryImage"
                  value={this.state.friendInfo.primaryImage}
                  onChange={this.onEditOrAddFormInfo}
                />
              </div>

              <button
                type="button"
                className="btn btn-outline-light bg-dark rounded-pill"
                style={{ marginTop: "5px", marginRight: "3px" }}
                onClick={this.goBackTofriends}
              >
                See all friends
              </button>
              <button
                type="button"
                className="btn btn-warning rounded-pill"
                style={{ marginTop: "5px" }}
                onClick={this.createOrEditFriend}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendForm;
