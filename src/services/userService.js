import axios from "axios";

const baseURL = "https://api.remotebootcamp.dev/api";

let logIn = (payload) => {
    const config = {
        method: "POST",
        url: baseURL +"/users/login",
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
    url: baseURL + "/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};

let getCurrentUser = () => {
  const config = {
    method: "GET",
    url: baseURL + "/users/current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};

let logOut = () => {
  const config = {
    method: "GET",
    url: baseURL + "/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
}

export { logIn, register, getCurrentUser, logOut };