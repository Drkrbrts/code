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

let logOut = () => {
  
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
}

let current = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
}

let createFriend = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
} 

let searchFriend = (searchString) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends/search?pageIndex=1&pageSize=1&q=" + `${searchString}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
}

let createWidget = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/widgets",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
}

export { logIn, register, logOut, current, createFriend, searchFriend, createWidget}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }
