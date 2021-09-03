import React, { useRef } from "react";

import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "./Home.css";
import { getCurrentUser } from "./UserService";

const mapStyles = {
  width: "50%",
  height: "50%",
};

class MapDemo extends React.Component {
  /* {
    item: {
     id : 0,
     name : "string",
     roles : [
        "string"
      ],
      tenantId : "string"
    } */

  // componentDidMount() {
  //   getCurrentUser()
  //     .then((user) => {
  //       this.setState({ currentUser: user });
  //     })
  //     .catch((err) => {
  //       toast.error("unable to get the current user");
  //     });
  // }

  //onItemClicked = (e) => {
  //  e.preventDefault();
  // this.getUser();
  // console.log("clicked");
  //};

  render() {
    console.log(this.state);

    return (
      <div class="map-container">
        <h1>Google Map Demo</h1>

        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
      </div>
    );
    // multi-line expression wrapp in ()
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB-e6dCwlH0IOcs9bKqukOBIdYRzhUqK5M",
})(MapDemo);
