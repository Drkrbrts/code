import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function EventsMap({ event }) {
  console.log("EventsMap firing", event);
  let latitude = "";
  let longitude = "";

  if (event.metaData) {
    latitude = event.metaData.location.latitude;
    longitude = event.metaData.location.longitude;
    console.log("if firing", latitude, longitude);
  }
  const containerStyle = {
    width: "700px",
    height: "400px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const marker = {
    lat: latitude,
    lng: longitude,
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
export default EventsMap;
