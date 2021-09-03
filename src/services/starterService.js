import axios from "axios";
let users = "https://api.remotebootcamp.dev/api/users";

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: users + "/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { logIn };
