import axios from "axios";

let addEntity = (payload) => {

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/challengecars",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  export {addEntity};

