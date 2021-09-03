import React from "react";
import "rc-pagination/assets/index.css";
import { friendCreate } from "../services/userService";

class FriendsEdit extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      skills: "",
      primaryImage: "",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitFriendClicked = () => {
    console.log("friend clicked");
    friendCreate(this.state.formData)
      .then(this.friendCreateSuccess)
      .catch(this.friendCreateError);
  };
  friendCreateSuccess(response) {
    console.log({ "friendCreate Success!!!": response });
  }
  friendCreateError(response) {
    console.log({ "friendCreate Error..": response });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container p-10">
          <h1>
            <strong>Add or Edit Friend</strong>
          </h1>
          <div className="form-container p-10">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={this.onFormFieldChanged}
                  placeholder="Title"
                  value={this.state.formData.title}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputBio" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  onChange={this.onFormFieldChanged}
                  placeholder="bio"
                  value={this.state.formData.bio}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSummary" className="form-label">
                  Summary
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChanged}
                  placeholder="summary"
                  value={this.state.formData.summary}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputHeadline" className="form-label">
                  Headline
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChanged}
                  placeholder="headline"
                  value={this.state.formData.headline}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSlug" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChanged}
                  placeholder="slug"
                  value={this.state.formData.slug}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputStatus" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  onChange={this.onFormFieldChanged}
                  placeholder="status"
                  value={this.state.formData.status}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSkills" className="form-label">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  onChange={this.onFormFieldChanged}
                  placeholder="skills"
                  value={this.state.formData.skills}
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPreliminary Image"
                  className="form-label"
                >
                  Primary Image
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="primaryImage"
                  onChange={this.onFormFieldChanged}
                  placeholder="primary image"
                  value={this.state.formData.primaryImage}
                ></input>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onSubmitFriendClicked}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsEdit;
