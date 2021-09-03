import axios from "axios";

export let getFriends = (index, size) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends?pageIndex=${index}&pageSize=${size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let getFriendById = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let createFriend = (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: `https://api.remotebootcamp.dev/api/friends/`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let editFriend = (payload) => {
  const config = {
    method: "PUT",
    data: payload,
    url: `https://api.remotebootcamp.dev/api/friends/${payload.id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default {
  deleteFriend,
  getFriendById,
  createFriend,
  editFriend,
};
