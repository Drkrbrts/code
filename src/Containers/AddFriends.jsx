import React from "react";

import * as friendService from "../services/friendService";

class addFriends extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      headline: "",
      slug: "",
      status: "",
      skill: "",
      primaryImage: "",
    },
  };

  componentDidMount() {}

  onFormFieldChanged = (e) => {
    console.log(e.currentTarget.name);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      console.log(formData);
      return { formData };
    });
  };

  onSignUpClicked = (e) => {
    e.preventDefault();
    friendService
      .makeFriends(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response);
    this.resetForm();
  };
  onRegisterError = (err) => {
    console.warn(err);
  };

  resetForm = () => {
    this.setState({
      formData: {
        title: "",
        bio: "",
        headline: "",
        slug: "",
        status: "",
        skill: "",
        primaryImage: "",
      },
    });
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <strong>Add or Edit Friend</strong>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={this.state.formData.title}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="bio"
                    name="bio"
                    placeholder="Bio"
                    value={this.state.formData.bio}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="summary"
                    name="summary"
                    placeholder="This is a summary"
                    value={this.state.formData.summary}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="headline"
                    name="headline"
                    placeholder="Headline"
                    value={this.state.formData.headline}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    placeholder="A slug url"
                    value={this.state.formData.slug}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    name="status"
                    placeholder="Status id"
                    value={this.state.formData.status}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="url"
                    className="form-control"
                    id="primaryImage"
                    name="primaryImage"
                    placeholder="Image address"
                    value={this.state.formData.primaryImage}
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3 form-group"></div>

                <button
                  variant="primary"
                  className="btn btn-success"
                  type="submit"
                  onClick={this.onSignUpClicked}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default addFriends;
