import axios from "axios";

var entityService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities/widgets"
};

let createWidget = (payload) => {
  console.log("createWidget service executing");

  const config = {
    method: `POST`,
    url: `${entityService.endpoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export { createWidget };