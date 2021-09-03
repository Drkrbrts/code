import React from "react";
import * as friendServices from "../services/friendServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FriendsForm extends React.Component {
  
    state = {
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "Active",
    primaryImage: "",
  };

  changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value});
  };

  onAddFriendClicked = (e) => {
      e.preventDefault();

      const payload = { ...this.state };
    
      friendServices.addfriend(payload).then(this.onAddFriendSuccess).catch(this.onAddFriendError);
  };

  onAddFriendSuccess = (response) => {
      console.log("Added Friend Successfully", response.data)
      toast.success("You've Added a Friend! Congrats!")
  };

  onAddFriendError = (response) => {
      console.log("Add Friend was Unsuccessful", response.data)
      toast.error("Oh No! Something Went Wrong!")
  }

  render() {
    let { title, bio, summary, headline, slug, statusId, primaryImage} = this.state;
      return (
        <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <form>
              <h1 className="h3 mb-3 fw-normal text-center">Add Friend</h1>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    value={bio}
                    onChange={this.changeHandler}
                  />
                </div>
                <label className="form-label">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  name="summary"
                  value={summary}
                  onChange={this.changeHandler}
                  aria-describedby="emailHelp"
                />
                <div className="mb-3">
                  <label className="form-label">Headline</label>
                  <input
                    type="text"
                    className="form-control"
                    name="headline"
                    value={headline}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    name="slug"
                    value={slug}
                    placeholder=" A unique headline title for {Person}, used for sharing post"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">StatusId</label>
                  <input
                    type="text"
                    className="form-control"
                    name="statusId"
                    value={statusId}
                    placeholder= "[ NotSet, Active, Deleted, Flagged ]"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Primary Image</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://example.com"
                    name="Primary Image"
                    value={primaryImage}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.onAddFriendClicked}
                  >
                    Add Friend
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      )
  }
 
}
export default FriendsForm;