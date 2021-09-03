import React, { Component } from "react";
import { createFriend, editFriend } from "../services/friendService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class FriendsUpdate extends React.Component {
  state = {
    friendData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
  };
  // componentDidMount() {
  //   let friendId = this.props.location.state.id;

  //   console.log(friendId);
  // }

  // componentDidUpdate(preProps) {
  //   let friendId = this.props.location.state.id;

  //   if (friendId) {
  //     console.log("Not gonna work buddy", friendId);
  //   }
  // }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });

    this.setState(() => {
      let friendData = { ...this.state.friendData };
      friendData[inputName] = newValue;
      console.log(friendData);
      return { friendData };
    });
  };
  onSubmitButtonClicked = () => {
    if (this.props.location.state === undefined) {
      createFriend(this.state.friendData)
        .then(this.onCreateFriendSuccess)
        .catch(this.onCreateFriendError);
    } else {
      editFriend(this.props.location.state.id, this.state.friendData)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditFriendError);
    }
  };
  onCreateFriendSuccess = (response) => {
    console.log(response);
    this.props.history.push("/friends");
    const notify = () => {
      toast.success("A friend was created!");
    };
    notify();
  };
  onCreateFriendError = (response) => {
    console.warn(response);
    const notify = () => {
      toast.error("Oh no, it appears there's an error in one of your lines");
    };
    notify();
  };
  onEditFriendSuccess = (response) => {
    console.log(response);
    this.props.history.push("/friends");
    const notify = () => {
      toast.success("A friend was updated!");
    };
    notify();
  };
  onEditFriendError = (response) => {
    console.warn(response);
    const notify = () => {
      toast.error("Oh no! It appears there's an error in one of your lines");
    };
    notify();
  };

  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <div className="col-lg-4 p-3">
              <form>
                <h3>Add or Edit Friend</h3>

                <div className=" mb-3 form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    id="title"
                    name="title"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.title}
                  />
                </div>

                <div className=" mb-3 form-group">
                  <label className="form-label">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bio"
                    id="bio"
                    name="bio"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.bio}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Summary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter summary"
                    id="summary"
                    name="summary"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.summary}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Headline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter headline"
                    id="headline"
                    name="headline"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.headline}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Slug"
                    id="slug"
                    name="slug"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.slug}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Status Id</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="statusId"
                    name="statusId"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.statusId}
                  >
                    <option value="">Select status</option>
                    <option value="NotSet">NotSet</option>
                    <option value="Active">Active</option>
                    <option value="Deleted">Deleted</option>
                    <option value="Flagged">Flagged</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Image</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="Enter image url"
                    id="primaryImage"
                    name="primaryImage"
                    onChange={this.onFormFieldChanged}
                    value={this.state.friendData.primaryImage}
                  />
                </div>
                <div style={{ padding: "15px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitButtonClicked}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default FriendsUpdate;
