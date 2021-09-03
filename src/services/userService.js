import axios from "axios";

var userService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: userService.endpoint + "/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let register = (payload) => {
  const config = {
    method: "POST",
    url: userService.endpoint + "/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { logIn, register };
