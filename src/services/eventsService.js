import axios from "axios";

var eventsEndpoint = "https://api.remotebootcamp.dev/api/events";

let add = (payload) => {
  const config = {
    method: "POST",
    withCredentials: true,
    crossdomain: true,
    url: eventsEndpoint,
    data: payload,
  };
  return axios(config);
};

let update = (payload) => {
  const config = {
    method: "PUT",
    withCredentials: true,
    crossdomain: true,
    url: `${eventsEndpoint}/${payload.id}`,
    data: payload,
  };
  return axios(config);
};

let searchByDate = () => {
  const config = {
    method: "GET",
    withCredentials: true,
    crossdomain: true,
    url: `${eventsEndpoint}`, //temp
  };
  return axios(config);
};

let searchByGeo = (lat, lng, radiusMiles) => {
  console.log(lat, lng, radiusMiles);
  const config = {
    method: "GET",
    withCredentials: true,
    crossdomain: true,
    url: `${eventsEndpoint}/search/geo?latitude=${lat}&longitude=${lng}&radius=${radiusMiles}`, //temp
  };
  return axios(config);
};

let getPaginatedNotStarted = () => {
  const config = {
    withCredentials: true,
    crossdomain: true,
    method: "GET",
    url: `${eventsEndpoint}/feed?pageIndex=0&pageSize=10`,
  };
  return axios(config);
};

let getPaginatedStartingSoon = () => {
  const config = {
    method: "GET",
    withCredentials: true,
    crossdomain: true,
    url: `${eventsEndpoint}/feeds`,
  };
  return axios(config);
};

export {
  add,
  update,
  searchByDate,
  searchByGeo,
  getPaginatedNotStarted,
  getPaginatedStartingSoon,
};
