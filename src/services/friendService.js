import axios from "axios";

let createFriend = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
} 

let searchFriend = (searchString) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends/search?pageIndex=1&pageSize=1&q=" + `${searchString}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
}

let getFriend = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=3",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
}

let editFriend = (friendId, payload) => {

    const config = {
        method: "PUT",
        url: `https://api.remotebootcamp.dev/api/friends/${friendId}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
}

let deleteFriend = (friendId) => {

    const config = {
        method: "DELETE",
        url: `https://api.remotebootcamp.dev/api/friends/${friendId}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
}


export { createFriend, searchFriend, getFriend, editFriend, deleteFriend}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }