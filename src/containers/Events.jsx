import React from "react";
import EventsMain from "../components/EventsMain";
import EventsSearch from "../components/EventsSearch";
import EventsUpcoming from "../components/EventsUpcoming";
import { getPaginatedEvents } from "../services/eventsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventsSingle from "../components/EventsSingle";

/*
  To Do
  Map: Parse Int for lat and long

  Add/Edit Events
*/

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {
        mainEvent: {},
        pagedItems: [],
        mappedEvents: [],
      },
      formData: {
        metaData: {
          dateStart: "",
          dateEnd: "",
          location: {
            latitude: 0,
            longitude: 0,
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
      search: {
        dateStart: "",
        dateEnd: "",
      },
      pagination: {
        currentPage: 1,
        pageSize: 4,
      },
    };
  }

  componentDidMount() {
    console.log("componentDidMount firing");
    //get paginated events
    this.getPaginated();
  }

  getPaginated = () => {
    console.log("getPaginated firing");

    getPaginatedEvents(
      this.state.pagination.currentPage - 1,
      this.state.pagination.pageSize
    )
      .then(this.mapSuccessResponse)
      .catch(this.onGetPaginatedError);
  };

  mapSuccessResponse = (response) => {
    const newEvents = response.data.item.pagedItems;
    console.log("mapSuccessResponse firing", { events: newEvents });
    this.setState((prevState) => {
      let events = { ...prevState.events };
      events.pagedItems = newEvents;
      events.mainEvent = newEvents[0];
      events.mappedEvents = newEvents.map(this.mapEvents);
      return { ...prevState, events };
    });
  };

  mapEvents = (event) => {
    // console.log("mapEvents firing", event);
    return (
      <EventsSingle
        key={`event-${event.id}`}
        event={event}
        onClick={this.onActionClicked}
      />
    );
  };

  onGetPaginatedError = (err) => {
    console.log("onGetPaginatedError", err);
    let notify = () =>
      toast.error(
        "There was an error retrieving the events.  Please refresh the page.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  render() {
    return (
      <>
        <div className="row d-flex p-4">
          <div className="col border-bottom bg-light d-flex">
            <h1 className="p-2">Events</h1>
          </div>
        </div>
        <div className="d-flex row m-4">
          <div className="col-8">
            {/* {this.renderMainEvent()} */}
            <EventsMain mainEvent={this.state.events.mainEvent} />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <EventsSearch />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <EventsUpcoming events={this.state.events.mappedEvents} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Events;
