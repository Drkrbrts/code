import React from "react";
import * as fitnessService from "./fitnessService";
import { toast } from "react-toastify";

class EntityForm extends React.Component {
  state = {
    user: {
      email: "",
      name: "",
      age: 0,
    },
  };

  formSubmit = (e) => {
    e.preventDefault();
    fitnessService
      .postUser(this.state.user)
      .then(this.postSuccess)
      .catch(this.postError);
  };

  postSuccess = (response) => {
    console.log(response);
    toast.success(`Add User Success! Id = ${response.data.item}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  postError = (err) => {
    console.log({ error: err });
    toast.error("Add User Error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onChange = (e) => {
    console.log({ syntheticEvent: e });
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState((prevState) => {
      var newUser = { ...prevState.user };
      newUser[name] = value;
      return { user: newUser };
    }, this.stateChange);
  };

  stateChange = () => {
    console.log("State changed", this.state.user);
  };

  render() {
    return (
      <div className="container">
        <h1>Add Fitness User</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.formSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EntityForm;
