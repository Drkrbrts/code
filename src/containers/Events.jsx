import React from "react";
import EventsMain from "../components/events/EventsMain";
import SearchDates from "../components/search/SearchDates";
import EventsUpcoming from "../components/events/EventsUpcoming";
import {
  getPaginatedEvents,
  searchEventsByDate,
} from "../services/eventsService";
import { getBy } from "../services/genericsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventsSingle from "../components/events/EventsSingle";
import EventsModalMapViewAll from "../components/events/EventsModalMapViewAll";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {
        mainEventSlug: "",
        mainEvent: {},
        pagedItems: [],
        mappedEvents: [],
      },
      search: {
        dateStart: "",
        dateEnd: "",
      },
      pagination: {
        currentPage: 1,
        pageSize: 4,
        totalCount: 0,
      },
      userLocation: {
        latitude: 0,
        longitude: 0,
      },
      isMapsModalOpen: false,
    };
  }

  componentDidMount() {
    // console.log("componentDidMount firing");
    if ("geolocation" in navigator) {
      // console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState((prevState) => {
          let userLocation = { ...prevState.userLocation };
          userLocation.latitude = position.coords.latitude;
          userLocation.longitude = position.coords.longitude;
          return { ...prevState, userLocation };
        });
      });
    }
    this.getPaginated();
  }

  getPaginated = () => {
    // console.log("getPaginated firing");

    getPaginatedEvents(
      this.state.pagination.currentPage - 1,
      this.state.pagination.pageSize
    )
      .then(this.mapSuccessResponse)
      .catch(this.onGetPaginatedError);
  };

  getMainEvent = () => {
    // console.log("getMainEvent firing", this.state);
    getBy("events", this.state.events.mainEventSlug)
      .then(this.onGetSlugSuccess)
      .catch(this.onGetSlugError);
  };

  mapSuccessResponse = (response) => {
    const newEvents = response.data.item.pagedItems;
    // console.log("mapSuccessResponse firing", response);
    this.setState(
      (prevState) => {
        let events = { ...prevState.events };
        let pagination = { ...prevState.pagination };
        events.pagedItems = newEvents;
        events.mainEventSlug = newEvents[0].slug;
        events.mappedEvents = newEvents.map(this.mapEvents);
        pagination.totalCount = response.data.item.totalCount;
        return { ...prevState, events, pagination };
      },
      () => {
        this.getMainEvent();
      }
    );
  };

  onGetSlugSuccess = (response) => {
    // console.log("onGetSlugSuccess firing", response.data.item);
    this.setState((prevState) => {
      let events = { ...prevState.events };
      events.mainEvent = response.data.item;
      return { ...prevState, events };
    });
  };

  mapEvents = (event) => {
    // console.log("mapEvents firing", event);
    return (
      <EventsSingle
        key={`event-${event.id}`}
        event={event}
        onViewEvent={this.onViewEventRequested}
        onEditEventRequested={this.onEditEventRequested}
      />
    );
  };

  onPageChange = (newPageNumber) => {
    // console.log("onPageChange firing", newPageNumber);
    this.setState(
      (prevState) => {
        let pagination = { ...prevState.pagination };
        pagination.currentPage = newPageNumber;
        return { ...prevState, pagination };
      },
      () => {
        this.getPaginated(newPageNumber);
      }
    );
  };

  onViewEventRequested = (event) => {
    // console.log("onViewEventClicked", event);
    this.setState(
      (prevState) => {
        let events = { ...prevState.events };
        events.mainEvent = event;
        events.mainEventSlug = event.slug;
        return { ...prevState, events };
      },
      () => {
        this.getMainEvent();
      }
    );
  };

  onSearchFieldChange = (target) => {
    // console.log("onSearchFieldChange firing", target.value);
    let newValue = target.value;
    let inputName = target.name;
    this.setState((prevState) => {
      let search = { ...prevState.search };
      search[inputName] = newValue;
      return { ...prevState, search };
    });
  };

  onSearchRequested = () => {
    // console.log("searchEvents firing", page);
    searchEventsByDate(
      0,
      this.state.pagination.pageSize,
      this.state.search.dateStart,
      this.state.search.dateEnd
    )
      .then(this.mapSuccessResponse)
      .catch(this.onSearchError);
  };

  onEditEventRequested = (event) => {
    // console.log("onEditEventRequested", event);
    this.props.history.push(`/events/formik/${event.slug}`);
  };

  toggleViewAllMap = () => {
    console.log("toggleViewAllMap firing");
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.isMapsModalOpen = !prevState.isMapsModalOpen;
      return newState;
    });
  };

  onGetPaginatedError = (err) => {
    console.log("onGetPaginatedError", err);
    this.showMessage(
      "There was an error retrieving the events.  Please refresh the page."
    );
  };

  onGetSlugError = (err) => {
    console.log("onGetSlugError firing", err);
    this.showMessage(
      "There was an error retrieving your event. Please try again."
    );
  };

  onSearchError = (err) => {
    console.log("onSearchError firing", err);
    this.showMessage("Now Events were found matching your search query");
  };

  showMessage = (message) => {
    let notify = () =>
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  render() {
    return (
      <>
        <div className="row d-flex p-4">
          <div className="col border-bottom bg-dark d-flex">
            <h1 className="p-2 text-white">Events</h1>
          </div>
        </div>
        <div className="d-flex row m-4">
          <div className="col-8">
            <EventsMain mainEvent={this.state.events.mainEvent} />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <SearchDates
                  searchTopic={"Events"}
                  search={this.state.search}
                  onSearchRequested={this.onSearchRequested}
                  onChangeRequested={this.onSearchFieldChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <EventsUpcoming
                  events={this.state.events.mappedEvents}
                  onChange={this.onPageChange}
                  current={this.state.pagination.currentPage}
                  total={this.state.pagination.totalCount}
                  onViewAllRequested={this.toggleViewAllMap}
                  {...this.props}
                />
              </div>
            </div>
          </div>
          <EventsModalMapViewAll
            events={this.state.events.pagedItems}
            isMapsModalOpen={this.state.isMapsModalOpen}
            onViewAllRequested={this.toggleViewAllMap}
            userLocation={this.state.userLocation}
          />
        </div>
      </>
    );
  }
}
export default Events;
