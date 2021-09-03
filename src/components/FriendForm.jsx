import React from "react";
import { withRouter } from "react-router-dom";
import friendService from "../services/friendService";
import { toast } from "react-toastify";
import "./compStyle.css";
import debug from "sabio-debug";
const _logger = debug.extend("App");

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
  };

  componentDidMount() {
    let { state } = this.props.location;
    if (state) {
      let formData = { ...state };
      _logger(formData);
      formData.primaryImage = formData.primaryImage.imageUrl;
      this.setState((prevState) => {
        return { ...prevState, formData };
      });
    }
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = NewValue;
      return { formData };
    });
  };

  onSubmitClick = () => {
    let currentFormData = this.state.formData;
    if (this.props.location.state) {
      let { state } = this.props.location;
      friendService
        .update(state.id, currentFormData)
        .then(this.onUpdateSuccess)
        .catch(this.onAddorUpdateError);
    } else {
      friendService
        .add(currentFormData)
        .then(this.onAddSuccess)
        .catch(this.onAddorUpdateError);
    }
  };

  onAddSuccess = (response) => {
    console.log(response);
    toast.success("Friend Registration Successful");
    this.props.history.push("/friends");
  };

  onUpdateSuccess = (response) => {
    console.log(response);
    toast.success("Friend Update Successful");
    this.props.history.push("/friends");
  };

  onAddorUpdateError = (response) => {
    console.log(response);
    toast.warn(`${response.response.data.errors}`);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {this.state.isUpdate ? (
              <strong className="navbar-brand" href="#">
                Update Friend
              </strong>
            ) : (
              <strong className="navbar-brand" href="#">
                Add Friend
              </strong>
            )}
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-6 p-5">
              <div className="card">
                <form className="p-5">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Terry Hoitz"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.title}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bio"
                      name="bio"
                      placeholder="Is a New York cop"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.bio}
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
                      name="summary"
                      placeholder="He accidentally shot Derek Jeter on duty at a baseball game and then he thought his career had come to a dead end"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.summary}
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
                      name="headline"
                      placeholder="The Other Guys"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.headline}
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
                      name="slug"
                      placeholder="Terry@TheOtherGuys.com"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.slug}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="statusId" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="statusId"
                      name="statusId"
                      placeholder="Not Set"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.statusId}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="primaryImage" className="form-label">
                      Image Url
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="primaryImage"
                      name="primaryImage"
                      placeholder="https://bit.ly/3x5DWri"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.primaryImage}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitClick}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(FriendForm);
