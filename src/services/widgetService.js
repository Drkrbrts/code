import axios from "axios";

const entityEndpoint = "https://api.remotebootcamp.dev/api/entities/widgets";

let add = (payload) => {
  console.log("Adding Job.....", payload);

  const config = {
    method: "POST",
    url: entityEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { add };