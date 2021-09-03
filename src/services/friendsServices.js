import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/friends";

export let getAll = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endPoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let addFriend = (payload) => {
  const config = {
    method: "POST",
    url: `${endPoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let getFriendById = (friendId) => {
  const config = {
    method: "GET",
    url: `${endPoint}/${friendId}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let updateFriend = (payload, id) => {
  const config = {
    method: "PUT",
    url: `${endPoint}/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let searchFriends = (pageIndex, pageSize, query) => {
  const config = {
    method: "GET",
    url: `${endPoint}?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: `${endPoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(() => id)
    .catch(responseErrorHandler);
};

const responseErrorHandler = (response) => {
  console.log("responseSuccessHandler", response);
  return response.data;
};

export default {
  getAll,
  addFriend,
  getFriendById,
  updateFriend,
  deleteFriend,
  searchFriends,
};
