import axios from "axios";

let logIn = (payload) => {

  payload = {
    email: "privacyisimportant@icloud.com",
    password: "SabioPassword1!",
    tenantId: "U01RTQ85QN5"
  };

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


let register = (payload, onSuccess, onError) => {

  payload = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    passwordConfirm: payload.passwordConfirm,
    avatarUrl: payload.avatarUrl,
    tenantId: "U01RTQ85QN5",
  };

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export { logIn, register}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }