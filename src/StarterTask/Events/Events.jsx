import React from "react";
import eventService from "./eventService";
import { toast } from "react-toastify";
import RecentEvent from "./recentCard";
import UpcomingEvent from "./cloneRight";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import FormModal from "./EvAddEdit";
import ViewMoreForm from "./ViewMore";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class EventsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      searchData: "",
      currentPage: 0,
      mappedEvents: [],
      recentEvent: [],
      ViewMoreForm: [],
      isOpen: false,
      isHidden: true,
      formData: {
        description: "",
        headline: "",
        name: "",
        summary: "",
        slug: "",
        statusId: "",
        metaData: {
          dateStart: "",
          dateEnd: "",
          location: {
            address: "",
            zipCode: "",
          },
        },
      },
    };
  }
  componentDidMount() {
    //gets events for right side
    eventService
      .getAllEvents(this.state.currentPage)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
    //gets event for left side
    var currentDate = new Date().toJSON();
    var gettingPastDate = new Date(currentDate);
    gettingPastDate.setDate(gettingPastDate.getDate() - 10);
    var myPastDate = gettingPastDate.toJSON();
    eventService
      .getRecentEvent(myPastDate, currentDate)
      .then(this.onRecentEventSuccess)
      .catch(this.onFailure);
  }
  onGetAllSuccess = (data) => {
    console.log(data);
    let eventArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState,
        totalPages: data.data.item.totalPages,
        mappedEvents: eventArray.map(this.mapUpcomingEvents),
      };
    });
  };
  mapUpcomingEvents = (event) => (
    <UpcomingEvent
      key={event.id}
      eventData={event}
      onEdit={this.onEditClick}
      onViewMore={this.onViewMoreClick}
    />
  );
  onRecentEventSuccess = (data) => {
    console.log(data);
    let eventObj = data.data.item.pagedItems[0];
    this.setState((prevState) => {
      return {
        ...prevState,
        recentEvent: this.displayRecentEvent(eventObj),
      };
    });
  };
  displayRecentEvent = (event) => (
    <RecentEvent key={event.id} recentEvent={event} />
  );
  onViewMoreClick = (event) => {
    event.dateStart = event.metaData.dateStart;
    event.dateEnd = event.metaData.dateEnd;
    event.address = event.metaData.location.address;
    event.zipCode = event.metaData.location.zipCode;
    this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
        ViewMoreForm: this.viewMoreToggle(event),
      };
    });
  };
  viewMoreToggle = (event) => <ViewMoreForm key={event.id} eventData={event} />;
  onEditClick = (event) => {
    event.dateStart = event.metaData.dateStart;
    event.dateEnd = event.metaData.dateEnd;
    event.address = event.metaData.location.address;
    event.zipCode = event.metaData.location.zipCode;
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: event,
        currentId: event.id,
        isOpen: !prevState.isOpen,
      };
    });
  };
  changeFormData = (e) => {
    let target = e.target;
    if (target.type === "checkbox") {
      if (target.checked === true) {
        target.value = "Active";
      } else if (target.checked === false) {
        target.value = "NotSet";
      }
    }
    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: val };
      return { formData: formData };
    });
  };
  submitFilter = () => {
    const formData = this.state.formData;
    const start = formData.dateEnd;
    const end = formData.dateEnd;
    const evAddress = formData.address;
    const zip = formData.zipCode;
    formData.metaData = {
      dateStart: start,
      dateEnd: end,
      location: {
        address: evAddress,
        zipCode: zip,
      },
    };
    if (this.state.currentId > 0) {
      eventService
        .changeEvent(formData, this.state.currentId)
        .then(this.updateSuccess)
        .catch(this.onFailure);
    } else {
      eventService
        .addEvent(formData)
        .then(this.onAddSuccess)
        .catch(this.onFailure);
    }
  };
  onAddSuccess = (data) => {
    console.log(data);
    toast.success("event added!");
    this.setState((prevState) => {
      const newCard = this.mapUpcomingEvents(this.state.formData);
      const updatedEvent = [...prevState.mappedEvents];
      updatedEvent.splice(0, 1, newCard);
      return {
        mappedEvents: updatedEvent,
        isOpen: !prevState.isOpen,
      };
    });
  };
  updateSuccess = (data) => {
    console.log(data);
    toast.success("event changed!");
    this.setState((prevState) => {
      const indexOfEvent = prevState.mappedEvents.findIndex(
        (singleArrayMember) =>
          singleArrayMember.props.eventData.id === this.state.currentId
      );
      const newCard = this.mapUpcomingEvents(this.state.formData);
      const updatedEvent = [...prevState.mappedEvents];
      if (indexOfEvent >= 0) {
        updatedEvent.splice(indexOfEvent, 1, newCard);
      }
      return {
        mappedEvents: updatedEvent,
        isOpen: !prevState.isOpen,
      };
    });
  };
  toggleModal = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen, currentId: 0, formData: {} };
    });
  };
  onSearchType = (e) => {
    let target = e.target;
    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const newData = { ...prevState.searchData, [name]: val };
      return { searchData: newData };
    });
  };
  onSearchClick = () => {
    let searchParams = this.state.searchData;
    eventService
      .searchForEvents(searchParams.dateStart, searchParams.dateEnd)
      .then(this.onSearchSuccess)
      .catch(this.onFailure);
  };
  onSearchSuccess = (data) => {
    console.log(data);
    let searchArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedEvents: searchArray.map(this.displaySearchItem),
      };
    });
    var results = document.getElementById("rightSideCards");
    results.scrollIntoView();
  };
  displaySearchItem = (event) => (
    <UpcomingEvent
      key={event.id}
      eventData={event}
      onEdit={this.onEditClick}
      onViewMore={this.onViewMoreClick}
    />
  );
  onMapClick = () => {
    eventService
      .getEventsForGoogleMap()
      .then(this.successToGoogleMap)
      .catch(this.onFailure);
  };
  successToGoogleMap = (data) => {
    const mapArray = data.data.item.pagedItems;
    this.props.history.push(`/mapView`, {
      locationsArray: mapArray,
    });
  };
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: pageNumber,
      };
    });
    eventService
      .getAllEvents(pageNumber - 1)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error(data);
  };
  useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  render() {
    return (
      <React.Fragment>
        <FormModal
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          event={this.state.formData}
          eventId={this.state.currentId}
          changeFormData={this.changeFormData}
          onSubmit={this.submitFilter}
        />
        <div
          className="container leftSideContainer"
          style={{
            margin: "10px",
            width: "45%",
            float: "left",
            display: "inline-block",
            padding: "15px",
            height: "100%",
          }}
        >
          {this.state.isHidden
            ? this.state.recentEvent
            : this.state.ViewMoreForm}
        </div>

        <div
          className="container rightSideContainer"
          style={{
            margin: "5px",
            width: "50%",
            float: "left",
            display: "inline-block",
          }}
        >
          <h5 style={{ textAlign: "center" }}>Search Events By Date/Time:</h5>
          <form noValidate>
            <TextField
              id="datetime-local"
              label="Start Date"
              type="datetime-local"
              defaultValue={new Date()}
              // className={this.useStyles}
              InputLabelProps={{
                shrink: true,
              }}
              name="dateStart"
              onChange={this.onSearchType}
              style={{ width: "100%" }}
            />
            <TextField
              id="datetime-local"
              label="Start Date"
              type="datetime-local"
              defaultValue={new Date()}
              // className={this.useStyles}
              InputLabelProps={{
                shrink: true,
              }}
              name="dateEnd"
              onChange={this.onSearchType}
              style={{ width: "100%" }}
            />
          </form>
          <div style={{ width: "100%" }} className="mb-1">
            <button
              className="btn btn-outline-success "
              type="button"
              onClick={this.onSearchClick}
              style={{ width: "100%" }}
            >
              Search
            </button>
          </div>
          <div style={{ width: "100%" }} className="mb-1">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.toggleModal}
              style={{ width: "100%" }}
            >
              + Add Event
            </button>
          </div>
          <div style={{ width: "100%" }} className="mb-1">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={this.onMapClick}
            >
              Map View
            </button>
          </div>
          <div
            className="rightSideEvents"
            id="rightSideCards"
            style={{ width: "100%" }}
          >
            {this.state.mappedEvents}
            <Pagination
              className="mt-5"
              defaultCurrent
              onChange={this.handlePageChange}
              current={this.state.currentPage}
              pageSize={1}
              total={this.state.totalPages}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsDisplay;
