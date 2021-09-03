import axios from "axios";

let register = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/cars",
    data: payload,
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { register };
