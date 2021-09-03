import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../component/Logout";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedin: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedin: true });
  }
  handleLogoutClick() {
    <Logout />;
    this.setState({ isLoggedin: false });
  }

  greeting = (props) => {
    const isLoggedin = props.isLoggedin;
    if (isLoggedin) {
      return <h5>Welcome back!</h5>;
    }
    return (
      <center>
        <h5>Please Log In</h5>
      </center>
    );
  };

  render() {
    const isLoggedin = this.props.isLoggedin;
    let button;

    if (isLoggedin) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedin={isLoggedin} />
        {button}
      </div>
    );
  }
}

// function UserGreeting(props) {
//   return <h5>Welcome back!</h5>;
// }

// function GuestGreeting(props) {
//   return (
//     <center>
//       <h5>Please Log In</h5>
//     </center>
//   );
// }

// function Greeting(props) {
//   const isLoggedin = props.isLoggedin;
//   if (isLoggedin) {
//     return <h5>Welcome back!</h5>;
//   }
//   return <center>
//   <h5>Please Log In</h5>
// </center>;
// }

function LoginButton(props) {
  return (
    <nav>
      <div className="text-end">
        <button
          type="submit"
          // onClick={this.onClick}
          className="btn btn-outline-light me-2"
          onClick={props.onClick}
        >
          <NavLink to="/login">Login</NavLink>
        </button>
        <button type="button" className="btn btn-warning">
          <NavLink to="/register">Sign-up</NavLink>
        </button>
      </div>
    </nav>
  );
}

function LogoutButton(props) {
  console.log(props);
  return (
    <button
      type="submit"
      className="btn btn btn-danger btn-lg"
      onClick={props.handleLogoutClick}
    >
      Logout
    </button>
  );
}

export default LoginControl;
