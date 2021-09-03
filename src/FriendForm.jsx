import React from "react";
import * as friendService from "./services/friendService";
import { toast, ToastContainer } from "react-toastify";

class FriendForm extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
    pageTitle: "Add A Friend",
  };

  componentDidMount() {
    if (this.props.location.state) {
      console.log("this is an edit form");
      let editFriendData = this.props.location.state;

      let formData = {
        title: editFriendData.title,
        bio: editFriendData.bio,
        summary: editFriendData.summary,
        headline: editFriendData.headline,
        slug: editFriendData.slug,
        statusId: editFriendData.statusId,
        primaryImage: editFriendData.primaryImage.imageUrl,
      };

      this.setState(() => {
        return { formData, pageTitle: "Edit a Friend" };
      });
    } else if (this.props.match.params.id) {
      // get byId    //render all the info
      let id = parseInt(this.props.match.params.id);
      console.log({ friendId: id });
      friendService
        .getById(id)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  onGetByIdSuccess = (res) => {
    let friendInfo = res.data.item;

    let formData = {
      title: friendInfo.title,
      bio: friendInfo.bio,
      summary: friendInfo.summary,
      headline: friendInfo.headline,
      slug: friendInfo.slug,
      statusId: friendInfo.statusId,
      primaryImage: friendInfo.primaryImage.imageUrl,
    };

    this.setState(() => {
      return { formData, pageTitle: "Edit a Friend" };
    });
  };

  onGetByIdError = (err) => console.error({ error: err });

  onFormFieldChanged = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.formData };
      newState[name] = newValue;
      return { formData: newState };
    });
  };

  onSubmitBtnClick = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    console.log(id);

    if (id) {
      friendService
        .update(id, this.state.formData)
        .then(this.onUpdateFriendSuccess)
        .catch(this.onUpdateFriendError);
    } else {
      friendService
        .add(this.state.formData)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendError);
    }
  };

  onUpdateFriendSuccess = (res) => {
    console.log(res);
    toast.success("Friend was updated successfully :)");
  };
  onUpdateFriendError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onAddFriendSuccess = (res) => {
    console.log(res);
    toast.success("You have a friend :)");
  };
  onAddFriendError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />

        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">{this.state.pageTitle}</h1>
                </div>
                <div className="form-group m-5">
                  <label htmlFor="friendName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="John Doe"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.title}
                  />
                  <label htmlFor="friendBio">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing…in fermentum posuere urna nec tincidunt praesent."
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.bio}
                  />
                  <label htmlFor="friendSummary">Summary</label>
                  <input
                    type="text"
                    className="form-control"
                    name="summary"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing…mpor incididunt ut labore et dolore magna aliqua."
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.summary}
                  />
                  <label htmlFor="friendHeadline">Headline</label>
                  <input
                    type="text"
                    className="form-control"
                    name="headline"
                    placeholder="nec feugiat in fermentum posuere"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.headline}
                  />
                  <label htmlFor="friendUrl">Website</label>
                  <input
                    type="url"
                    className="form-control"
                    name="slug"
                    placeholder="http://"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.slug}
                  />
                  <label htmlFor="friendStatus">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="statusId"
                    placeholder="Active"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.statusId}
                  />
                  <label htmlFor="imageUrl">Image Url</label>
                  <input
                    type="url"
                    className="form-control"
                    name="primaryImage"
                    placeholder=""
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.primaryImage}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary m2"
                  onClick={this.onSubmitBtnClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendForm;
