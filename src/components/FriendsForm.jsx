import React from "react";
import friendsService from "../services/friendsService";

class FriendsForm extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      status: "",
      skills: "",
      primaryImage: "",
    },
  };
  componentDidMount() {
    const { state: locState } = this.props.location;

    if (!locState || locState.type !== "EDIT_FRIEND") {
      return;
    }

    let formData = { ...locState.friendData };

    this.setState(() => {
      return { formData };
    });
  }

  onSubmitClicked = (e) => {
    e.preventDefault();

    var updateData = this.state.formData;

    if (!this.props.match.params.id) {
      friendsService
        .add(updateData)
        .then(this.onAddSuccess)
        .catch(function (response) {
          console.warn(response);
        });
    } else {
      friendsService
        .updateById(updateData)
        .then(this.onupdateByIdSuccess)
        .catch(function (response) {
          console.warn(response.response.data.errors);
        });
    }
  };
  onAddSuccess = (response) => {
    console.log({ addSuccess: response });
    this.props.match.params.id = response.item;
  };
  onupdateByIdSuccess = (response) => {
    console.log({ updateSuccess: response });
    window.location.replace("/friends");
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  render() {
    return (
      <>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <p>Add or Edit friend</p>
          </div>
        </header>

        <form id="formTemplate">
          <div className="row g-3 align-items-center">
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputTitleLabel" className="col-form-label">
                  Title
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="title"
                  id="inputTitle"
                  className="form-control"
                  name="title"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.title}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputBioLabel" className="col-form-label">
                  Bio
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Bio"
                  id="inputBio"
                  className="form-control"
                  name="bio"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.bio}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSummaryLabel" className="col-form-label">
                  Summary
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Summary"
                  id="inputSummary"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.summary}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputHeadlineLabel" className="col-form-label">
                  Headline
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Headline"
                  id="inputHeadline"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.headline}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSlugLabel" className="col-form-label">
                  Slug
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Slug"
                  id="inputSlug"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.slug}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputStatusLabel" className="col-form-label">
                  Status
                </label>
              </div>
              <div className="col-sm-5">
                <select
                  className="form-control"
                  name="statusId"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.statusId}
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>NotSet</option>
                  <option>Deleted</option>
                  <option>Flagged</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSkillsLabel" className="col-form-label">
                  Skills
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Skills"
                  id="inputSkills"
                  className="form-control"
                  name="skills"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.skills}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label
                  htmlFor="inputPrimaryImageLabel"
                  className="col-form-label"
                >
                  Primary Image
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Primary Image"
                  id="inputPrimaryImage"
                  className="form-control"
                  name="primaryImage"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.primaryImage}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary sumbitButton"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default FriendsForm;
