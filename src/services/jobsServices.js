import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/jobs";

export let getAll = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endPoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let addJob = (payload) => {
  const config = {
    method: "POST",
    url: `${endPoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let getJobById = (jobId) => {
  const config = {
    method: "GET",
    url: `${endPoint}/${jobId}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let getJobBySlug = (slug) => {
  const config = {
    method: "GET",
    url: `${endPoint}/${slug}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let updateJob = (payload, id) => {
  const config = {
    method: "PUT",
    url: `${endPoint}/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let searchJobs = (pageIndex, pageSize, query) => {
  const config = {
    method: "GET",
    url: `${endPoint}?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let deleteJob = (id) => {
  const config = {
    method: "PUT",
    url: `${endPoint}/${id}/2`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(() => id)
    .catch(responseErrorHandler);
};

const responseErrorHandler = (errResponse) => {
  console.log("responseSuccessHandler", errResponse);
  return errResponse.data;
};

export default {
  getAll,
  addJob,
  getJobById,
  updateJob,
  deleteJob,
  searchJobs,
  getJobBySlug,
};
