import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    friendInfo: {
      title: "dede",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      skills: "",
      primaryImage: "",
    },
    fieldNames: [
      { name: "title", placeholder: "Dwight Schrute" },
      { name: "bio", placeholder: "This is a bio." },
      { name: "summary", placeholder: "lorem ipsum dolor sit amet etc" },
      { name: "headline", placeholder: "This is a headline." },
      { name: "slug", placeholder: "www.schrutefarms.com" },
      { name: "statusId", placeholder: "Active" },
      { name: "skills", placeholder: "salesman of the year" },
      { name: "primaryImage", placeholder: "Image Url here" },
    ],
  };

  onFormChange = (e) => {
    const friendInfo = { ...this.state.friendInfo };
    friendInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ friendInfo });
  };

  mapField = (field) => {
    return (
      <Child
        fieldName={field.name}
        key={field.name}
        inputValues={this.state.friendInfo[field.name]}
        handleFormChange={this.onFormChange}
      ></Child>
    );
  };

  render() {
    return (
      <div className="container mt-5 p-5 ml-5 justify-content-center">
        <div className="row">
          <form
            className="col-md-10 shadow justify-content-center pb-3"
            style={{ borderStyle: "ridge" }}
          >
            {this.state.fieldNames.map(this.mapField)}

            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  onClick={this.submitButtonHandler}
                  type="button"
                  className="btn btn-outline-light submit-button"
                  style={{ backgroundColor: "#4b0082" }}
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
