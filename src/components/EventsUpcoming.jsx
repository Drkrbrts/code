import React from "react";
// import EventsSingle from "./EventsSingle";

function EventsUpcoming(props) {
  return (
    <div className="container border rounded bg-light shadow p-4">
      <div className="d-flex justify-content-center border shadow bg-info mb-2 p-3">
        <h3>Upcoming Events</h3>
      </div>
      <div className="d-flex justify-content-around p-2">
        <button type="button" name="viewAll" className="btn btn-primary">
          View All
        </button>
        <button type="button" name="newEvent" className="btn btn-primary">
          New Event
        </button>
      </div>
      <div className="d-flex justify-content-center p-3">
        Pagination Placeholder
      </div>
      <div className="d-flex justify-content-center p-3">
        <div className="row">{props.events}</div>

        {/* <EventsSingle /> */}
      </div>
    </div>
  );
}
export default EventsUpcoming;
