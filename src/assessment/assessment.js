import axios from "axios";

var userService = {
  endpoint: "https://api.remotebootcamp.dev/api/users"
};

let logIn = (payload) => {
  console.log("Login service executing");

  const config = {
    method: `POST`,
    url: `${userService.endpoint}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export { logIn};