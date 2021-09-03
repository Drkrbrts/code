import React from "react";

const SingleEvent = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-8 p-3">
          <div className="row">
            <div>{props.singleEvent.name}</div>
            <div>Image</div>
            <div>{props.singleEvent.summary}</div>
            <div>{props.singleEvent.description}</div>
            <div className="row">
              <div className="col-4">
                <div>Google API</div>
              </div>
              <div className="col-4">
                <div>Location</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="card col-4 p-3">
              {props.singleEvent.metaData.dateStart} -{" "}
              {props.singleEvent.metaData.dateEnd}
            </div>
            <div className="row">
              <div className="card col-4 p-3">
                <div>Upcoming Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <div className="col-4">Google API</div>
<div className="col-4">Location</div>

<div className="col">Upcoming Events</div>
<div className="col-4">
{props.singleEvent.metaData.dateStart} -
{props.singleEvent.metaData.dateEnd}
</div> */

export default SingleEvent;
