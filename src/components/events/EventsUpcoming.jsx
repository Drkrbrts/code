import React from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function EventsUpcoming(props) {
  const onPageChangeClicked = (newPageNumber) => {
    props.onChange(newPageNumber);
  };

  const onAddEventClicked = (e) => {
    e.preventDefault();
    props.history.push("/events/formik");
  };

  const onViewAllClicked = (e) => {
    e.preventDefault();
    props.onViewAllRequested();
  };

  return (
    <div className="container border rounded bg-light shadow p-4">
      <div className="d-flex justify-content-center border shadow bg-info mb-2 p-3">
        <h3>Upcoming Events</h3>
      </div>
      <div className="d-flex justify-content-around p-2">
        <button
          type="button"
          name="viewAll"
          className="btn btn-primary"
          onClick={onViewAllClicked}
        >
          View All
        </button>
        <button
          type="button"
          name="newEvent"
          className="btn btn-primary"
          onClick={onAddEventClicked}
        >
          New Event
        </button>
      </div>
      <div className="d-flex justify-content-center p-3">
        <Pagination
          onChange={onPageChangeClicked}
          current={props.current}
          total={props.total}
          pageSize={4}
        />
      </div>
      <div className="d-flex justify-content-center p-3">
        <div className="row">{props.events && props.events}</div>
      </div>
    </div>
  );
}
export default EventsUpcoming;
