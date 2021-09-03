import axios from "axios";

let add = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getFriend = (pageIndex) => {
  const config = {
    method: "GET",
    url:
      "https://api.remotebootcamp.dev/api/friends?pageIndex=" +
      pageIndex +
      "&pageSize=10",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let edit = (payload, id) => {
  const config = {
    method: "PUT",
    url: "https://api.remotebootcamp.dev/api/friends/" + id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteFriend = (payload) => {
  const config = {
    method: "DELETE",
    url: "https://api.remotebootcamp.dev/api/friends/" + payload,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let searchForFriends = (payload) => {
  const config = {
    method: "GET",
    url:
      "https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=10&q=" +
      payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { add, deleteFriend, edit, getFriend, getById, searchForFriends };
