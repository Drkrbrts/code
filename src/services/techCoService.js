import axios from "axios";

var techService = {
  endpoint: "https://api.remotebootcamp.dev/api/techcompanies",
};

let getForJobs = () => {
  const config = {
    method: "GET",
    url: `${techService.endpoint}?pageIndex=0&pageSize=40`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${techService.endpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getByPagSearch = (page, size, query) => {
  const config = {
    method: "GET",
    url: `${techService.endpoint}/search?pageIndex=${
      page - 1
    }&pageSize=${size}&q=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getByPagination = (page, size) => {
  const config = {
    method: "GET",
    url: `${techService.endpoint}?pageIndex=${page - 1}&pageSize=${size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let add = (payload) => {
  const config = {
    method: "POST",
    url: `${techService.endpoint}`,
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
    url: `${techService.endpoint}/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let deleteById = (id) => {
  const config = {
    method: "PUT",
    url: `${techService.endpoint}/${id}/Deleted`,
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
  return response;
};

export default {
  getForJobs,
  getById,
  getByPagSearch,
  getByPagination,
  add,
  update,
  deleteById,
};
