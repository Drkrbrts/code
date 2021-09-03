import React from "react";

function EventsSingle(props) {
  return (
    <div className="col mb-4">
      <div className="d-flex align-items-stretch">
        <div className="card shadow" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{props.event.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.event.headline}
            </h6>
            <p className="card-text">{props.event.summary}</p>
            <div className="d-flex justify-content-around">
              <button type="button" className="btn btn-dark" name="view">
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
