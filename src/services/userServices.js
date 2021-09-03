import axios from "axios";

export let logIn = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let logOut = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

// let payload = {
//   "firstName": "Kevin",
//   "lastName": "Bacon",
//   "email": "cb@gmail.com",
//   "password": "Password1!",
//   "passwordConfirm": "Password1!",
//   "avatarUrl": "https://bit.ly/3iZdRGY",
//   "tenantId": "1234kjadsrf"
// }
// userRegister(payload);

export let userRegister = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let currentUser = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let getUserByID = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/users/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default {
  logIn,
  userRegister,
  currentUser,
  getUserByID,
  logOut,
};
