import axios from "axios";

var users = {
  endpoint: "https://api.remotebootcamp.dev/api/users/",
};

let logIn = (payload) => {
  payload = {
    email: "privacyisimportant@icloud.com",
    password: "SabioPassword1!",
    tenantId: "U01RTQ85QN5",
  };

  const config = {
    method: "POST",
    url: users.endpoint + "login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let register = (payload) => {
  payload = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    passwordConfirm: payload.passwordConfirm,
    avatarUrl: payload.avatarUrl,
    tenantId: payload.tenantId,
  };

  const config = {
    method: "POST",
    url: users.endpoint + "register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getCurrent = () => {
  console.log("getCurrent is executing");

  const config = {
    method: "GET",
    url: users.endpoint + "current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (userId) => {
  console.log("getById is executing");

  const config = {
    method: "GET",
    url: users.endpoint + userId,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let logOut = (userId) => {
  console.log("logoutUser is executing");

  const config = {
    method: "GET",
    url: users.endpoint + userId,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { logIn, register, getCurrent, getById, logOut };
