import axios from "axios";

var endpoint = "https://api.remotebootcamp.dev/api/friends";

let getAll = () => {
  console.log("getAllFriends is executing");
  const config = {
    method: "GET",
    url: `${endpoint}?pageIndex=0&pageSize=10`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteFriend = (id) => {
  console.log("deleteFriend is executing");
  const config = {
    method: "DELETE",
    url: `${endpoint}/${id}`,
    data: id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getById = (id) => {
  console.log("getById is executing");
  const config = {
    method: "GET",
    url: `${endpoint}/${id}`,
    data: id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let updateById = (payload) => {
  console.log("updateById is executing");
  console.log(payload);
  const config = {
    method: "PUT",
    url: `${endpoint}/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let add = (payload) => {
  console.log("addFriend is executing");
  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
let search = (payload) => {
  console.log("searchFriend is executing");
  const config = {
    method: "GET",
    url: `${endpoint}/search?pageIndex=0&pageSize=10&q=${payload}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
const exportedObject = {
  getAll,
  deleteFriend,
  getById,
  updateById,
  add,
  search,
};
export default exportedObject;
