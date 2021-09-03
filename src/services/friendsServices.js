import axios from "axios";

let postFriend = (payload) => {
  //   console.log(payload);
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    withCredentials: true,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getAllFriends = (pageIndex, pageSize) => {
  //   console.log(payload);
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let editFriend = (payload, id) => {
  console.log(payload);
  const config = {
    method: "PUT",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    withCredentials: true,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let searchFriends = (pageIndex, pageSize, query) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/friends/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { postFriend, getAllFriends, deleteFriend, editFriend, searchFriends };
