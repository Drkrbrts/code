import React from "react";
import {
  getFriendById,
  addFriend,
  updateFriend,
} from "../services/friendsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FriendAddEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "",
        primaryImage: "",
      },
    };
  }

  componentDidMount() {
    let routeParam = this.props.match.params.friendId;
    if (routeParam !== "0") {
      getFriendById(routeParam)
        .then(this.onGetFriendSuccess)
        .catch(this.onGetFriendError);
    }
  }

  onGetFriendSuccess = (response) => {
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      let friend = response.data.item;

      formData.id = friend.id;
      formData.title = friend.title;
      formData.headline = friend.headline;
      formData.summary = friend.summary;
      formData.slug = friend.slug;
      formData.statusId = friend.statusId;
      formData.bio = friend.bio;
      formData.primaryImage = friend.primaryImage.imageUrl;
      console.log("onGetFriendSuccess", { formData });
      return { formData };
    });
  };

  onGetFriendError = (err) => {
    console.log("onGetFriendError firing", err);
    let notify = () =>
      toast.error("There was an error saving your friend.  Try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  onFormFieldChange = (e) => {
    console.log("onFormFieldChange firing", e.currentTarget.value);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSave = (e) => {
    e.preventDefault();
    console.log("onSave firing", this.state.formData);

    if (this.state.formData.id) {
      console.log("if is firing");
      updateFriend(this.state.formData.id, this.state.formData)
        .then(this.onSaveSuccess)
        .catch(this.onSaveError);
    } else {
      console.log("else is firing");
      addFriend(this.state.formData)
        .then(this.onSaveSuccess)
        .catch(this.onSaveError);
    }
  };

  onSaveSuccess = (response) => {
    console.log("onUpdateSuccess firing", response);
    let notify = () =>
      toast.success("Friend Successful Saved", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    notify();

    this.props.history.push("/friends");
  };

  onSaveError = (err) => {
    console.log("onUpdateError firing", err);
  };

  onCancel = (e) => {
    e.preventDefault();
    console.log("onCancel firing");
    this.props.history.push("/friends");
  };
  render() {
    const isAdd = this.props.match.params.friendId === "0";
    console.log("isAdd", isAdd);
    return (
      <>
        <div className="row flex py-2 border-bottom bg-light">
          <div className="col">
            <h2 className="px-2">{isAdd ? "Add" : "Edit"} Friend</h2>
          </div>
        </div>
        <div className="container flex">
          <div className="row justify-content-center">
            <div className="col-4 p-3">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter Full Name"
                    value={this.state.formData.title}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="headline">Headline</label>
                  <input
                    type="text"
                    className="form-control"
                    name="headline"
                    placeholder="Headline"
                    value={this.state.formData.headline}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="summary">Summary</label>
                  <input
                    type="text"
                    className="form-control"
                    name="summary"
                    placeholder="Summary of biography"
                    value={this.state.formData.summary}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="slug">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    name="slug"
                    placeholder="A unique url to identify yourself"
                    value={this.state.formData.slug}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="statusId">Status</label>
                  <select
                    name="statusId"
                    className="form-control"
                    value={this.state.formData.statusId}
                    onChange={this.onFormFieldChange}
                  >
                    <option value="">Select Friend Status</option>
                    <option value="Active">Active</option>
                    <option value="NotSet">Not Set</option>
                    <option value="Deleted">Deleted</option>
                    <option value="Flagged">Flagged</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Biography</label>
                  <textarea
                    name="bio"
                    cols="30"
                    rows="5"
                    className="form-control"
                    value={this.state.formData.bio}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="primaryImage">Avatar Url</label>
                  <input
                    type="text"
                    className="form-control"
                    name="primaryImage"
                    placeholder="http://www.example.com/image.jpg"
                    value={this.state.formData.primaryImage}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                {isAdd ? (
                  <button
                    className="btn btn-primary mt-2 mx-1"
                    type="button"
                    onClick={this.onSave}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    className="btn btn-info mt-2 mx-1"
                    type="button"
                    onClick={this.onSave}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger mt-2"
                  type="button"
                  onClick={this.onCancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FriendAddEdit;
