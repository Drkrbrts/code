import React from "react";
import { toast } from "react-toastify";
import * as friendsService from "../services/friendsService";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      primaryImage: "",
      statusId: "active",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    friendsService
      .addFriend(this.state)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
  };

  onAddFriendSuccess = (response) => {
    console.log(response);
    toast.success("You have added a new Friend.");
  };

  onAddFriendError = (errResponse) => {
    console.log(errResponse);
    toast.error("Friend registration failed.");
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputTitle1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputBio1">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bio"
                    name="bio"
                    placeholder="bio"
                    value={this.state.bio}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputSummary1">Summary</label>
                  <input
                    type="text"
                    className="form-control"
                    id="summary"
                    name="summary"
                    placeholder="summary"
                    value={this.state.summary}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputHeadline1">Headline</label>
                  <input
                    type="text"
                    className="form-control"
                    id="headline"
                    name="headline"
                    placeholder="Headline"
                    value={this.state.headline}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputSlug1">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    placeholder="Slug"
                    value={this.state.slug}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputImage1">Image</label>
                  <input
                    type="url"
                    className="form-control"
                    id="primaryImage"
                    name="primaryImage"
                    placeholder="Primary Image"
                    value={this.state.primaryImage}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                  <button
                    className="btn btn-warning submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AddFriend;
