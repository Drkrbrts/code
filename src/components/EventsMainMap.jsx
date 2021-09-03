import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function EventsMainMap({ event }) {
  // console.log("EventsMap firing", event);
  let latitude = "";
  let longitude = "";

  if (event.metaData) {
    latitude = event.metaData.location.latitude;
    longitude = event.metaData.location.longitude;
    // console.log("if firing", parseFloat(latitude), parseFloat(longitude));
  }
  const containerStyle = {
    width: "700px",
    height: "400px",
  };

  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  const marker = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAEYsuvVruB7AEiONGT70I5TdGddLKlQdc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker key="marker_1" position={marker} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}
export default EventsMainMap;
