


import axios from "axios";

let logIn = (payload) => {

    // var payload = 
    // { email: "spongebobsquarepants@gmail.com", 
    // password: "Password1!",
    // tenantId: "bikinibottom222" };

    const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    withCredentials: true,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


let register = (payload, onSuccess, onError) => {

  console.log(payload)
  const config = {
  method: "POST",
  url: "https://api.remotebootcamp.dev/api/users/register",
  withCredentials: true,
  data: payload,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
};

return axios(config);

}


let getLogOut = () => {

  const config = {
  method: "GET",
  url: "https://api.remotebootcamp.dev/api/users/logout",
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
  };

  return axios(config)
};


let currentUser = () => {

  const config = {
  method: "GET",
  url: "https://api.remotebootcamp.dev/api/users/current",
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
  };

  return axios(config)
};


let getById = (id) => {

  const config = {
  method: "GET",
  url: `https://api.remotebootcamp.dev/api/users/${id}`,
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
  };

  return axios(config)
};


export {logIn, register, currentUser, getById, getLogOut}



// var usersService = {
//   endpoint: "https://api.remotebootcamp.dev/api/users/login"
// };

// var userLogin = () => {
//   var payload = {
//       email: "spongebobsquarepants@gmail.com",
//       password: "Password1!",
//       tenantId: "bikinibottom222",

//   };
//   const config = {
//       method: "POST",
//       url: usersService + "/login",
//       data: payload,
//       crossdomain: true,
//       headers: { "Content-Type": "application/json" }
//   };

//   return axios(config)
// };


