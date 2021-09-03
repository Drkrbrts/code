import axios from "axios";

let friendService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends",
};

let createFriend = (payload) => {
  const config = {
    method: "POST",
    url: friendService.endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let updateFriend = (payload) => {
  const config = {
    method: "PUT",
    url: `${friendService.endpoint}/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getFriends = () => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}?pageIndex=0&pageSize=3`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: `${friendService.endpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { createFriend, updateFriend, getFriends, deleteFriend };
