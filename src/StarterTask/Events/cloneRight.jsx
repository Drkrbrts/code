import React from "react";

const UpcomingEvent = (props) => {
  const handleEdit = () => {
    props.onEdit(props.eventData);
  };
  const handleViewMore = () => {
    props.onViewMore(props.eventData);
  };
  return (
    <React.Fragment>
      <div
        className="card text-white bg-dark border-primary"
        style={{
          margin: "5px",
          width: "100%",
          height: "100%",
          display: "inline-block",
          textAlign: "center",
        }}
        alt="..."
        id={props.eventData.id}
      >
        <h3
          style={{
            margin: "5px",
          }}
        >
          <strong>{props.eventData.name}</strong>
        </h3>
        <div className="card-body">
          <div className="container">
            <h5 className="card-title">{props.eventData.headline}</h5>
            <p className="card-text">{props.eventData.description}</p>
            <p className="card-text">
              <strong>Start Date:</strong>
              <br />
              {props.eventData.metaData.dateStart}
              <br />
              <strong>End Date:</strong>
              <br />
              {props.eventData.metaData.dateEnd}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpcomingEvent;
