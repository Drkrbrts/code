import axios from "axios";

const baseUrl = "https://api.remotebootcamp.dev/api/friends"

let getAllFriends = (index) => {

  const config = {
    method: "GET",
    url: baseUrl + `?pageIndex=${index}&pageSize=2`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let addFriends = (payload) => {

  const config = {
    method: "POST",
    url: baseUrl,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let changeFriends = (payload, friendId) => {

  const config = {
    method: "PUT",
    url: baseUrl + "/" + friendId,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let deleteFriend = (friendId) => {

  const config = {
    method: "DELETE",
    url: baseUrl + "/" + friendId,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let searchForFriends = (searchItem) => {

  const config = {
    method: "GET",
    url: baseUrl + '/search?pageIndex=0&pageSize=20&q=' + searchItem,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default {getAllFriends, addFriends, changeFriends, deleteFriend, searchForFriends};