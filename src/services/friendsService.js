import axios from "axios";
const endpoint = "https://api.remotebootcamp.dev/api/friends";

const addFriend = (friend) => {
  console.log("friendsService addFriend firing", friend);
  const config = {
    method: "POST",
    url: endpoint,
    data: friend,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const updateFriend = (friendId, friend) => {
  console.log("friendsService updateFriend firing", friendId, friend);
  const config = {
    method: "PUT",
    url: `${endpoint}/${friendId}`,
    data: friend,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getPaginatedFriends = (pageIndex, pageSize) => {
  console.log("friendsService getAllFriends firing", pageIndex, pageSize);
  const config = {
    method: "GET",
    url: `${endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const search = (pageIndex, pageSize, searchTerm) => {
  console.log(
    "friendsService searchFriends firing",
    pageIndex,
    pageSize,
    searchTerm
  );
  const config = {
    method: "GET",
    url: `${endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchTerm}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getFriendById = (friendId) => {
  console.log("friendsService getFriendById firing", friendId);
  const config = {
    method: "GET",
    url: `${endpoint}/${friendId}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const deleteFriend = (friendId) => {
  console.log("friendsService deleteFriend firing", friendId);
  const config = {
    method: "DELETE",
    url: `${endpoint}/${friendId}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return { friendId };
  });
};

export {
  addFriend,
  updateFriend,
  getPaginatedFriends,
  search,
  getFriendById,
  deleteFriend,
};
