import axios from "axios";

var jobsEndpoint = "https://api.remotebootcamp.dev/api/jobs";

let getPaginated = () => {
  const config = {
    method: "GET",
    url: `${jobsEndpoint}?pageIndex=0&pageSize=10`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let add = (payload) => {
  const config = {
    method: "POST",
    url: jobsEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let update = (payload) => {
  const config = {
    method: "PUT",
    url: `${jobsEndpoint}/${payload.id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${jobsEndpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let search = (pageIndex, pageSize, searchQuery) => {
  const config = {
    method: "GET",
    url: `${jobsEndpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&searchTerm=${searchQuery}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let changeStatusId = (id, statusIdInt) => {
  const config = {
    method: "PUT",
    url: `${jobsEndpoint}/${id}/${statusIdInt}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { getPaginated, add, update, getById, search, changeStatusId };
