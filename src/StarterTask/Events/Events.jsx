import React from "react";
import defaultExport from "./eventService";
import { toast } from "react-toastify";
import RecentEvent from "./ELeft";
import UpcomingEvent from "./ERight";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import FormModal from "./EvAddEdit";

class EventsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      searchData: "",
      currentPage: 0,
      mappedEvents: [],
      recentEvent: [],
      isOpen: false,
      currentEvent: "",
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
    defaultExport
      .getAllEvents(this.state.currentPage)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
    var currentDate = new Date().toJSON();
    var gettingPastDate = new Date(currentDate);
    gettingPastDate.setDate(gettingPastDate.getDate() - 10);
    var myPastDate = gettingPastDate.toJSON();
    defaultExport
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
        mappedEvents: eventArray.map(this.mapUpcomingEvents),
      };
    });
  };
  mapUpcomingEvents = (event) => (
    <UpcomingEvent
      key={event.id}
      eventData={event}
      onEdit={this.onEditClick}
      // onViewMore={this.onViewMoreClick}
    />
  );
  onRecentEventSuccess = (data) => {
    console.log(data);
    let eventArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState,
        recentEvent: eventArray.map(this.mapRecentEvent),
      };
    });
  };
  mapRecentEvent = (event) => (
    <RecentEvent
      key={event.id}
      recentEvent={event}
      // onEdit={this.onEditClick}
      // onViewMore={this.onViewMoreClick}
    />
  );
  onEditClick = (event) => {
    event.dateStart = event.metaData.dateStart;
    event.dateEnd = event.metaData.dateEnd;
    event.address = event.metaData.location.address;
    event.zipCode = event.metaData.location.zipCode;
    this.setState((prevState) => {
      return {
        ...prevState,
        currentEvent: event,
        currentId: event.id,
      };
    }, this.toggleModal);
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
    const currData = this.state.formData;
    const start = currData.dateEnd;
    const end = currData.dateEnd;
    const evAddress = currData.address;
    const zip = currData.zipCode;
    currData.metaData = {
      dateStart: start,
      dateEnd: end,
      location: {
        address: evAddress,
        zipCode: zip,
      },
    };
    if (this.state.currentId > 0) {
      this.setState((prevState) => {
        return {
          ...prevState,
          formData: currData,
        };
      }, this.onUpdateClick);
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          formData: currData,
        };
      }, this.onSubmitClick);
    }
  };
  onSubmitClick = () => {
    alert("wire up the submit button to make ajax call and toggle form");
  };
  onUpdateClick = () => {
    alert("wire up the update button to make ajax call and toggle form");
  };
  toggleModal = () => {
    if (this.state.currentId === 0) {
      this.setState((prevState) => {
        return { isOpen: !prevState.isOpen, currentEvent: "" };
      });
    } else if (this.state.currentId > 0 && this.state.isOpen === true) {
      this.setState((prevState) => {
        return { isOpen: !prevState.isOpen, currentId: 0, currentEvent: "" };
      });
    } else {
      this.setState((prevState) => {
        return { isOpen: !prevState.isOpen };
      });
    }
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
    defaultExport
      .searchForEvents(searchParams.startDate, searchParams.endDate)
      .then(this.onSearchSuccess)
      .catch(this.onFailure);
  };
  onSearchSuccess = (data) => {
    console.log(data);
  };
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: pageNumber,
      };
    });
    defaultExport
      .getAllEvents(pageNumber - 1)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <FormModal
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          event={this.state.currentEvent}
          eventId={this.state.currentId}
          changeFormData={this.changeFormData}
          onSubmit={this.submitFilter}
        />
        <div className="container leftSideContainer">
          {this.state.recentEvent}
          <div className="leftSideCard"></div>
        </div>

        <div className="container rightSideContainer">
          <h5>Search Events By Date:</h5>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Start Date 0000-00-00"
            aria-label="Search"
          />
          <input
            className="form-control me-2"
            type="search"
            placeholder="End Date 0000-00-00"
            aria-label="Search"
          />
          <button className="btn btn-outline-success " type="button">
            Search
          </button>
          <div className="container">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.toggleModal}
            >
              + Add Event
            </button>
            <button type="button" className="btn btn-primary">
              Map View
            </button>
          </div>
          <div className="rightSideEvents">
            {this.state.mappedEvents}
            <Pagination
              className="mt-5"
              defaultCurrent
              onChange={this.handlePageChange}
              current={this.state.currentPage}
              pageSize={1}
              total={3}
            />
          </div>
        </div>

        {/* <div className="holderContainer"></div>
        <script type="text/html" id="mapLocationTemp">
          <div className="col">
            <p className="mapLocSaver"></p>
          </div>
        </script>
        <div className="mapLocations" style={{ display: "none" }}></div>
        <button
          type="button"
          className="btn btn-danger"
          style={{ display: "none" }}
        >
          Remove Map
        </button>
        <div id="map"></div> */}
      </React.Fragment>
    );
  }
}

export default EventsDisplay;
