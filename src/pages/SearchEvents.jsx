import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import EventCard from "./EventCard";
import Pagination from "rc-pagination";
import Button from "react-bootstrap/Button";

import "./SearchEvents.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
// import App from ‘./components/App’;
// import * as serviceWorker from ‘./helpers/serviceWorker’;
//import "bootstrap/dist/css/bootstrap.min.css";

const schema = Yup.object().shape({
  dateStart: Yup.string().required("Name is required"),
  dateEnd: Yup.string().required("Profile is required"),
});

const PAGE_SIZE = 8;

class SearchEvents extends Component {
  state = {
    dateStart: "",
    dateEnd: "",
    totalCount: 0,
    totalPages: 1,
    currentPageIndex: 0,
    events: [],
  };

  // handleSearchChangeStart = (e) => {
  //   this.setState({
  //     dateStart: e.target.value,
  //   });
  // };

  // handleSearchChangeEnd = (e) => {
  //   this.setState({
  //     dateEnd: e.target.value,
  //   });
  // };

  handleSubmit = (values) => {
    console.log(values, "search");
    this.setState({ ...values });
    this.searchEvents();
  };

  // onSearchClick = () => {
  //   this.searchEvents();
  // };

  searchEvents = () => {
    let apiUrl = "";

    console.log(this.state.dateStart);

    if (!!this.state.dateStart && !!this.state.dateEnd) {
      apiUrl = `https://api.remotebootcamp.dev/api/events/search?pageIndex=${this.state.currentPageIndex}&pageSize=${PAGE_SIZE}&dateStart=${this.state.dateStart}&dateEnd=${this.state.dateEnd}`;
      console.log(apiUrl);
    } else {
      apiUrl = `https://api.remotebootcamp.dev/api/events/feed?pageIndex=0&pageSize=4`;
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

  componentDidMount() {
    this.searchEvents();
  }

  render() {
    console.log("state", this.state);

    const renderError = (message) => <p style={{ color: "red" }}>{message}</p>;
    return (
      <div className="container">
        <div>
          <div class="signup-form form-container">
            <Formik
              initialValues={this.state}
              validationSchema={schema}
              onSubmit={this.handleSubmit}
              enableReinitialize={true}
            >
              {({ values }) => (
                <div className="search-container">
                  <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ">
                    <div className="d-flex">
                      <div>
                        <div className="form-group">
                          <label htmlFor="dateStart">Date Events Started</label>
                          <Field
                            type="text"
                            name="dateStart"
                            className="form-control"
                          />

                          <ErrorMessage name="DateStart" render={renderError} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="dateEnd">Date Events Ended</label>
                          <Field
                            type="text"
                            name="dateEnd"
                            className="form-control"
                          />
                          <ErrorMessage name="dateEnd" render={renderError} />
                        </div>
                        &nbsp;
                        <button
                          id="search-button-events"
                          type="submit"
                          class="btn btn-primary "
                        >
                          Search Events
                        </button>
                        <div className="ml-auto">
                          <NavLink to="/AddEvent">
                            <Button> Add Event </Button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
            <div className="row">
              {this.state.events.map((event) => (
                <EventCard key={event.id} event={event} /> //deleteJob={this.deleteJob}//
              ))}

              <div style={{ height: 100, marginVertical: 20, paddingTop: 25 }}>
                <Pagination
                  total={this.state.totalCount}
                  current={this.state.currentPageIndex + 1}
                  pageSize={PAGE_SIZE}
                  onChange={this.onPaginationChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchEvents);
