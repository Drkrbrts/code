import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import EventCard from "./EventCard";
import Pagination from "rc-pagination";
import Button from "react-bootstrap/Button";
import SearchEvents from "./SearchEvents";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Events.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
// import App from ‘./components/App’;
// import * as serviceWorker from ‘./helpers/serviceWorker’;
//import "bootstrap/dist/css/bootstrap.min.css";

const mapStyles = {
  width: "50%",
  height: "50%",
};

const PAGE_SIZE = 8;

class Event extends Component {
  state = {
    totalCount: 0,
    totalPages: 1,
    currentPageIndex: 0,
    events: [],
    startDate: new Date(),
    endDate: new Date(),
  };

  getOneEvent = () => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/events/feeds`,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("item data", response.data.item["370_Weekday"]);
        this.setState({
          totalCount: response.data.item.totalCount,
          currentPageIndex: response.data.item.pageIndex,
          totalPages: response.data.item.totalPages,
          events: response.data.item["370_Weekday"],
        });
      })
      .catch((response) => {
        console.warn(response);
        // events: [],
      });
  };

  getEvents = () => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/events/feed?pageIndex=0&pageSize=3`,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("item get data", response.data.item);
      })
      .catch((response) => {
        console.warn(response);
        // events: [],
      });
  };

  searchEvents = () => {
    let apiUrl = "";

    console.log(this.state.startDate.toLocaleDateString());

    if (!!this.state.startDate && !!this.state.endDate) {
      apiUrl = `https://api.remotebootcamp.dev/api/events/search?pageIndex=${
        // this.state.currentPageIndex
        0
      }&pageSize=${PAGE_SIZE}&dateStart=${this.state.startDate.toLocaleDateString()}&dateEnd=${this.state.endDate.toLocaleDateString()}`;
      console.log(apiUrl, 2);
    } else {
      apiUrl = `https://api.remotebootcamp.dev/api/events?pageIndex=${this.state.currentPageIndex}&pageSize=${PAGE_SIZE}`;
    }
    const config = {
      method: "GET",
      url: apiUrl,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("newest data", response.data.item.pagedItems);
        this.setState({
          totalCount: response.data.item.totalCount,
          currentPageIndex: response.data.item.pageIndex,
          totalPages: response.data.item.totalPages,
          events: response.data.item.pagedItems,
        });
      })
      .catch((response) => {
        console.warn(response);
        this.setState({
          events: [],
        });
      });
  };

  onPaginationChange = (current, pageSize) => {
    this.setState({ currentPageIndex: current - 1 }, () => {
      this.searchEvents();
    });
  };

  // componentDidMount() {
  //   // fetch the particular friend
  //   const TechId = this.props.match.params.id;
  //   this.fetchTechById(TechId);

  //   // set the data of that in the state
  // }

  // handleSubmit = (values) => {
  //   console.log(values, "updateForm");
  //   this.setState({ form: values });
  //   this.doFormSubmit();
  // };

  componentDidMount() {
    this.getOneEvent();
    this.getEvents();
  }

  // onChangeStart = (e) => {
  //   this.setState({ startDate: e });
  //   this.searchEvents();
  // };

  // onChangeEnd = (e) => {
  //   this.setState({ endDate: e });
  //   this.searchEvents();
  // };
  render() {
    console.log("state", this.state);

    // const renderError = (message) => <p style={{ color: "red" }}>{message}</p>;
    return (
      <div className="container">
        <SearchEvents />

        <div className="row">
          {this.state.events &&
            this.state.events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                // deleteFriend={this.deleteFriend}
              />
            ))}
          <div class="map-container">
            <h1>Event Location</h1>

            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
              <Marker position={{ lat: 48.0, lng: -122.0 }} />
            </Map>
          </div>
        </div>
        <Pagination
          total={this.state.totalCount}
          current={this.state.currentPageIndex + 1}
          pageSize={PAGE_SIZE}
          onChange={this.onPaginationChange}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB-e6dCwlH0IOcs9bKqukOBIdYRzhUqK5M",
})(Event);
