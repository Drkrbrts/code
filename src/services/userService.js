import axios from "axios";

const userEndpoint = "https://api.remotebootcamp.dev/api/users";

let login = (payload) => {
    console.log("Login Service is firing........")

  const config = {
    method: "POST",
    url: userEndpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let register = (payload) => {
    console.log("Register Service is firing........")

  const config = {
    method: "POST",
    url: userEndpoint + "/register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let currentUser = () => {
  console.log("Current user Service is firing......")

  const config = {
    method: "GET",
    url: userEndpoint + "/current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let logout = () => {
  console.log("Logout Service is firing......")

  const config = {
    method: "GET",
    url: userEndpoint + "/logout",
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let sendEmail = (payload) => {
    console.log("Email Service is firing........")

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/emails",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let userId = (id) =>{
    console.log("Getting User By Id is firing........")

  const config = {
    method: "GET",
    url: userEndpoint+ "/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};




export { login, register, currentUser, logout, sendEmail, userId }; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }