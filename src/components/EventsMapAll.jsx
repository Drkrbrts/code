import React from "react";
import {
  GoogleMap,
  // LoadScript
} from "@react-google-maps/api";
import EventsMapAllMarkers from "./EventsMapAllMarkers";

function EventsMap({ events }) {
  const containerStyle = {
    width: "900px",
    height: "600px",
  };

  const center = {
    lat: 40.31900062381131,
    lng: -98.0872152474872,
  };

  const mapAllMarkers = (event) => {
    return <EventsMapAllMarkers key={`event-${event.id}`} event={event} />;
  };

  return (
    // <LoadScript googleMapsApiKey="AIzaSyAEYsuvVruB7AEiONGT70I5TdGddLKlQdc">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
      {/* Child components, such as markers, info windows, etc. */}
      {events.map(mapAllMarkers)}
      <></>
    </GoogleMap>
    // </LoadScript>
  );
}
export default EventsMap;
