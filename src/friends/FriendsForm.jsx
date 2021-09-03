import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as friendService from "../services/friendServices";

class AddFriend extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.formData;
    friendService
      .addFriend(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };
  onActionSuccess = (response) => {
    toast.success("Friend added successfully!");
    console.log(response);
    this.props.history.push("/all-friends");
  };

  onActionError = (error) => {
    console.log(error);
    toast.error("Friend was not added, please try again");
  };

  render() {
    return (
      <React.Fragment>
        <div className="Container col-md-6 p-5">
          <div className="form-content-right">
            <form>
              <h1>Add or Edit Friend:</h1>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  value={this.state.formData.title}
                  onChange={this.onFormFieldChanged}
                  placeholder="Title"
                  name="title"
                  type="text"
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input
                  value={this.state.formData.bio}
                  onChange={this.onFormFieldChanged}
                  placeholder="Short Bio"
                  name="bio"
                  type="text"
                  className="form-control"
                  id="bio"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="summary" className="form-label">
                  Summary
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="summary"
                  value={this.state.formData.summary}
                  onChange={this.onFormFieldChanged}
                  placeholder="Summary"
                  name="summary"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="headline" className="form-label">
                  Headline
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="headline"
                  value={this.state.formData.headline}
                  onChange={this.onFormFieldChanged}
                  placeholder="Headline"
                  name="headline"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slug" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  value={this.state.formData.slug}
                  onChange={this.onFormFieldChanged}
                  placeholder="Slug"
                  name="slug"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  value={this.state.formData.statusId}
                  onChange={this.onFormFieldChanged}
                  placeholder="Status"
                  type="text"
                  className="form-control"
                  id="statusId"
                  name="statusId"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="skills" className="form-label">
                  Skills
                </label>
                <input
                  value={this.state.formData.skills}
                  onChange={this.onFormFieldChanged}
                  placeholder="Skills"
                  type="text"
                  className="form-control"
                  id="skills"
                  name="skills"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="primaryImage" className="form-label">
                  Primary Image
                </label>
                <input
                  value={this.state.formData.primaryImage}
                  onChange={this.onFormFieldChanged}
                  placeholder="Image URL"
                  type="text"
                  className="form-control"
                  id="primaryImage"
                  name="primaryImage"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
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
export default AddFriend;
