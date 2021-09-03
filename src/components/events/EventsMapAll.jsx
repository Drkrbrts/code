import React from "react";
import {
  GoogleMap,
  // LoadScript
} from "@react-google-maps/api";
import EventsMapAllMarkers from "./EventsMapAllMarkers";

function EventsMap({ events, userLocation }) {
  const containerStyle = {
    width: "900px",
    height: "600px",
  };

  const center = {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  };

  const mapAllMarkers = (event) => {
    return <EventsMapAllMarkers key={`event-${event.id}`} event={event} />;
  };

  return (
    // <LoadScript googleMapsApiKey="AIzaSyAEYsuvVruB7AEiONGT70I5TdGddLKlQdc">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
      {/* Child components, such as markers, info windows, etc. */}
      {events.map(mapAllMarkers)}
      <></>
    </GoogleMap>
    // </LoadScript>
  );
}
export default React.memo(EventsMap);
