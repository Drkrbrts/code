import React, { Component } from "react";
import { getCars } from "../../services/userService";
import { toast } from "react-toastify";

class Login extends Component {
  state = { name: "", manufacturer: "", description: "", cost: "" };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    getCars(this.state).then(this.onSuccess).catch(this.onError);
  };

  onSuccess = (id) => {
    console.log(id);
    toast.success(`Car added Successfully on ${id.id}`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

    this.setState({ name: "", manufacturer: "", description: "", cost: "" });
  };

  onError = (response) => {
    console.log(response);
    toast.error(<strong>Error</strong>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  render() {
    return (
      <form style={{ width: "400px" }}>
        <h3>Cars</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.change(e)}
            className="form-control"
            placeholder="Car Name"
          />
        </div>
        <div className="form-group">
          <label>Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            value={this.state.manufacturer}
            onChange={(e) => this.change(e)}
            className="form-control"
            placeholder="Manufacturer"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.change(e)}
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            onChange={(e) => this.change(e)}
            className="form-control"
            placeholder="Cost"
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={(e) => this.onSubmit(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
