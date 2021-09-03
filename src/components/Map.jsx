import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class Map extends React.Component {
  state = {
    center: {
      lat: this.props.lat,
      lng: this.props.lng,
    },
    zoom: 13,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC1_ksopYPewlxknTJV5c4luEuOCpxk3t4" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker lat={this.props.lat} lng={this.props.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
