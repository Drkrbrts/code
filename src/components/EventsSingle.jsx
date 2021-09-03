import React from "react";

function EventsSingle(props) {
  const onViewEventClicked = (e) => {
    console.log("onViewEventClicked firing");
    e.preventDefault();
    props.onViewEvent(props.event);
  };

  const convertedDate = new Date(props.event.metaData.dateStart);
  const dateToString = convertedDate.toString();
  const dateStart = dateToString.slice(0, 15);

  return (
    <div className="col flex-column mb-4">
      <div className="d-flex h-100 justify-content-center">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{props.event.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.event.headline}
            </h6>
            <p className="card-text">{props.event.summary}</p>
            <p className="card-text">{dateStart}</p>
            <div className="d-flex justify-content-around">
              <button
                type="button"
                className="btn btn-dark"
                name="view"
                onClick={onViewEventClicked}
              >
                View More
              </button>
              <button type="button" className="btn btn-info" name="edit">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventsSingle;
