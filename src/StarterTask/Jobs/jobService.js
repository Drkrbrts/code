import axios from "axios";

const baseUrl = "https://api.remotebootcamp.dev/api/jobs"

let getAllJobs = (index) => {

  const config = {
    method: "GET",
    url: `${baseUrl}?pageIndex=${index}&pageSize=2`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getJobById = (id) => {

  const config = {
    method: "GET",
    url: `${baseUrl}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let addJobs = (payload) => {

  const config = {
    method: "POST",
    url: baseUrl ,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let changeJob = (payload, jobId) => {

  const config = {
    method: "PUT",
    url: baseUrl + "/" + jobId,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let searchForJobs = (searchItem) => {

  const config = {
    method: "GET",
    url: baseUrl + '/search?pageIndex=0&pageSize=20&searchTerm=' + searchItem,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default {addJobs, searchForJobs, getAllJobs, changeJob, getJobById}