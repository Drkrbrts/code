import React from "react";

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatar: "",
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatar: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={(e) => this.change(e)}
        ></input>
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={(e) => this.change(e)}
        ></input>
        <br />
        <input
          name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={(e) => this.change(e)}
        ></input>
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => this.change(e)}
        ></input>
        <br />
        <input
          name="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          value={this.state.passwordConfirm}
          onChange={(e) => this.change(e)} // could do it this way
        ></input>
        <br />
        <input
          name="avatar"
          placeholder="Avatar Url"
          value={this.state.avatar}
          onChange={(e) => this.setState({ avatar: e.target.value })} // or this way
        ></input>
        <br />
        <button onClick={(e) => this.onSubmit(e)}>Register</button>
      </form>
    );
  }
}

export default Register;
