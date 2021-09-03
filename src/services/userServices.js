import axios from "axios";

let endpoint = "https://api.remotebootcamp.dev/api/users";

let register = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "/register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let loginUrl = (userId, userName, slackId) => {
  const config = {
    method: "GET",
    url: `${endpoint}/${userId}/${userName}/${slackId}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let login = (payload) => {
  const config = {
    method: "POST",
    url: endpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let logout = () => {
  const config = {
    method: "GET",
    url: endpoint + "/logout",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let currentUser = () => {
  const config = {
    method: "Get",
    url: endpoint + "/current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getUserViaId = (userId) => {
  const config = {
    method: "Get",
    url: `${endpoint}/${userId}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { register, loginUrl, getUserViaId, currentUser, login, logout };
