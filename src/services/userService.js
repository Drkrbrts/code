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


let register = (payload, onSuccess, onError) => {

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

  return axios(config);
};


let currentUser = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let currentLoggedIn = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/7288",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let submitUserForm = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};





let addFriend = (data) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: data,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


    
let getFriends = () =>{
  const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10",
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
  };
    return axios(config)
};


export { logIn
  , register
  , logOut
  , currentUser
  , currentLoggedIn
  , submitUserForm
  , addFriend
  , getFriends}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }