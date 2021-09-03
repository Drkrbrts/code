import axios from "axios";

let userService={endpoint: "https://api.remotebootcamp.dev/api/users"}

let logIn = (payload) => {

  const config = {
    method: "POST",
    url: `${userService.endpoint}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let register = (payload, onSuccess, onError) => {
  // console.log("Register service executing");
  
  const config = {
    method: `POST`,
    url: `${userService.endpoint}/register`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let currentUser = (onSuccess, onError) => {
 
  
  const config = {
    method: `GET`,
    url: `${userService.endpoint}/current`,
    
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let logOut = (onSuccess, onError) => {
 
  
  const config = {
    method: `GET`,
    url: `${userService.endpoint}/logout`,
    
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};
export { logIn, register, currentUser, logOut };