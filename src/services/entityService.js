import axios from "axios"; 

let addDog = (payload) => {

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/dogs",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    
      return axios(config);
    };

    export { addDog }; 
  