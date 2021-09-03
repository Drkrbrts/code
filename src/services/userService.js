import axios from "axios";

var userService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

let newUser = (payload) => {
  const config = {
    method: "POST",
    url: `${userService.endpoint}/register`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: `${userService.endpoint}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let logOutUser = () => {
  const config = {
    method: "GET",
    url: `${userService.endpoint}/logout`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getCurrent = () => {
  const config = {
    method: "GET",
    url: `${userService.endpoint}/current`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
let userById = (userID) => {
  const config = {
    method: "GET",
    url: `${userService.endpoint}/${userID}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { logIn, newUser, logOutUser, getCurrent, userById };
