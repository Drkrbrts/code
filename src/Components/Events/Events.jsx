import React, { Component } from "react";
import eventServices from "../../services/eventServices";
import SingleEvent from "./SingleEvent";
import Pagination from "rc-pagination";
import { withRouter } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import EventFormModal from "./EventFormModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// const formSchema = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   headline: Yup.string().required("Required"),
//   description: Yup.string().required("Required"),
//   summary: Yup.string().required("Required"),
//   slug: Yup.string().required("Required"),
//   statusId: Yup.string().required("Required"),
// });

const searchEventsSchema = Yup.object().shape({
  startDate: Yup.string().required("Required"),
  endDate: Yup.string().required("Required"),
});

const containerStyle = {
  width: "250px",
  height: "250px",
};

class Events extends Component {
  state = {
    totalEvents: "",
    searchEvents: {
      startDate: "",
      endDate: "",
    },
    currentEvent: "",
    mappedEvents: [],
    center: {
      lat: 135.0,
      lng: 82.8628,
    },
    isOpen: false,
    eventFormData: {
      metaData: {
        dateStart: "2021-08-05T01:02:05.114Z",
        dateEnd: "2021-08-05T01:02:05.114Z",
        location: {
          latitude: 0,
          longitude: 0,
          zipCode: "string",
          address: "string",
        },
      },
      name: "string",
      headline: "string",
      description: "string",
      summary: "string",
      slug: "string",
      statusId: "NotSet",
    },
  };

  componentDidMount() {
    eventServices
      .getPaginated(0, 2)
      .then(this.getEventPaginatedSuccess)
      .catch(this.getEventPaginatedError);
  }

  getEventPaginatedSuccess = (response) => {
    console.log(response);
    let currentEvent = response.data.item.pagedItems[0];
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.currentEvent = this.renderCurrentEvent(currentEvent);
      newState.mappedEvents = response.data.item.pagedItems.map(this.mapEvents);
      newState.center.lat = currentEvent.metaData.location.latitude;
      newState.center.lng = currentEvent.metaData.location.longitude;
      newState.totalEvents = response.data.item.totalCount;
      return newState;
    });
    console.log(currentEvent);
  };
  getEventPaginatedError = (errResponse) => {
    console.log(errResponse);
  };

  mapEvents = (oneEvent) => {
    return (
      <div key={`eid-${oneEvent.id}`}>
        <SingleEvent
          event={oneEvent}
          onClick={this.onFullEventClick}
          {...this.props}
        />
      </div>
    );
  };

  onFullEventClick = (event) => {
    console.log(event);
    if (event.view) {
      this.setState((prevState) => {
        let newState = { ...prevState };
        newState.currentEvent = this.renderCurrentEvent(event);

        return newState;
      });
    }
  };

  renderUsTime = (time) => {
    let date = new Date(time).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return date;
  };

  renderCurrentEvent = (event) => {
    let date = new Date(event.metaData.dateStart);

    return (
      <React.Fragment>
        <div className="border card p-4 mx-2">
          <h3 className="mb-2">{event.name}</h3>
          <img className="screen-img my-2" src={event.slug} alt="..." />
          <h5>{event.headline}</h5>
          <p>{event.summary}</p>
          <p>{event.description}</p>
          <div className="container-fluid">
            <div className="row gx-0 justify-content-start">
              <div className="col-12 col-xl-6 me-1">
                <LoadScript googleMapsApiKey="AIzaSyAx_NVMJmPS6-AkB3ApZaiAUktE5fMX2OM">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={this.state.center}
                    zoom={10}
                  >
                    <Marker position={this.state.center} />
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className="col-12 col-sm-2 col-md-3 col-lg-5">
                <p className="fs-5 fw-bold">Location:</p>
                <p>{`${event.metaData.location.address}, ${event.metaData.location.zipCode}`}</p>
                <p>{date.toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  handleWireEvent = () => {};

  submitEvent = (e) => {
    console.log("Activate form submit");
  };

  handleSearchFromSubmit = (values) => {
    console.log(values);
  };

  handleEventFormSubmit = (values) => {
    console.log(values);
    eventServices
      .newEvent(values)
      .then(this.onNewEventSuccess)
      .catch(this.onNewEventError);
  };

  onNewEventSuccess = (response) => {
    console.log(response);
  };
  onNewEventError = (errResponse) => {
    console.log(errResponse);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid align-items-middle my-3">
          <div className="row justify-content-center">
            <div className=" col-lg-6  ">{this.state.currentEvent}</div>
            <div className="col-lg-4 mx-2">
              <div className="border col-12 p-4 mb-2 card">
                <p className="fs-5 fw-bold">Search events from:</p>
                <div className="row text-center">
                  <Formik
                    enableReinitialize={true}
                    initialValues={this.state.searchEvents}
                    onSubmit={this.handleSearchFromSubmit}
                    validationSchema={searchEventsSchema}
                  >
                    {({ values }) => (
                      <Form>
                        <div className="my-1 col-12">
                          <label
                            htmlFor="startDate"
                            className="form-label me-2"
                          >
                            Start
                          </label>
                          <Field
                            name="startDate"
                            className="form-control"
                            type="date"
                          />
                          <ErrorMessage
                            name={"startDate"}
                            component="div"
                            className="has-error"
                          />
                        </div>
                        <div className="my-1 col-12">
                          <label htmlFor="endDate" className="form-label me-2">
                            End
                          </label>
                          <Field
                            name="endDate"
                            className="form-control"
                            type="date"
                          />
                          <ErrorMessage
                            name={"endDate"}
                            component="div"
                            className="has-error"
                          />
                        </div>
                        <div className="my-1">
                          <button
                            className="btn btn-info"
                            type="submit"
                            // onClick={this.handleSearchEvent}
                          >
                            search
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="card col-12 my-2 p-4">
                <div className="row justify-content-end">
                  <Pagination
                    className="col-6"
                    pageSize={3}
                    total={this.state.totalEvents}
                  />
                  {/* pagination onChange={function} */}
                  <button
                    onClick={this.toggleModal}
                    className="btn btn-sm btn-outline-primary offset-2 col-3"
                  >
                    add
                  </button>
                </div>
                <div className="row justify-content-end my-2">
                  <button className="btn btn-sm btn-outline-secondary col-5">
                    View All On Map
                  </button>
                </div>
                <div className="mt-3">
                  <h4>Upcoming Events</h4>
                </div>
                <div className="mt-3">{this.state.mappedEvents}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <EventFormModal
            {...this.props}
            formData={this.state.eventFormData}
            handleFormData={this.handleEventFormSubmit}
            isOpen={this.state.isOpen}
            toggleModal={this.toggleModal}
            // submitEvent={this.handleEventFormSubmit}
            title={"Event"}
            content={"content here..."}
          ></EventFormModal>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Events);
