import axios from "axios";

const baseUrl = "https://api.remotebootcamp.dev/api/users/"

let logIn = (payload) => {

  const config = {
    method: "POST",
    url: baseUrl + "login",
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
    url: baseUrl + "register",
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
    url: baseUrl + "logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getCurrentUser = () => {

  const config = {
    method: "GET",
    url: baseUrl + "current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getUserById = (id) => {

  const config = {
    method: "GET",
    url: baseUrl + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default {logIn, register, logOut, getCurrentUser, getUserById};