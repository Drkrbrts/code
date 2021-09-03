import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api/users/";

let login = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let logout = () => {
  const config = {
    method: "GET",
    url: endpoint + "logout",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let register = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let currentUser = () => {
  const config = {
    method: "GET",
    url: endpoint + "current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let currentUserId = () => {
  const config = {
    method: "GET",
    url: endpoint + "{userId}",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};
export { login, logout, register, currentUser, currentUserId };
