import React from "react";
import * as friendsService from "../services/friendsService";
class AddFriends extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      primaryImage: "",
    },
  };
  onAddUserClicked = (e) => {
    e.preventDefault();
    this.props.history.push("/friends");
    friendsService
      .friendsPost(this.state.formData)
      .then(this.onAddUserSuccess)
      .catch(this.onAddUserError);
  };
  onAddUserSuccess = (response) => {
    console.log(response);
  };
  onAddUserError = (response) => {
    console.log(response);
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
  render() {
    return (
      <div className="container">
        <div className="col-md-4">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleBio" className="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-control"
                id="bio"
                name="bio"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.bio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleSummary" className="form-label">
                Summary
              </label>
              <input
                type="text"
                className="form-control"
                id="summary"
                name="summary"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.summary}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleHeadline" className="form-label">
                Headline
              </label>
              <input
                type="text"
                className="form-control"
                id="headline"
                name="headline"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.headline}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleSlug" className="form-label">
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.slug}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="exampleStatusId" className="form-label">
                StatusId
              </label>
              <input
                type="text"
                className="form-control"
                id="statusId"
                name="statusId"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.statusId}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="exampleImage" className="form-label">
                Primary Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="primaryImage"
                name="primaryImage"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.primaryImage}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onAddUserClicked}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddFriends;
