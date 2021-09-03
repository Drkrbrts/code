import React from "react";
import { withRouter } from "react-router-dom";
import eventService from "../services/eventService";
import "./compStyle.css";

class Event extends React.Component {
  state = {
    currentEvents: [],
    mappedEvents: [],
    firstEvent: {},
  };

  componentDidMount = () => {
    eventService
      .getEvents()
      .then(this.onGetEvensSuccess)
      .catch(this.onGetEvensError);
  };

  onGetEvensSuccess = (response) => {
    console.log(response);
    console.log(response.data.item.pagedItems);
  };

  onGetEvensError = (response) => {
    console.log({ response });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Event);
