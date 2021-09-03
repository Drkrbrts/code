import axios from "axios";

const baseUrl = "https://api.remotebootcamp.dev/api/events"

let getAllEvents = (index) => {

  const config = {
    method: "GET",
    url: `${baseUrl}/feed?pageIndex=${index}&pageSize=2`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getEventsForGoogleMap = () => {
  const config = {
    method: "GET",
    url: `${baseUrl}/feed?pageIndex=0&pageSize=20`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
}

let getRecentEvent = (dateStart, dateEnd) => {

  const config = {
    method: "GET",
    url: `${baseUrl}/search?pageIndex=0&pageSize=1&dateStart=${dateStart}&dateEnd=${dateEnd}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let addEvent = (payload) => {

  const config = {
    method: "POST",
    url: baseUrl ,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let changeEvent = (payload, eventId) => {

  const config = {
    method: "PUT",
    url: baseUrl + "/" + eventId,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let searchForEvents = (searchDate1, searchDate2) => {

  const config = {
    method: "GET",
    url: `${baseUrl}/search?pageIndex=0&pageSize=20&&dateStart=${searchDate1}&dateEnd=${searchDate2}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default {getEventsForGoogleMap, addEvent, searchForEvents, getAllEvents, getRecentEvent, changeEvent}