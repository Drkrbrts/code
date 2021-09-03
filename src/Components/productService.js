import axios from "axios";


let entityCreate = (payload) => {

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/Cellphones",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  export { entityCreate}