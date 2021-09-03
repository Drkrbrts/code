import axios from "axios"

var endpoint = "https://api.remotebootcamp.dev/api/users"

let register = (payload) => {

  const config = {
    method: "POST",
    url: endpoint + "/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let logIn = (payload) => {

    const config = {
      method: "POST",
      url: endpoint + "/login",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let currentUser = () => {

    const config = {
      method: "GET",
      url:endpoint +"/current",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let userId = (id) => {

    const config = {
      method: "GET",
      url:endpoint + "/" +id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let logInUser = (id,userName,role) => {

    const config = {
      method: "GET",
      url:`${endpoint}/id${id}/userName${userName}/role${role}`,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let logOut = () => {

    const config = {
      method: "GET",
      url: endpoint + "/Logout",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };















export { logIn, register,logInUser,currentUser,userId,logOut}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction } 