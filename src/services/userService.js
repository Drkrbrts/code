import axios from "axios";
// import "./peopleService";

let logIn = () => {
  const payload = {
    email: "rodeell21@gmail.com",
    password: "String1!",
    tenantId: "U01TT4WTJTH",
  };

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

let register = (payload, onSuccess, onError) => {
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

export { logIn, register }; // export all your calls here

// if you had three functions to export
// export { logIn, register, thirdFunction
