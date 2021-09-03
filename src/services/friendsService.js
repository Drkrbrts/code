import axios from "axios";

var friendsEndpoint = "https://api.remotebootcamp.dev/api/friends";

let add = (payload) => {
  const config = {
    method: "POST",
    url: friendsEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getPaginated = () => {
  const config = {
    method: "GET",
    url: `${friendsEndpoint}?pageIndex=0&pageSize=10`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let destroy = (id) => {
  const config = {
    method: "DELETE",
    url: `${friendsEndpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let edit = (payload) => {
  const config = {
    method: "PUT",
    url: `${friendsEndpoint}/${payload.id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${friendsEndpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let search = (pageIndex, pageSize, searchQuery) => {
  const config = {
    method: "GET",
    url: `${friendsEndpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchQuery}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { add, getPaginated, destroy, edit, getById, search };
