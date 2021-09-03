import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class AddSchool extends React.Component {
  state = {
    schools: [
      {
        id: 0,
        name: "",
        location: "",
        level: "",
      },
    ],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSchool = () => {
    var config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/schools/",
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
    this.addSchool({ ...this.state })
      .then(() => {
        toast.success("Friend Added Successfully");
        this.props.history.push("/schools");
        console.log("friend was added");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  render() {
    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Add Your School</h2>
            <p class="hint-text"></p>
            <div class="form-group">
              <label for="id" class="form-label">
                Place Id
              </label>
              <input
                type="text"
                class="form-control"
                id="id"
                name="id"
                required="required"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required="required"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="location" class="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-bio"
                id="location"
                name="location"
                required="required"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="level" class="form-label">
                Level
              </label>
              <input
                type="text"
                className="form-summary"
                id="level"
                name="level"
                required="required"
                value={this.state.level}
                onChange={this.handleChange}
              />
            </div>
            &nbsp;
            <button
              type="submit"
              class="btn btn-success btn-lg btn-blockon"
              //onClick={this.onItemClickedUpdate}
            >
              Add School
            </button>
          </form>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(AddSchool);
