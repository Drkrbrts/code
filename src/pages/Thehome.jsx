import React, { useRef } from "react";

import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./Thehome.css";
import { getCurrentUser } from "./UserService";

class Thehome extends React.Component {
  state = { currentUser: {} };

  /* {
    item: {
     id : 0,
     name : "string",
     roles : [
        "string"
      ],
      tenantId : "string"
    } */

  componentDidMount() {
    getCurrentUser()
      .then((user) => {
        this.setState({ currentUser: user });
      })
      .catch((err) => {
        toast.error("unable to get the current user");
      });
  }

  //onItemClicked = (e) => {
  //  e.preventDefault();
  // this.getUser();
  // console.log("clicked");
  //};

  render() {
    console.log(this.state);

    return (
      <div class="container">
        <h1> Welcome to your Home Page</h1>
        <h1> {this.state.currentUser.name}</h1>

        <h2>Roles</h2>
        {this.state.currentUser.roles &&
          this.state.currentUser.roles.map((role) => {
            return <div>{/*role*/}</div>;
          })}
      </div>
    );
    // multi-line expression wrapp in ()
  }
}
export default withRouter(Thehome);
