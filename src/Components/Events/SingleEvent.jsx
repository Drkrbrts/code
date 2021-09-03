import React from "react";

function SingleEvent(props) {
  const oneEvent = props.event;

  function onEditEventClick(e) {
    let viewEvent = { ...oneEvent };
    viewEvent.view = false;

    props.onClick(viewEvent);
  }
  function onViewEventClick(e) {
    let viewEvent = { ...oneEvent };
    viewEvent.view = true;

    props.onClick(viewEvent);
  }
  function renderUsTime(time) {
    let date = new Date(time).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return date;
  }
  return (
    <React.Fragment>
      <div className="fs-5 fw-bold text-muted">{oneEvent.name}</div>
      <div className="text-muted font-size-sm pb-2">
        {renderUsTime(oneEvent.metaData.dateStart)}
      </div>
      <p className="text-muted">{oneEvent.summary}</p>
      <div className="row">
        <button
          className="btn btn-sm btn-outline-info col-5"
          onClick={onEditEventClick}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-warning col-5 mx-1"
          onClick={onViewEventClick}
        >
          View More
        </button>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default SingleEvent;
