import axios from "axios";

 var endpoint = "https://api.remotebootcamp.dev/api/entities"


let addEntity = (payload) => {

    const config = {
      method: "POST",
      url: endpoint + "/cars",
      data:payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
  let getEntity = (id) => {

    const config = {
      method: "GET",
      url: endpoint + "/cars/"  +id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  export {addEntity, getEntity};
