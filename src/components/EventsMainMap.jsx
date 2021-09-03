import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function EventsMainMap({ event }) {
  // console.log("EventsMap firing", event);
  let latitude = 0;
  let longitude = 0;

  if (event.metaData) {
    latitude = parseFloat(event.metaData.location.latitude);
    longitude = parseFloat(event.metaData.location.longitude);
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
export default EventsMainMap;
