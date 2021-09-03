import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api/jobs";

const addJob = (job) => {
  console.log("jobsService addJob firing", job);
  const config = {
    method: "POST",
    url: endpoint,
    data: job,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const updateJob = (job) => {
  console.log("jobsService updateJob firing", job);
  const config = {
    method: "PUT",
    url: `${endpoint}/${job.id}`,
    data: job,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getPaginatedJobs = (pageIndex, pageSize) => {
  console.log("jobsService getPaginatedJobs firing", pageIndex, pageSize);
  const config = {
    method: "GET",
    url: `${endpoint}/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getJobById = (jobId) => {
  console.log("jobsService getJobById firing", jobId);
  const config = {
    method: "GET",
    url: `${endpoint}/${jobId}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const searchJobs = (pageIndex, pageSize, searchTerm) => {
  console.log("jobsService searchJobs firing", pageIndex, pageSize);
  const config = {
    method: "GET",
    url: `${endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&searchTerm=${searchTerm}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const deleteJob = (jobId) => {
  console.log("jobsService deleteJob firing", jobId);
  const config = {
    method: "PUT",
    url: `${endpoint}/${jobId}/2`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return jobId;
  });
};

export {
  addJob,
  updateJob,
  getPaginatedJobs,
  getJobById,
  searchJobs,
  deleteJob,
};
