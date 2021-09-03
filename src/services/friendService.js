import axios from "axios";

let getFriends = () => {
  
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=5",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  
  };
  
  let addFriend = (payload) => {
  
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
  
  let deleteFriend = (id) => {
  
    const config = {
      method: "DELETE",
      url: "https://api.remotebootcamp.dev/api/friends/" + id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  
  };
  
  let editFriend = (payload) => {
  
    const config = {
      method: "PUT",
      url: "https://api.remotebootcamp.dev/api/friends/" + payload.id,
      withCredentials: true,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  
  };

  let searchFriend = (searchQuery) => {

    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=10&q=" + searchQuery,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  }

export { getFriends, addFriend, deleteFriend, editFriend, searchFriend };