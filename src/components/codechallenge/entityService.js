import axios from "axios";

var endpoint = "https://api.remotebootcamp.dev/api/entities";

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
};

export default exportedObject;
