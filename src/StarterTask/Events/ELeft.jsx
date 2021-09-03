import React from "react";

const RecentEvent = (props) => {
  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", display: "inline-block" }}
        alt="..."
        id={props.recentEvent.id}
      >
        <div>
          <h4>STAY UP TO DATE ON CURRENT EVENTS</h4>
        </div>
        <strong>{props.recentEvent.name}</strong>
        <img
          className="card-img-top img-fluid"
          alt="..."
          src={props.recentEvent.headline}
        />
        <div className="card-body">
          <div className="container">
            <h3 className="card-title">{props.recentEvent.summary}</h3>
            <p className="card-text">
              <strong>{props.recentEvent.description}</strong>
            </p>
            <div className="container">
              <p className="card-text">
                <strong>Location:</strong>
              </p>
              <p>
                {props.recentEvent.metaData.location.address},{" "}
                {props.recentEvent.metaData.location.zipCode}
              </p>
              {/* PUT THE MAP RIGHT HERE */}
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentEvent;
