import React from "react";

function singleEvent(props) {
  const oneEvent = props.event;
  const eventTime = new Date(oneEvent.metaData.dateStart);

  return (
    <div className="card borderless-card">
      <h3 className="card-title my-3 mx-4">{oneEvent.name}</h3>
      <div className="card-body mx-3 my-3">
        <h5>{oneEvent.headline}</h5>
        <p className="my-0">{eventTime.toLocaleTimeString("en-US")}</p>
        <p className="my-0">{oneEvent.summary}</p>
        <div className="card-foot my-3">
          <button type="button" className="btn btn-info mx-1">
            Edit
          </button>
          <button type="button" className="btn btn-secondary mx-1">
            Info
          </button>
        </div>
      </div>
      <hr className="mx-2" />
    </div>
  );
}

export default React.memo(singleEvent);
