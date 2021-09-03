import React from "react";
import * as friendServices from "../services/friendServices";

class FriendForm extends React.Component {
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

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onSubmitFriendClicked = () => {
    console.log("submit friend firing");

    friendServices
      .addFriend(this.state.formData)
      .then(this.onSubmitFriendClickedSuccess)
      .catch(this.onSubmitFriendClickedError);
  };

  onSubmitFriendClickedSuccess = (response) => {
    console.log("add friend success", response);
    this.props.history.push("/friends");
  };

  onSubmitFriendClickedError = (errResponse) => {
    console.log("add friend fail", errResponse);
  };

  render() {
    return (
      <section className="vh-50 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100 p-5">
            <div className="row d-flex justify-content-center align-items h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-4">
                    <h4 className="text-uppercase text-center mb-3">
                      Add a Friend
                    </h4>

                    <form className="form-container">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="form-control form-control-lg title-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.title}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Title
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="bio"
                          name="bio"
                          className="form-control form-control-lg bio-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.bio}
                        />
                        <label className="form-label" htmlFor="form3Example2cg">
                          Bio
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="summary"
                          name="summary"
                          className="form-control form-control-lg summary-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.summary}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Summary
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="headline"
                          name="headline"
                          className="form-control form-control-lg headline-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.headline}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Headline
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="slug"
                          name="slug"
                          className="form-control form-control-lg slug-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.slug}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Slug
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="avatar"
                          id="primaryImage"
                          name="primaryImage"
                          className="form-control form-control-lg primary Image-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.primaryImage}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example5cdg"
                        >
                          PrimaryImage
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="statusId"
                          name="statusId"
                          className="form-control form-control-lg status Id-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.statusId}
                          readOnly={"Active"}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example5cdg"
                        >
                          StatusId
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={this.onSubmitFriendClicked}
                        >
                          Submit Friend
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FriendForm;
