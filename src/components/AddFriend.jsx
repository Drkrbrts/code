import React from "react";
import Fade from "@material-ui/core/Fade";
import * as FriendService from "../services/FriendService";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  // the first check for friendId param in componentDidMount is to initially check when the component mounts if there is a friendId param and if there is then an ajax call for getById is called in order to retrieve data from the endpoint and use the data to pre-fill the form

  componentDidMount() {
    let friendId = this.props.match.params.friendId;
    console.log("ComponentDidMount", { friendId });

    if (friendId) {
      FriendService.getById(friendId)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  // this time when there is a check for friendId param in componentDidUpdate it is to check if the component needs to update information used to pre-fill the form such as when a user clicks on a new friendId the component needs to update so componentDidUpdate fires and it checks if there is a new friendId param that is not the same as the previous friendId param
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log({ currentPath, previousPath });

    //this is checking if there is a friendId param and if there is a friendId param and the friendId param is not the previous friendId param then do a new getById ajax call in order to get data and pre-fill the form
    let friendId = this.props.match.params.friendId;
    if (friendId && prevProps.match.params.friendId !== friendId) {
      FriendService.getById(friendId)
        .then(this.onGetByIdUpdateSuccess)
        .catch(this.onGetByIdUpdateError);
    }
  }

  onGetByIdUpdateSuccess = (response) => {
    console.log(response);
    this.setState({
      formData: {
        title: response.data.item.bio,
        bio: response.data.item.bio,
        summary: response.data.item.summary,
        headline: response.data.item.headline,
        slug: response.data.item.slug,
        statusId: response.data.item.statusId,
        skills: response.data.item.skills,
        primaryImage: response.data.item.primaryImage.imageUrl,
      },
    });
  };

  onGetByIdUpdateError = (err) => {
    console.warn(err);
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    console.log({ currentTarget, newValue });

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      if (formData.statusId === "1") {
        formData.statusId = "NotSet";
      }
      if (formData.statusId === "2") {
        formData.statusId = "Active";
      }
      if (formData.statusId === "3") {
        formData.statusId = "Deleted";
      }
      if (formData.statusId === "4") {
        formData.statusId = "Flagged";
      }
      return { formData };
    });
  };

  onSubmitClicked = () => {
    let data = { ...this.state.formData };
    let friendId = this.props.match.params.friendId;
    console.log(data);
    if (friendId === undefined) {
      FriendService.add(data)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendError);
    } else {
      FriendService.update(friendId, data)
        .then(this.onUpdateFriendSuccess)
        .catch(this.onUpdateFriendError);
    }
  };

  onAddFriendSuccess = (response) => {
    console.log(response);
  };

  onAddFriendError = (err) => {
    console.log(err);
  };

  onUpdateFriendSuccess = (response) => {
    console.log(response);
  };

  onUpdateFriendError = (err) => {
    console.warn(err);
  };

  onGetByIdSuccess = (response) => {
    console.log(response);
    this.setState({
      formData: {
        title: response.data.item.title,
        bio: response.data.item.bio,
        summary: response.data.item.summary,
        headline: response.data.item.headline,
        slug: response.data.item.slug,
        statusId: response.data.item.statusId,
        skills: response.data.item.skills,
        primaryImage: response.data.item.primaryImage.imageUrl,
      },
    });
  };

  onGetByIdError = (err) => {
    console.warn(err);
  };

  render() {
    return (
      <Fade in={true} style={{ transitionDelay: "250ms" }}>
        <div className="p-2 mb-4 bg-light rounded-3">
          <h4
            style={{
              textAlign: "center",
            }}
          >
            Add a friend
          </h4>
          <div className="container-fluid py-1">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.title}
                  defaultValue={this.state.formData.title}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="inputBio">Bio:</label>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.bio}
                  defaultValue={this.state.formData.bio}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="summary">Summary:</label>
                <input
                  type="text"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.summary}
                  defaultValue={this.state.formData.summary}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="headline">Headline:</label>
                <input
                  type="text"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.headline}
                  defaultValue={this.state.formData.headline}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="slug">Slug:</label>
                <input
                  type="url"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.slug}
                  defaultValue={this.state.formData.slug}
                ></input>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="statusId">Status Id</label>
                <select
                  name="statusId"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.statusId}
                  defaultValue={this.state.formData.statusId}
                >
                  <option value="">Select Id Status...</option>
                  <option value="1">NotSet</option>
                  <option value="2">Active</option>
                  <option value="3">Deleted</option>
                  <option value="4">Flagged</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.skills}
                  defaultValue={this.state.formData.skills}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="primaryImage">Primary Image:</label>
                <input
                  type="url"
                  className="form-control"
                  name="primaryImage"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.primaryImage}
                  defaultValue={this.state.formData.primaryImage}
                ></input>
              </div>
              <button
                type="button"
                name="submit"
                className="btn btn-primary mr-3 m-3 mb-1"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Fade>
    );
  }
}

export default AddFriend;
