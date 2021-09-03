import axios from "axios";

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let register = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let currentUser = (payload) => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    data: payload,
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let currentUserById = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/users/${id}`,
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let logOut = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { logIn, register, currentUser, logOut, currentUserById };
