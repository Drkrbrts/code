import axios from "axios"

let newEntity = (payload) => {
 
 
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev//api/entities/Companies",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  export {newEntity}