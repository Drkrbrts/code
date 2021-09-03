import axios from "axios";

var friendService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends",
};

let allFriends = () => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}?pageIndex=0&pageSize=100`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getFriendById = (friendId) => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}/${friendId}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let addNew = (newFriendInfo) => {
  const config = {
    method: "POST",
    url: friendService.endpoint,
    withCredentials: true,
    data: newFriendInfo,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let editFriend = (friendId, editInfo) => {
  const config = {
    method: "PUT",
    url: `${friendService.endpoint}/${friendId}`,
    withCredentials: true,
    data: editInfo,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let deleteFriend = (friendId) => {
  const config = {
    method: "DELETE",
    url: `${friendService.endpoint}/${friendId}`,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return friendId;
  });
};

let searchFriends = (searchData) => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}/search?pageIndex=0&pageSize=100&q=${searchData}`,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export {
  allFriends,
  getFriendById,
  addNew,
  editFriend,
  deleteFriend,
  searchFriends,
};
