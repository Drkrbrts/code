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


  var friendEndpoint="https://api.remotebootcamp.dev/api/friends"

  let addFriends = (payload) => {

    const config = {
      method: "POST",
      url: friendEndpoint,
      data:payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let getFriends = (pageIndex,pageSize) => {

    const config = {
      method: "GET",
      url: `${friendEndpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let updateFriends = (payload) => {

    const config = {
      method: "PUT",
      url: friendEndpoint +"/"+ payload.id,
      data:payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let getFriendsId = (id) => {

    const config = {
      method: "GET",
      url: friendEndpoint +"/"+id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let deleteFriendsId = (id) => {

    const config = {
      method: "DELETE",
      url: friendEndpoint +"/"+id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
  let getSearch = (pageIndex,pageSize,q) => {

    const config = {
      method: "GET",
      url: `${friendEndpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${q}`,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

let updateId = (payload,id,statusId) => {

  const config = {
    method: "PUT",
    url: friendEndpoint + id + statusId,
    payload:payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getSlug = (slug) => {

  const config = {
    method: "GET",
    url:friendEndpoint + slug,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};













export { logIn, register,logInUser,currentUser,userId,logOut,addFriends,getFriends,updateFriends,getFriendsId,deleteFriendsId,getSearch,updateId,getSlug}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction } 