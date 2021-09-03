import axios from "axios";
let users = "https://api.remotebootcamp.dev/api/users";
let friends = "https://api.remotebootcamp.dev/api/friends";

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: users + "/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let register = (payload) => {
  const config = {
    method: "POST",
    url: users + "/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let logout = () => {
  const config = {
    method: "GET",
    url: users + "/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let current = () => {
  const config = {
    method: "GET",
    url: users + "/current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then((response) => {
    console.log(response, "register");
    return response.data.item;
  });
};

let byId = (id) => {
  const config = {
    method: "GET",
    url: users + "/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then((response) => {
    console.log(response, "register");
    return response.data.item;
  });
};

let addFriend = (payload) => {
  const config = {
    method: "POST",
    url: friends,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };

  return axios(config).then((response) => {
    console.log(response, "add friend");
    return { ...payload, id: response.data.item };
  });
};

let getFriends = () => {
  const config = {
    method: "GET",
    url: friends + "?pageIndex=0&pageSize=5",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };

  return axios(config).then((response) => {
    console.log(response.data.item.pagedItems, "get friends");
    return response.data.item.pagedItems;
  });
};

let updateFriend = (payload) => {
  const config = {
    method: "PUT",
    url: friends + "/" + payload.id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };

  return axios(config).then((response) => {
    console.log(response, "update friends");
    return response;
  });
};

let deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: friends + "/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then((response) => {
    console.log(response, "delete friend");
    return response.data.item;
  });
};

export {
  logIn,
  register,
  logout,
  current,
  byId,
  addFriend,
  getFriends,
  updateFriend,
  deleteFriend,
};
