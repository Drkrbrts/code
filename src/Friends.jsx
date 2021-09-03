import React from "react";
import * as friendsService from "./services/friendsService";
import { NavLink } from "react-router-dom";

class Friends extends React.Component {
  state = {
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    skills: "",
    primaryImage: "",
  };

  componentDidMount() {
    if (this.props.location.state) {
      let newValue = this.props.location.state;

      if (newValue.type === "TO_UPDATE") {
        let newState = newValue.payload;

        this.setState((prevState) => {
          console.log(newState, "componentDidMount");

          return newState;
        });
      }
    }
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    // console.log(e, currentTarget)
    let newValue = currentTarget.value;
    // console.log(newValue)
    let inputName = currentTarget.name;
    // console.log(inputName)

    this.setState(() => {
      let newState = {};

      newState[inputName] = newValue;

      console.log(newState);
      return newState;
    });
  };

  onSubmitClicked = () => {
    let personData = this.state;
    console.log("submit clicked", personData);

    if (this.props.location.state) {
      friendsService
        .update(personData)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    } else {
      friendsService
        .add(personData)
        .then(this.onAddSuccess)
        .catch(this.onAddError);
    }
  };

  onAddSuccess = (response) => {
    console.log(response, "onAddSuccess");
  };

  onAddError = (error) => {
    console.warn(error, "onAddError");
  };

  onUpdateSuccess = (response) => {
    console.log(response, "onUpdateSuccess");

    this.props.history.push("/friends");
  };

  onUpdateError = (err) => {
    console.warn(err, "onUpdateError");
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "solid 1px lightgray",
            boxShadow: "1px",
            margin: "0 0 0 70px",
          }}
        >
          <h1 className="px-3">Add or Edit Friend</h1>
        </div>
        <div
          style={{
            border: "solid 1px lightgray",
            width: "50%",
            margin: "0 0 10px 70px",
            padding: "60px",
          }}
        >
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={this.onFormFieldChange}
            value={this.state.title}
          />
          <br />
          <label>Bio</label>
          <input
            type="text"
            className="form-control"
            name="bio"
            onChange={this.onFormFieldChange}
            value={this.state.bio}
          />
          <br />
          <label>Summary</label>
          <input
            type="text"
            className="form-control"
            name="summary"
            onChange={this.onFormFieldChange}
            value={this.state.summary}
          />
          <br />
          <label>Headline</label>
          <input
            type="text"
            className="form-control"
            name="headline"
            onChange={this.onFormFieldChange}
            value={this.state.headline}
          />
          <br />
          <label>Slug</label>
          <input
            type="text"
            className="form-control"
            name="slug"
            onChange={this.onFormFieldChange}
            value={this.state.slug}
          />
          <br />
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            name="statusId"
            onChange={this.onFormFieldChange}
            value={this.state.statusId}
          />
          <br />
          <label>Skills</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            onChange={this.onFormFieldChange}
            value={this.state.skills}
          />
          <br />
          <label>ImageUrl</label>
          <input
            type="text"
            className="form-control"
            style={{ marginBottom: "10px" }}
            name="primaryImage"
            onChange={this.onFormFieldChange}
            value={this.state.primaryImage}
          />
          <br />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSubmitClicked}
          >
            Submit
          </button>
          <div>
            <NavLink to="/friends">See all friends</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
