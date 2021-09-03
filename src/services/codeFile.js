import axios from "axios";

let submit = (thePayload) => {


  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/trucks",
    data: thePayload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export { submit };