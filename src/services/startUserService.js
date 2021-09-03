import axios from "axios";

const logIn = (payload) => {

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/login",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
  
const register = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};

const getUser = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    crossdomain: true,
    headers: { "Content-Type" : "application/json" }
  };
  return axios(config);
};

const getUserId = (userId) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/" + userId,
    crossdomain: true,
    headers: { "Content-Type" : "application/json" }
  };
  return axios(config);
};

const logOut = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredientials: true,
    crossdomain: true,
    headers: { "Content-Type" : "application/json" }
  };
  return axios(config);
};

const addFriends = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};

let getFriend = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=3",
    crossdomain: true,
    headers: { "Content-Type" : "application/json" }
  };
  return axios(config);
};
    
export default {logIn, register, getUser, getUserId, logOut, addFriends, getFriend};