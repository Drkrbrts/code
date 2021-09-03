import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Schools.css";

class UpdateSchool extends React.Component {
  state = {
    id: 0,
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
    this.updateSchool()
      .then(() => {
        toast.success("updated Successfully");
        this.props.history.push("/schools");
        console.log("friend was added");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  updateSchool = () => {
    var config = {
      method: "PUT",
      url: `https://api.remotebootcamp.dev/api/entities/Schools/`,
      data: JSON.stringify({ schools: [this.state] }),
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
  componentDidMount() {
    // fetch the particular friend
    // const schoolName = this.props.match.params.name;
    // this.fetchSchoolName(schoolName);
    // set the data of that in the state
  }

  render() {
    console.log("friends", this.state.schools);

    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Update Your School</h2>
            <p class="hint-text"></p>
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
                Bio
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
              Update School
            </button>
          </form>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(UpdateSchool);

// let schools=[]
