import axios from "axios";

let addWidget = (payload) => {
  
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/widgets",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  
  };

export default addWidget;