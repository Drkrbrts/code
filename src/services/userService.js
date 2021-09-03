import axios from "axios";

var userService = {
  endpoint: "https://api.remotebootcamp.dev/api/users"
};

let logIn = (payload) => {
  console.log("Login service executing");

  const config = {
    method: `POST`,
    url: `${userService.endpoint}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


let register = (payload, onSuccess, onError) => {
  console.log("Register service executing");

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
  console.log("Register service executing");
  
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
  console.log("Register service executing");
  
  const config = {
    method: `GET`,
    url: `${userService.endpoint}/logout`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export { logIn, register, currentUser, logOut}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }