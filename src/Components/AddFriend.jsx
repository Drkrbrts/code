import React from "react";
import * as friendService from "../services/friendService";

class AddFriend extends React.Component {
  state = {
    newFriend: {},
  };

  componentDidMount() {
    if (
      this.props.location.state &&
      this.props.location.state.type === "EDIT_FRIEND"
    ) {
      let newFriend = { ...this.props.location.state.payload };

      this.setState(() => {
        return { newFriend };
      });
    }
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    if (this.state.newFriend === null) {
      this.setState(() => {
        let newState = {};
        newState[inputName] = newValue;

        return { newState };
      });
    } else {
      this.setState(() => {
        let newFriend = this.state.newFriend;
        newFriend[inputName] = newValue;

        return { newFriend };
      });
    }
  };

  onSubmitHandle = (e) => {
    e.preventDefault();

    if (this.state.newFriend.id) {
      friendService
        .editFriend(this.state.newFriend)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditFriendError);
    } else {
      friendService
        .addFriend(this.state)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendError);
    }
  };

  onEditFriendSuccess = (response) => {
    console.log(response, "friend edit success");
  };

  onEditFriendError = (error) => {
    console.log(error, "edit friend unsuccessful");
  };

  onAddFriendSuccess = (response) => {
    console.log("friend added", response);
    this.props.history.push("/friends");
  };

  onAddFriendError = (error) => {
    console.log("unable to add friend", error);
  };

  // componentDidMount_V1() {
  //   if (this.props.location.state) {
  //     let locState = this.props.location.state;
  //     if (locState.type === "EDIT_FRIEND") {
  //       let newFriend = { ...locState.payload };

  //       this.setState(() => {
  //         return { newFriend };
  //       });
  //     } else {
  //       console.log("no state passed to SingleFriend component");
  //     }
  //   }
  // }

  render() {
    // const { payload: friend } = this.props.location.state;
    return (
      <div className="container">
        <div className="row">
          <div className="md-4 p-3">
            <form>
              <div className="md-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="title"
                  value={this.state.newFriend.title}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bio</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="bio"
                  value={this.state.newFriend.bio}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="summary"
                  value={this.state.newFriend.summary}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Headline</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="headline"
                  value={this.state.newFriend.headline}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="slug"
                  value={this.state.newFriend.slug}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="statusId"
                  value={this.state.newFriend.statusId}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Primary Image</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="primaryImage"
                  // value={this.state.newFriend.primaryImage.imageUrl}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmitHandle}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFriend;
