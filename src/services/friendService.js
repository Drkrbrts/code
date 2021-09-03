import axios from "axios";

var friendService = { endpoint: "https://api.remotebootcamp.dev/api/friends" };

let getFirstPage = () => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}?pageIndex=0&pageSize=3`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getByPagination = (page, size) => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}?pageIndex=${page - 1}&pageSize=${size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getByPaginatedSearch = (page, size, query) => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}/search?pageIndex=${
      page - 1
    }&pageSize=${size}&q=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${friendService.endpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteById = (id) => {
  const config = {
    method: "DELETE",
    url: `${friendService.endpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(() => id)
    .catch(responseErrorHandler);
};

const responseErrorHandler = (response) => {
  console.log("responseErrorHandler", response);
  return response.data;
};

let add = (payload) => {
  const config = {
    method: "POST",
    url: `${friendService.endpoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let update = (id, payload) => {
  const config = {
    method: "PUT",
    url: `${friendService.endpoint}/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default {
  getFirstPage,
  getByPagination,
  getByPaginatedSearch,
  getById,
  deleteById,
  add,
  update,
};
