import axios from "axios";

var eventService = {
  endpoint: "https://api.remotebootcamp.dev/api/events",
};

let getEvents = () => {
  const config = {
    method: "GET",
    url: `${eventService.endpoint}/feed?pageIndex=0&pageSize=20`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export default { getEvents };
