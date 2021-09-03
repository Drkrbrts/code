import React from "react";
import * as friendsService from "../services/friendsService";
import { NavLink } from "react-router-dom";
// import SearchBar from "./SearchBar";

class Friends extends React.Component {
  state = {
    formData: {
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

  componentDidMount() {
    if (this.props.location.state) {
      let newValue = this.props.location.state;

      if (newValue.type === "TO_UPDATE") {
        let formData = newValue.payload;

        this.setState((prevState) => {
          console.log(formData, "componentDidMount");

          return { formData };
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

    this.setState((prevState) => {
      let formData = { ...prevState.formData };

      formData[inputName] = newValue;

      // console.log(newState);
      return { formData };
    });
  };

  onSubmitClicked = () => {
    let personData = this.state.formData;
    console.log("submit clicked", personData);

    if (this.props.location.state.type === "TO_UPDATE") {
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
        {/* <SearchBar></SearchBar> */}
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
            value={this.state.formData.title}
          />
          <br />
          <label>Bio</label>
          <input
            type="text"
            className="form-control"
            name="bio"
            onChange={this.onFormFieldChange}
            value={this.state.formData.bio}
          />
          <br />
          <label>Summary</label>
          <input
            type="text"
            className="form-control"
            name="summary"
            onChange={this.onFormFieldChange}
            value={this.state.formData.summary}
          />
          <br />
          <label>Headline</label>
          <input
            type="text"
            className="form-control"
            name="headline"
            onChange={this.onFormFieldChange}
            value={this.state.formData.headline}
          />
          <br />
          <label>Slug</label>
          <input
            type="text"
            className="form-control"
            name="slug"
            onChange={this.onFormFieldChange}
            value={this.state.formData.slug}
          />
          <br />
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            name="statusId"
            onChange={this.onFormFieldChange}
            value={this.state.formData.statusId}
          />
          <br />
          <label>Skills</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            onChange={this.onFormFieldChange}
            value={this.state.formData.skills}
          />
          <br />
          <label>PrimaryImage</label>
          <input
            type="text"
            className="form-control"
            style={{ marginBottom: "10px" }}
            name="primaryImage"
            onChange={this.onFormFieldChange}
            value={this.state.formData.primaryImage}
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
