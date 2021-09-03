import axios from "axios";

let logIn = (payload) => {

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


let register = (payload, onSuccess, onError) => {

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

let post = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/Widgets",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
 
};

let getCurrentUser = (payload) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


let getCurrentUserId = (payload) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/7287",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


let logOut = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    data: "",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


let grabFriends = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10",
    data: "",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let postFriend = (data) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: data,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
 
};

let deleteFriend = () => {

  const config = {
    method: "DELETE",
    url: "https://api.remotebootcamp.dev/api/friends/25789",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
 
};





export { logIn, 
         register, 
         post, 
         getCurrentUser, 
         getCurrentUserId, 
         postFriend, 
         logOut, 
         grabFriends,
         deleteFriend};  //export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }