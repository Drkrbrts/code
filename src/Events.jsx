import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import EventForm from "./EventForm";
import ShareEventForm from "./ShareEventForm";
import * as eventService from "./services/eventService";
import * as fileService from "./services/fileService";
import * as userService from "./services/userService";
import SingleEvent from "./SingleEvent";
import GoogleMapReact from "google-map-react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";

const Marker = () => {
  return <h1 style={{ color: "red" }}>*</h1>;
};

class Events extends Component {
  state = {
    emailPayload: {
      to: [],
      bcc: "",
      body: "",
      name: "",
    },
    currentUserEmail: "",
    mainEvent: {
      metaData: {
        dateStart: "",
        dateEnd: "",
        location: {
          latitude: "",
          longitude: "",
          zipCode: "",
          address: "",
        },
      },
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "",
      selectedFile: "",
    },
    eventInfo: {
      metaData: {
        dateStart: "",
        dateEnd: "",
        location: {
          latitude: "",
          longitude: "",
          zipCode: "",
          address: "",
        },
      },
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "",
    },
    searchDateStart: "",
    searchDateEnd: "",
    pageIndex: 0,
    pageSize: 3,
    total: 0,
    isOpen: false,
    modalTitle: "",
    center: {
      lat: null,
      lng: null,
    },
    zoom: 6,
    selectedFile: null,
    imagePreviewUrl: "",
    isShareEventOpen: false,
  };

  componentDidMount() {
    eventService
      .getPage(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetAllEventsSuccess)
      .catch(this.onGetAllEventsError);

    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }

  mapEvent = (anEvent) => {
    return (
      <SingleEvent
        event={anEvent}
        key={anEvent.id}
        onEditBtn={this.onEditBtn}
        onViewMoreBtn={this.onViewMoreBtn}
        onAddEventBtn={this.onAddEventBtn}
        onSubmitBtn={this.onSubmitBtn}
        toggle={this.onToggle}
        isOpen={this.state.isOpen}
      />
    );
  };

  //------------------------------------

  onSubmitBtn = (event) => {
    console.log(event);

    event.metaData.location.latitude = Number(event.metaData.location.latitude);

    event.metaData.location.longitude = Number(
      event.metaData.location.longitude
    );

    if (this.state.modalTitle === "Edit Event") {
      eventService
        .update(event.id, event)
        .then(this.onUpdateEventSuccess)
        .catch(this.onUpdateEventError);
    } else if (this.state.modalTitle === "Add an Event") {
      eventService
        .add(event)
        .then(this.onAddEventSuccess)
        .catch(this.onAddEventError);
    }
  };

  onHandleChange = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.eventInfo };
      newState[name] = newValue;
      return { eventInfo: newState };
    });
  };

  onSearchDateChange = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;
    console.log(name, newValue);

    this.setState((prevState) => {
      let newState = { ...prevState };
      newState[name] = newValue;
      let start = newState.searchDateStart;
      let end = newState.searchDateEnd;
      console.log(newState, start, end);
      return { newState, searchDateStart: start, searchDateEnd: end };
    });
  };

  onMetaData = (e) => {
    let name = e.currentTarget.name;
    let newValue = e.currentTarget.value;

    this.setState((prevState) => {
      let metaData = { ...prevState.eventInfo.metaData };

      if (
        name === "zipCode" ||
        name === "address" ||
        name === "latitude" ||
        name === "longitude"
      ) {
        metaData.location[name] = newValue;
        return {
          ...prevState,
          eventInfo: { ...prevState.eventInfo, metaData },
        };
      } else {
        metaData[name] = newValue;
        return {
          ...prevState.eventInfo,
          eventInfo: { ...prevState.eventInfo, metaData },
        };
      }
    });
  };

  onAddEventBtn = () => {
    this.setState(() => {
      let eventInfo = {
        metaData: {
          dateStart: "",
          dateEnd: "",
          location: {
            latitude: "",
            longitude: "",
            zipCode: "",
            address: "",
          },
        },
        name: "",
        headline: "",
        description: "",
        summary: "",
        slug: "",
        statusId: "",
      };
      return { isOpen: true, eventInfo, modalTitle: "Add an Event" };
    });
  };

  onEditBtn = (anEvent) => {
    this.setState(() => {
      let start = new Date(anEvent.metaData.dateStart).toISOString();
      anEvent.metaData.dateStart = start.split("T")[0];
      console.log(anEvent.metaData.dateStart);

      let end = new Date(anEvent.metaData.dateEnd).toISOString();
      anEvent.metaData.dateEnd = end.split("T")[0];

      return {
        eventInfo: anEvent,
        isOpen: true,
        modalTitle: "Edit Event",
      };
    });
  };

  onViewMoreBtn = (event) => {
    let mainEvent = event;

    let lat = Number(mainEvent.metaData.location.latitude);
    let lng = Number(mainEvent.metaData.location.longitude);

    this.setState((prevState) => {
      let emailPayload = { ...prevState.emailPayload };
      emailPayload.name = `${mainEvent.name} ${mainEvent.headline}`;

      emailPayload.body = `<h1>${mainEvent.name} ${mainEvent.headline}</h1>
        \n<div className="d-flex style={{width: "50%"}}><img src="${
          mainEvent.slug
        }"/></div>

         <h3>Dates: (${mainEvent.metaData.dateStart.split("T")[0]} - ${
        mainEvent.metaData.dateEnd.split("T")[0]
      })</h3> 
      \n\n<h4>Location: ${mainEvent.metaData.location.address},${
        mainEvent.metaData.location.zipCode
      }
      <h4> \n\n<p>Details: ${mainEvent.description}<p>`;

      return {
        ...prevState,
        mainEvent,
        center: { lat, lng },
        zoom: 13,
        mapMarkers: null,
        emailPayload,
      };
    });
  };

  onToggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpen: !prevState.isOpen,
      };
    });
  };

  onShareEventToggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isShareEventOpen: !prevState.isShareEventOpen,
      };
    });
  };

  mapMarkers = (location) => {
    return (
      <Marker
        key={location.latitude}
        lat={location.latitude}
        lng={location.longitude}
      ></Marker>
    );
  };

  onViewAllEventsOnMapBtn = () => {
    navigator.geolocation.getCurrentPosition(this.getCurrPos);
  };

  getCurrPos = (position) => {
    let lat;
    let lng;
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(lat, lng);
    this.setState((prevState) => {
      return {
        ...prevState,
        zoom: 4,
        center: { lat: lat, lng: lng },
        mapMarkers: prevState.allMarkers.map(this.mapMarkers),
      };
    });
  };

  //PAGINATION
  onPageChanged = (currentPage) => {
    this.setState((prevState) => {
      let index = currentPage - 1;
      if (this.state.searchDateStart && this.state.searchDateEnd) {
        eventService
          .search(
            index,
            this.state.pageSize,
            this.state.searchDateStart,
            this.state.searchDateEnd
          )
          .then(this.onGetAllEventsSuccess)
          .catch(this.onGetAllEventsError);
      } else {
        eventService
          .getPage(index, this.state.pageSize)
          .then(this.onGetAllEventsSuccess)
          .catch(this.onGetAllEventsError);
      }
      return { ...prevState, pageIndex: index, mapMarkers: null, zoom: 6 };
    });
  };

  //SEARCH

  onSearchBtn = () => {
    eventService
      .search(
        this.state.pageIndex,
        this.state.pageSize,
        this.state.searchDateStart,
        this.state.searchDateEnd
      )
      .then(this.onGetAllEventsSuccess)
      .catch(this.onGetAllEventsError);
  };

  //FILE UPLOAD
  fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];

    this.setState({
      selectedFile: file,
    });
  };

  fileUploadHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    fileService
      .add(formData)
      .then(this.onFileUploadSuccess)
      .catch(this.onFileUploadError);
  };

  //SHARE WITH EMAIL
  onHandleSendMsg = (e) => {
    console.log(e);
    let email = this.state.emailPayload;
    let recipient = [];
    if (email.to.includes(",")) {
      email.to = email.to.split(", ");
      console.log("IF firing:", email);
    } else {
      recipient.push(email.to);
      email.to = recipient;
      console.log("else firing:", email);
    }

    userService
      .sendEmail(email)
      .then(this.onSendEmailSuccess)
      .catch(this.onSendEmailError);
  };

  onHandleShareChange = (e) => {
    console.log(e, e.target.name, e.target.value);
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.emailPayload };
      newState[name] = newValue;
      return { emailPayload: newState };
    });
  };
  //-----------------------------------------

  onSendEmailSuccess = (res) => {
    console.log(res);
    toast.success("Email was sent successfully :)");
  };
  onSendEmailError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onCurrentUserSuccess = (res) => {
    console.log(res);
    let id = res.data.item.id;

    userService
      .userId(id)
      .then(this.onGetUserByIdSuccess)
      .catch(this.onGetUserByIdError);
  };

  onGetUserByIdSuccess = (res) => {
    console.log(res);
    let userEmail = res.data.item.email;
    this.setState((prevState) => {
      let emailPayload = { ...prevState.emailPayload };
      emailPayload.bcc = userEmail;
      return { currentUserEmail: userEmail, emailPayload };
    });
  };
  onGetUserByIdError = (err) => {
    console.error({ error: err });
  };

  onCurrentUserError = (err) => {
    console.error({ error: err });
  };

  onFileUploadSuccess = (res) => {
    let url = res.data.items[0];
    console.log("URL", url);

    this.setState((prevState) => {
      return {
        ...prevState,
        selectedFile: url,
      };
    });
  };

  onFileUploadError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onAddEventSuccess = (res) => {
    console.log(res);
    toast.success("Event was created :)");
  };

  onAddEventError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onUpdateEventSuccess = (res) => {
    console.log(res);
    toast.success("Event was updated successfully :)");
  };

  onUpdateEventError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onGetAllEventsSuccess = (res) => {
    console.log(res);
    let allEvents = res.data.item.pagedItems;
    let allMarkers = allEvents.map((event) => event.metaData.location);

    this.setState((prevState) => {
      let center = {
        lat: allEvents[0].metaData.location.latitude,
        lng: allEvents[0].metaData.location.longitude,
      };
      let mainEvent = allEvents[0];

      let emailPayload = { ...prevState.emailPayload };
      emailPayload.name = `${mainEvent.name} ${mainEvent.headline}`;

      emailPayload.body = `<h1>${mainEvent.name} ${mainEvent.headline}</h1>
        \n<div className="d-flex style={{width: "50%"}}><img src="${
          mainEvent.slug
        }"/></div>

         <h3>Dates: (${mainEvent.metaData.dateStart.split("T")[0]} - ${
        mainEvent.metaData.dateEnd.split("T")[0]
      })</h3> 
      \n\n<h4>Location: ${mainEvent.metaData.location.address},${
        mainEvent.metaData.location.zipCode
      }
      <h4> \n\n<p>Details: ${mainEvent.description}<p>`;

      return {
        ...prevState,
        total: res.data.item.totalCount,
        allMarkers: allMarkers,
        mappedEvents: allEvents.map(this.mapEvent),
        mainEvent: mainEvent,
        emailPayload,
        center,
      };
    });
  };

  onGetAllEventsError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  //----------------------------------------
  render() {
    return (
      <React.Fragment>
        {this.state.eventInfo && (
          <EventForm
            isOpen={this.state.isOpen}
            toggle={this.onToggle}
            onHandleChange={this.onHandleChange}
            onSubmitBtn={this.onSubmitBtn}
            event={this.state.eventInfo}
            title={this.state.modalTitle}
            onMetaChange={this.onMetaData}
            fileSelected={this.fileSelectedHandler}
            uploadFile={this.fileUploadHandler}
            imageUpload={this.onChangePicture}
            filePreview={this.state.selectedFile}
          />
        )}
        <ShareEventForm
          isOpen={this.state.isShareEventOpen}
          toggle={this.onShareEventToggle}
          event={this.state.mainEvent}
          userEmail={this.state.currentUserEmail}
          emailData={this.state.emailPayload}
          onSendMessage={this.onHandleSendMsg}
          onShareChange={this.onHandleShareChange}
        />
        {/* MAIN EVENT */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <div className="card">
                <div className="card-header text-center">
                  <h1>{this.state.mainEvent.name}</h1>
                </div>
                <div className="p-3 text-right">
                  <FontAwesomeIcon
                    icon={faShare}
                    onClick={this.onShareEventToggle}
                  />
                </div>
                <div className="card-body center">
                  <h4 style={{ textAlign: "center" }}>
                    {this.state.mainEvent.summary}
                  </h4>
                  <img
                    src={this.state.mainEvent.slug}
                    alt="..."
                    className="p-4"
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                  <p>{this.state.mainEvent.description}</p>
                  <div style={{ height: "100vh", width: "100%" }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyAtiNICtO_KJ-_9_dGLn1NHR6w3aINHKC8",
                      }}
                      center={this.state.center}
                      zoom={this.state.zoom}
                      yesIWantToUseGoogleMapApiInternals
                    >
                      {this.state.mapMarkers ? (
                        this.state.mapMarkers
                      ) : (
                        <Marker
                          lat={this.state.mainEvent.metaData.location.latitude}
                          lng={this.state.mainEvent.metaData.location.longitude}
                        />
                      )}
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-header text-center">
                  <h5>
                    <strong>Dates:</strong>
                  </h5>
                  <div style={{ justifyContent: "center" }}>
                    <label htmlFor="dateStart">
                      <strong>Start date: </strong>
                    </label>
                    <input
                      className="m-2"
                      type="date"
                      name="searchDateStart"
                      value={this.state.searchDateStart}
                      onChange={this.onSearchDateChange}
                    />
                    <div>
                      <label htmlFor="dateEnd">
                        <strong> End date: </strong>
                      </label>
                      <input
                        className="m-3"
                        type="date"
                        name="searchDateEnd"
                        value={this.state.searchDateEnd}
                        onChange={this.onSearchDateChange}
                      />
                    </div>
                    <button
                      className="btn btn-primary mx-3"
                      style={{ float: "center" }}
                      onClick={this.onSearchBtn}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div>
                  <h2 className="text-center p-3 pt-4">Upcoming Events</h2>
                  <Pagination
                    className="m-2"
                    style={{ float: "left" }}
                    pageSize={this.state.pageSize}
                    onChange={this.onPageChanged}
                    current={this.state.pageIndex + 1}
                    total={this.state.total}
                  />
                  <button
                    className="btn btn-warning m-2"
                    style={{ float: "right" }}
                    onClick={this.onAddEventBtn}
                  >
                    Add an Event
                  </button>
                  <button
                    className="btn btn-secondary mx-3"
                    style={{ float: "right" }}
                    onClick={this.onViewAllEventsOnMapBtn}
                  >
                    View All Events On Map
                  </button>
                </div>
                <div className="container  p-3">{this.state.mappedEvents}</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Events;
