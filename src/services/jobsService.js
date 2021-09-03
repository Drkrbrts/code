import axios from "axios";

let jobService = {
  endpoint: "https://api.remotebootcamp.dev/api/jobs",
};

let getAll = () => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}/?pageIndex=0&pageSize=100`,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let addNew = (payload) => {
  const config = {
    method: "POST",
    url: jobService.endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let byId = (jobId) => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}/${jobId}`,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let updateCurr = (idOfJob, payload) => {
  const config = {
    method: "PUT",
    url: `${jobService.endpoint}/${idOfJob}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let searchReq = (searchStr) => {
  const config = {
    method: "GET",
    url: `${jobService.endpoint}/search?pageIndex=0&pageSize=100&searchTerm=${searchStr}`,
    withCredentials: true,
    crossdomain: true,
    header: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { getAll, addNew, byId, updateCurr, searchReq };
