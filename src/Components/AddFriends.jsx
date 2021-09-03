import React from "react";
import { addFriend } from "../services/friendsService";
import { toast } from "react-toastify";

class AddFriends extends React.Component {
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

  onAddFriendClicked = () => {
    addFriend(this.state.formData)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
  };
  onAddFriendSuccess = (response) => {
    toast("Friend Post Success");
    this.props.history.push("/viewfriends");
    console.log(response);
  };
  onAddFriendError = (response) => {
    console.warn(response);
  };

  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <div className="col-md-4 p-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="titleInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bioInput" className="form-label">
                    Bio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.bio}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="summaryInput" className="form-label">
                    Summary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="summary"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.summary}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="headlineInput" className="form-label">
                    Headline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="headline"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.headline}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="slugInput" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="slug"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.slug}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlSelect"
                    className="form-label"
                  >
                    Status
                  </label>
                  <select
                    className="form-control"
                    value={this.state.formData.statusId}
                    onChange={this.onFormFieldChanged}
                    name="statusId"
                  >
                    <option value="">Select status</option>
                    <option value="notSet">Not Set</option>
                    <option value="active">Active</option>
                    <option value="deleted ">Deleted</option>
                    <option value="flagged">Flagged</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="primaryImageInput" className="form-label">
                    Primary Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="primaryImage"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.primaryImage}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onAddFriendClicked}
                >
                  Add Friend
                </button>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default AddFriends;
