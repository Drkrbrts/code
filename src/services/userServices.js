import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/users";

export let logIn = (payload) => {

  const config = {
    method: "POST",
    url: `${endPoint}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export let register = (payload) => {

  const config = {
    method: "POST",
    url: `${endPoint}/register`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export let currentUser = () => {

  const config = {
    method: "GET",
    url: `${endPoint}/current`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export let logout = () => {

  const config = {
    method: "GET",
    url: `${endPoint}/logout`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default { logIn, register, currentUser, logout }; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }