import axios from "axios";

var jobService = { endpoint: "https://api.remotebootcamp.dev/api/jobs" };

let getFirstPage = () => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}?pageIndex=0&pageSize=3`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getByPagination = (page, size) => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}?pageIndex=${page - 1}&pageSize=${size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getByPaginatedSearch = (page, size, query) => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}/search?pageIndex=${
      page - 1
    }&pageSize=${size}&searchTerm=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getBySlug = (slug) => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}/${slug}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteById = (id) => {
  const config = {
    method: "PUT",
    url: `${jobService.endpoint}/${id}/3`,
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
    url: `${jobService.endpoint}`,
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
    url: `${jobService.endpoint}/${id}`,
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
  getBySlug,
  deleteById,
  add,
  update,
};
