import axios from "axios";

var usersEndpoint = "https://api.remotebootcamp.dev/api/users";

let login = (payload) => {
  const config = {
    method: "POST",
    url: `${usersEndpoint}/login`,
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
    url: `${usersEndpoint}/logout`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let current = () => {
  const config = {
    method: "GET",
    url: `${usersEndpoint}/current`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${usersEndpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let register = (payload) => {
  const config = {
    method: "POST",
    url: `${usersEndpoint}/register`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { login, logout, current, getById, register };
