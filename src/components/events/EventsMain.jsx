import React from "react";
import EventsMap from "./EventsMainMap";

function EventsMain({ mainEvent }) {
  // console.log("EventsMain firing", mainEvent.metaData);

  let address = "";
  let startDate = "";
  let startTime = "";
  let endDate = "";
  let endTime = "";
  let startMonth = "";
  let startDay = "";
  let startYear = "";
  let endMonth = "";
  let endDay = "";
  let endYear = "";

  if (mainEvent.metaData) {
    address = mainEvent.metaData.location.address;
    const dateTimeStart = mainEvent.metaData.dateStart.split("T");
    const dateTimeEnd = mainEvent.metaData.dateEnd.split("T");
    startDate = dateTimeStart[0].split("-");
    startTime = dateTimeStart[1].slice(0, 5);
    endDate = dateTimeEnd[0].split("-");
    endTime = dateTimeEnd[1].slice(0, 5);
    startMonth = startDate[1];
    startDay = startDate[2];
    startYear = startDate[0];
    endMonth = endDate[1];
    endDay = endDate[2];
    endYear = endDate[0];
  }

  return (
    <div className="row border rounded bg-light shadow">
      <div className="row p-2 m-2">
        <div className="col m-2 bg-dark border">
          <h2 className="text-white">Main Event</h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col">
          <div className="row p-3 m-2">
            <div className="col">
              <h2>{mainEvent.name}</h2>
              <h5>{mainEvent.headline}</h5>
            </div>
          </div>
          <div className="row p-3 m-2">
            <div className="col">
              <img
                // className="p-3"
                alt="Concert"
                width="600"
                src="https://static.billboard.com/files/2020/05/Music-Festival-Crowd-billboard-kl-1548-1589924089-compressed.jpg"
              />
            </div>
            <div className="col">
              <h5>
                <u>Description</u>
              </h5>
              <p>{mainEvent.description}</p>
              <p>
                For more information visit{" "}
                <a href={`http://${mainEvent.slug}`}>{mainEvent.slug}</a>
              </p>
            </div>
          </div>
          <div className="row p-3 m-2">
            <div className="col">
              <EventsMap event={mainEvent} />
            </div>
            <div className="col">
              <h5>
                <u>Location</u>
              </h5>
              <p>{address}</p>
              <h5>
                <u>Date</u>
              </h5>
              <p>Start Date: {`${startMonth}-${startDay}-${startYear}`}</p>
              <p>End Date: {`${endMonth}-${endDay}-${endYear}`}</p>
              <h5>
                <u>Time</u>
              </h5>
              <p>Starts: {startTime} pm</p>
              <p>Ends: {endTime} pm</p>
              <p>
                For more information visit{" "}
                <a href={`http://${mainEvent.slug}`}>{mainEvent.slug}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventsMain;
