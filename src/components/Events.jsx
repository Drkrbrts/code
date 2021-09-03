import React from "react";
import { withRouter } from "react-router-dom";
import eventService from "../services/eventService";
import SingleEvent from "./SingleEvent";
import EventFormModal from "./EventFormModal";
// import SingleFirstEvent from "./SingleFirstEvent";
import "./compStyle.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

class Event extends React.Component {
  state = {
    currentEvents: [],
    mappedEvents: [],
    showCaseEvent: [],
    showCaseCard: [],
    isFormOpen: false,
    formData: {
      metaData: {
        dateStart: "",
        dateEnd: "",
        location: { latitude: "", longitude: "", zipcode: "", address: "" },
      },
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "NotSet",
    },
  };

  componentDidMount = () => {
    eventService
      .getEvents()
      .then(this.onGetEvensSuccess)
      .catch(this.onGetEvensError);
  };

  onGetEvensSuccess = (response) => {
    // console.log(response);
    // console.log(response.data.item.pagedItems);
    this.setState((prevState) => {
      let currentEvents = prevState.currentEvents;
      let mappedEvents = prevState.mappedEvents;
      let showCaseEvent = prevState.showCaseEvent;
      let showCaseCard = prevState.firstEventCard;
      currentEvents = response.data.item.pagedItems;
      mappedEvents = currentEvents.map(this.mapEvent);
      showCaseEvent = [currentEvents[0]];
      showCaseCard = showCaseEvent.map(this.showCase);
      return { currentEvents, mappedEvents, showCaseEvent, showCaseCard };
    });
  };

  onGetEvensError = (response) => {
    console.log({ response });
  };

  toggleFormModal = () => {
    this.setState((prevState) => {
      return { isFormOpen: !prevState.isFormOpen };
    });
  };

  handleFormData = (values) => {
    // console.log(values);
    const dateStartReformat = new Date(values.metaData.dateStart);
    const dateEndReformat = new Date(values.metaData.dateEnd);
    values.metaData.dateStart = dateStartReformat.toISOString();
    values.metaData.dateEnd = dateEndReformat.toISOString();
    console.log(values);
  };

  mapEvent = (event) => {
    return (
      <SingleEvent
        {...this.props}
        event={event}
        key={`event_${event.id}`}
      ></SingleEvent>
    );
  };

  showCase = (singleEvent) => {
    const containerStyle = {
      width: "300px",
      height: "300px",
    };

    const center = {
      lat: singleEvent.metaData.location.latitude,
      lng: singleEvent.metaData.location.longitude,
    };

    const eventTime = new Date(singleEvent.metaData.dateStart);

    return (
      <React.Fragment key={`event_${singleEvent.id}_showCase`}>
        <div className="card">
          <h3 className="card-title my-3 mx-4">{singleEvent.name}</h3>
          <img
            src={singleEvent.slug}
            className="card m-1 main-card-img"
            alt="..."
          />
          <div className="card-body">
            <h5>{singleEvent.headline}</h5>
            <p>{singleEvent.description}</p>
            <p>{singleEvent.summary}</p>
          </div>
          <div className="row">
            <div className="col m-2">
              <LoadScript googleMapsApiKey="AIzaSyCfM4qXVQUS1HcNFIX6ihGcwu68NTtmzr0">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                >
                  <Marker position={center}></Marker>
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="col m-2">
              <strong>Location:</strong>
              <p className="m-1">{singleEvent.metaData.location.address}</p>
              <p className="m-1">{eventTime.toLocaleDateString()}</p>
              {/* <p className="m-1">{eventTime.toLocaleTimeString()}</p> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container my-4">
          <div className="row">
            <div className="col-8">{this.state.showCaseCard}</div>
            <div className="col-4">
              <div className="card">
                <strong>This is for the Search by Date</strong>
              </div>
              <div className="card my-3">
                <div className="row">
                  <div className="col-6 my-2">
                    <strong>Paginate</strong>
                  </div>
                  <div className="col-6 my-2">
                    <button
                      type="button"
                      className="btn btn-secondary m-2"
                      onClick={this.toggleFormModal}
                    >
                      New Event
                    </button>
                    <button type="button" className="btn btn-secondary m-2">
                      View All On Map
                    </button>
                  </div>
                </div>
                {this.state.mappedEvents}
              </div>
            </div>
            <EventFormModal
              {...this.props}
              isFormOpen={this.state.isFormOpen}
              toggleFormModal={this.toggleFormModal}
              formData={this.state.formData}
              handleFormData={this.handleFormData}
            ></EventFormModal>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Event);
