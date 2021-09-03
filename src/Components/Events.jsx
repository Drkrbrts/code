import React from "react";
import * as eventService from "../services/eventService";
import SingleEvent from "./SingleEvent";

class Events extends React.Component {
  state = {
    mappedEvents: [],
  };

  componentDidMount() {
    eventService
      .getEventsByDate()
      .then(this.onGetEventsByDateSuccess)
      .catch(this.onGetEventsByDateError);
  }

  onGetEventsByDateSuccess = (response) => {
    console.log(response, "get event success");
    let eventData = response.data.item.pagedItems;
    console.log(eventData);

    this.setState(() => {
      return {
        mappedEvents: eventData.map(this.mapSingleEvent),
      };
    });
  };

  mapSingleEvent = (event) => (
    <SingleEvent {...this.props} singleEvent={event} key={event.id} />
  );

  onGetEventsByDateError = (error) => {
    console.log(error, "get event error");
  };

  render() {
    return (
      <div className="container">
        <div>{this.state.mappedEvents}</div>
      </div>
    );
  }
}

export default Events;
