import axios from "axios";

  
var login = (payload) => {
    
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/login",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    return axios(config);
}

var register = (payload) => {
    
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/register",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    return axios(config);
}

var current = (payload) => {
    
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/users/current",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    return axios(config);
}

var getById = (id) => {
    
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/users/" + id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    return axios(config);
}

var logout = (payload) => {
    
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/users/logout",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    return axios(config);
  }

export { login, register, current , getById ,logout};
