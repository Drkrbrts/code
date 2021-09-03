import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Friends.css";

class Friends extends React.Component {
  state = {
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: "",
    friends: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = () => {
    var config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/friends",
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

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    this.addFriend({ ...this.state })
      .then(() => {
        toast.success("Added Successfully");
        console.log("friend was added");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  /*updateFriend = () => {
    var config = {
      method: "PUT",
      url: "https://api.remotebootcamp.dev/api/friends",
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

  onItemClickedUpdate = (e) => {
    this.updateFriend();
    console.log("clicked");
  }; */

  /*showFriends = () => {
    var config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=5",
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("data", response.data.item.pagedItems);
        console.log(this.state.friends);
        this.setState({ friends: response.data.item.pagedItems });
      })
      .catch((response) => {
        console.warn(response);
      });
  }; 

  

  onItemClickedShow = (e) => {
    this.showFriends();
    console.log("clicked");
  }; 

  deleteFriends = (id) => {
    console.log(id);
    var config = {
      method: "DELETE",
      url: `https://api.remotebootcamp.dev/api/friends/${id}`,
      data: JSON.stringify({ ...this.state }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    axios(config)
      .then((response) => {
        console.log("data", response.data);
        console.log(this.state.friends);
        const newFriends = this.state.friends.filter(
          (friend) => friend.id !== id
        );
        this.setState({ friends: newFriends });
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  onItemClickedDelete = (id) => {
    this.deleteFriends(id);
    console.log("clicked");
  };  */

  render() {
    console.log("friends", this.state.friends);

    const items = this.state.friends.map((friend) => (
      <div key={friend.id} class="col-md-5 card-template">
        <section id="templateThree">
          <div class="row wd-25"></div>
          <div class="col-sm-8 mb-4">
            <div class="card border-0 shadow">
              <img
                src={friend.primaryImage.imageUrl}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">{friend.headline}</h5>
                <div class="card-text text-black-50">{friend.bio}</div>
                <div class="card-text text-black-50">{friend.summary}</div>
                <div>
                  <button
                    type="button"
                    class="btn btn-success btn-lg btn-blockon"
                    onClick={() => this.onItemClickedDelete(friend.id)}
                  >
                    Delete Friend
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-success btn-lg btn-blockon"
                    onClick={this.onItemClickedUpdate}
                  >
                    Update Friend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ));
    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Create Your Friend's List</h2>
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
                type="text"
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
            <div class="form-group">
              <button type="submit" class="btn btn-success btn-lg btn-block">
                Add Friend
              </button>
            </div>
          </form>
          &nbsp;
          <div>
            <button
              type="button"
              class="btn btn-success btn-lg btn-blockon"
              onClick={this.onItemClickedShow}
            >
              Show Friends
            </button>
          </div>
        </div>
        <div class="container workspace">
          <div class="row">
            <div class="col">{items}</div>
          </div>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(Friends);
