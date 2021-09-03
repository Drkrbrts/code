import axios from "axios";

var entityService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities/cars",
};

let add = (payload) => {
  const config = {
    method: "POST",
    url: `${entityService.endpoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default {
  add,
};
