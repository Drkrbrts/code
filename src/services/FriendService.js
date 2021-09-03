import axios from "axios";

var friends = {
  endpoint: "https://localhost:50001/api/friends/",
};

let add = (payload) => {
  console.log("add is executing");

  payload = {
    title: payload.title,
    bio: payload.bio,
    summary: payload.summary,
    headline: payload.headline,
    slug: payload.slug,
    statusId: payload.statusId,
    skills: payload.skills,
    primaryImage: payload.primaryImage,
  };

  const config = {
    method: "POST",
    url: friends.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getPaginated = (pageIndex, pageSize) => {
  console.log("getPaginated is executing");

  const config = {
    method: "GET",
    url:
      friends.endpoint +
      "paginate/?pageIndex=" +
      pageIndex +
      "&pageSize=" +
      pageSize,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let update = (id, payload) => {
  console.log("update Friend is executing");

  payload = {
    title: payload.title,
    bio: payload.bio,
    summary: payload.summary,
    headline: payload.headline,
    slug: payload.slug,
    statusId: payload.statusId,
    skills: payload.skills,
    primaryImage: payload.primaryImage,
  };

  const config = {
    method: "PUT",
    url: friends.endpoint + id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (id) => {
  console.log("get(Friend)ById is executing");

  const config = {
    method: "GET",
    url: friends.endpoint + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let deleteFriend = (id) => {
  console.log("deleteFriend is executing");

  const config = {
    method: "GET",
    url: friends.endpoint + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let searchFriend = (pageIndex, pageSize, q) => {
  console.log("searchFriend is executing");

  const config = {
    method: "GET",
    url:
      friends.endpoint +
      "search/?pageIndex=" +
      pageIndex +
      "&pageSize=" +
      pageSize +
      "&q=" +
      q,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let updateIdStatus = (id, statusId) => {
  console.log("update friend statusId is executing");

  const config = {
    method: "PUT",
    url: friends.endpoint + id + "/" + statusId,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getBySlug = (slug) => {
  console.log("getBySlug is executing");

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends/" + slug,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export {
  add,
  getPaginated,
  update,
  getById,
  deleteFriend,
  searchFriend,
  updateIdStatus,
  getBySlug,
};
