import React, { Component } from "react";

class FriendForm extends Component {
  state = {
    friendInfo: {
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

  render() {
    return (
      <div
        className="container mt-5 p-5 ml-5 justify-content-center"
        id="addEditFriend"
      >
        <div className="row">
          <form
            className="col-md-10 shadow justify-content-center pb-3"
            style={{ "border-style": "ridge" }}
          >
            <div className="row" style={{ "background-color": "#4b0082" }}>
              <h2 style={{ color: "white" }} className="pt-2">
                Add or Edit Friend
              </h2>
            </div>
            <div className="form-group row pt-4">
              <label className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Dwight Schrute"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Bio</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  placeholder="This is a bio."
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Summary</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="summary"
                  placeholder="lorem ipsum dolor sit amet etc"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Headline</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="headline"
                  placeholder="This is a headline."
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Slug</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  placeholder="www.schrutefarms.com"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="statusId"
                  placeholder="Active"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Skills</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="skills"
                  placeholder="salesman of the year"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Primary Image</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="primaryImage"
                  placeholder="image url here"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  type="button"
                  className="btn btn-outline-light submit-button"
                  style={{ "background-color": "#4b0082" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendForm;
