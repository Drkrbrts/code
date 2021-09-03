import axios from "axios";

let logIn = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let logOut = () => {
  
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: {"Content-Type": "application/json"}
  }
  return axios(config)
}

let register = (payload) => {

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/register",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
  
  let current = () => {
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/users/current",
      withCredentials: true, 
      crossdomain: true,
      headers: {"Content-Type": "application/json"}
    };
    return axios(config)
  }

  let userNameById = () => {
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/users/7778",
      withCredentials: true,
      crossdomain: true,
      headers: {"Content-Type": "application/json"}
    }
    return axios(config)
  }

  

  let widgetCreate = (payload) => {
    
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/Cars",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: {"Content-type": "application/json"}
    }
    return axios(config)
  }
  
  export { logIn, register, current, userNameById, logOut, widgetCreate}; // export all your calls here
  
  // if you had three functions to export 
  // export { logIn, register, thirdFunction }