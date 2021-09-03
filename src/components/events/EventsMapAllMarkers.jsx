import React from "react";
import { Marker } from "@react-google-maps/api";

function EventsMapAllMarkers({ event }) {
  let latitude = event.metaData.location.latitude;
  let longitude = event.metaData.location.longitude;

  const marker = {
    lat: latitude,
    lng: longitude,
  };

  return <Marker key={`marker-${event.id}`} position={marker} />;
}
export default EventsMapAllMarkers;
