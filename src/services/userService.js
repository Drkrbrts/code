import axios from "axios";
//import { data } from "jquery";

let endPoint = "https://api.remotebootcamp.dev/api/users";

let logIn = (payload) => {
payload.tenantId = "you'rewelcome";
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


let register = (payload) => {

  payload.tenantId = "you'rewelcome";

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

let user = () => {
  const config = {
    method: "GET",
    url: `${endPoint}/current`,
    crossdomain: true,
    headers: {"Content-Type": "application/json"}
  }

  return axios(config);
}

let logOut = () => {
  const config = {
    method: "GET",
    url: `${endPoint}/logout`,
    crossdomain: true,
    headers: {"Content-Type": "application/json"}
  }

  return axios(config);
}

let userById = (id) => {
  const config = {
    method: "GET",
    url: `${endPoint}/${id}`,
    crossdomain: true,
    headers: {"Content-Type": "application/json"}
  }
  return axios(config);
}

export { logIn, register, user, logOut, userById}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }