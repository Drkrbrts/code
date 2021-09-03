import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/entities/fastCars";

export let newCar = (payload) => {
  const config = {
    method: "POST",
    url: endPoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default {
  newCar,
};
