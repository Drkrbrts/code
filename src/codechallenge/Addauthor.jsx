import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { addAuthor } from "./add-author-service";
//import "./Register.css";

class Addauthor extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: 0,
    salary: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    addAuthor({ ...this.state })
      .then(() => {
        console.log("author was added");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  render() {
    return (
      <div class="signup-form form-container">
        <form onSubmit={this.doFormSubmit}>
          <h2>Add Author</h2>
          <p class="hint-text"></p>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="First Name"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Last Name"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="age"
              name="age"
              placeholder="age"
              value={this.state.age}
              required="required"
              onChange={this.handleChange}
            />
            <small id="ageHelp" class="form-text text-muted">
              Place your Age Here.
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="salary"
              name="salary"
              placeholder="salary"
              required="required"
              value={this.state.salary}
              onChange={this.handleChange}
            />
            <small id="salaryHelp" class="form-text text-muted">
              Place your Salary Here.
            </small>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">
              Add Author
            </button>
          </div>
        </form>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(Addauthor);
