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


let register = (aPayload) => {

  

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: aPayload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

// if you had three functions to export 
// export { logIn, register, thirdFunction }

let currentUser = () => {
  const config = {
  method : "GET",
  url: "https://api.remotebootcamp.dev/api/users/current",
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
  };
  return axios(config)
};


let userId = (id) => {
  const config = {
  method : "GET",
  url: "https://api.remotebootcamp.dev/api/users/" + id,
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
  };
  return axios(config)
};

let logout = () => {
  const config = {
  method : "GET",
  url: "https://api.remotebootcamp.dev/api/users/logout",
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
  };
  return axios(config)
};

let submit =(anPayload)=>{
  const config ={
    method : "POST",
    url :"https://jsonplaceholder.typicode.com/posts",
    data: anPayload,
    withCredentials:true,
    crossdomain:true,
    headers: {"Content-Type": "application/json"}
  };
  return axios (config)
};


export { logIn, register, currentUser, userId, logout, submit}; // export all your calls here