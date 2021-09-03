import React from "react";
import * as userService from "../../services/userServices";

class AddFriend extends React.Component {
  state = {
    formData: {
      name: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      status: "",
      avatar: "",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    // console.log('field',e.currentTarget)
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitClick = (e) => {
    //register data

    e.preventDefault();
    var copy = { ...this.state.formData };

    let data = {
      title: copy.name,
      bio: copy.bio,
      summary: copy.summary,
      headline: copy.headline,
      slug: copy.slug,
      statusId: copy.status,
      primaryImage: copy.avatar,
    };
    userService
      .addFriend(data)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
    console.log("Data", data);
  };

  onAddFriendSuccess = (response) => {
    //go friends page
    console.log("Edit successful", response);
    this.props.history.push("/friends/1");
  };
  onAddFriendError = (response) => {
    console.warn({ error: response });
  };

  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <div className="row">
              <h5>
                <strong>Add friend</strong>
              </h5>
              <div className="col-md-4 pd-5 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bio"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.bio}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <input
                      type="text"
                      className="form-control"
                      name="summary"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.summary}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="headline">Headline</label>
                    <input
                      type="text"
                      className="form-control"
                      name="headline"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.headline}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input
                      type="text"
                      className="form-control"
                      name="slug"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.slug}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.status}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="avatar">Avatar Url</label>
                    <input
                      type="url"
                      className="form-control"
                      name="avatar"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.avatar}
                    />
                  </div>
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      //   value="registration"
                      onClick={this.onSubmitClick}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <div></div>
      </React.Fragment>
    );
  }
}
export default AddFriend;
