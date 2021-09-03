import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Friends.css";

class Updatefriend extends React.Component {
  state = {
    id: 0,
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    /// object syntax

    /*
    const myObj = {name: "John"};

    myObj.name  /// John
    myobj["name"] /// John
    */
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    this.updateFriend()
      .then(() => {
        toast.success("updated Successfully");
        this.props.history.push("/friends");
        console.log("friend was added");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  updateFriend = () => {
    var config = {
      method: "PUT",
      url: `https://api.remotebootcamp.dev/api/friends/${this.state.id}`,
      data: JSON.stringify({ ...this.state }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  fetchFriendById = (id) => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/friends/${id}`,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("data", response.data.item);
        const friendData = response.data.item;
        this.setState({
          id: friendData.id,
          bio: friendData.bio,
          summary: friendData.summary,
          title: friendData.title,
          headline: friendData.headline,
          slug: friendData.slug,
          statusId: friendData.headline,
          primaryImage: friendData.primaryImage,
        });
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  componentDidMount() {
    // fetch the particular friend
    const friendId = this.props.match.params.id;
    this.fetchFriendById(friendId);
    // set the data of that in the state
  }

  render() {
    console.log("friends", this.state.friends);

    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Update Your Friend</h2>
            <p class="hint-text"></p>
            <div class="form-group">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                required="required"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="bio" class="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-bio"
                id="bio"
                name="bio"
                required="required"
                value={this.state.bio}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="summary" class="form-label">
                Summary
              </label>
              <input
                type="text"
                className="form-summary"
                id="summary"
                name="summary"
                required="required"
                value={this.state.summary}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="headline" class="form-label">
                headline
              </label>
              <input
                type="text"
                class="form-control"
                id="headline"
                name="headline"
                required="required"
                value={this.state.headline}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="slug" class="form-label">
                Slug
              </label>
              <input
                type="text"
                class="form-control"
                id="slug"
                name="slug"
                required="required"
                value={this.state.slug}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="status id" class="form-label">
                Status ID
              </label>
              <input
                type="text"
                class="form-control"
                id="statusId"
                name="statusId"
                value={this.state.statusId}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="primaryImage" class="form-label">
                Primary Image
              </label>
              <input
                type="url"
                class="form-control"
                name="primaryImage"
                id="primaryImage"
                placeholder="Image"
                required="required"
                value={this.state.primaryImage}
                onChange={this.handleChange}
              />
            </div>
            &nbsp;
            <button
              type="submit"
              class="btn btn-success btn-lg btn-blockon"
              //onClick={this.onItemClickedUpdate}
            >
              Update Friend
            </button>
          </form>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(Updatefriend);
