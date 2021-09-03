import React from "react";
import { StaticGoogleMap, Marker } from "react-static-google-map";

const RecentEvent = (props) => {
  let mapLocation = encodeURIComponent(
    props.recentEvent.metaData.location.address +
      props.recentEvent.metaData.location.zipCode
  );
  return (
    <React.Fragment>
      <div
        className="card text-white bg-dark border-primary"
        style={{ width: "100%", display: "inline-block", padding: "20px" }}
        alt="..."
        id={props.recentEvent.id}
      >
        <img
          align="middle"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          src={props.recentEvent.summary}
          alt="..."
        />
        <div style={{ textAlign: "center" }}>
          <h4>
            <strong>{props.recentEvent.name}</strong>
          </h4>
        </div>
        <div className="card-body">
          <div className="container">
            <h3 className="card-title">{props.recentEvent.description}</h3>
            <div className="container">
              <p className="card-text">
                <strong>Location:</strong>
              </p>
              <p>
                {props.recentEvent.metaData.location.address}
                <br />
                {props.recentEvent.metaData.location.zipCode}
              </p>
              <div style={{ width: "100%", height: "100%" }}>
                <StaticGoogleMap
                  center={mapLocation}
                  zoom={10}
                  size="300x300"
                  className="img-fluid"
                  apiKey="AIzaSyDJ4HLPFqOWsovsm0dGiE0nz2iIy_y9AjI"
                >
                  <Marker location={mapLocation} color="blue" />
                </StaticGoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentEvent;
