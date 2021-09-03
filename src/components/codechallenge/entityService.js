import axios from "axios";

var endpoint = "https://api.remotebootcamp.dev/api/entities";

let getWidgets = () => {
  console.log("getWidgets is executing");
  const config = {
    method: "GET",
    url: `${endpoint}/widgets`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let add = (payload) => {
  console.log("addEntity is executing");
  const config = {
    method: "POST",
    url: `${endpoint}/${payload.entityName}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const exportedObject = {
  add,
  getWidgets,
};

export default exportedObject;
