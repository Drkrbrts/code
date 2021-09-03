import axios from "axios";
//import { data } from "jquery";

let endPoint = "https://api.remotebootcamp.dev/api/entities/forms";

let addEntity = (payload) => {

  const config = {
    method: "POST",
    url: `${endPoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};




export { addEntity }; 