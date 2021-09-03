import axios from "axios";

let createJob = (jobInfo) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/jobs",
		data: jobInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let updateJob = (jobInfo, jobId) => {
	const config = {
		method: "PUT",
		url: "https://api.remotebootcamp.dev/api/jobs/" + jobId,
		data: jobInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getAllJobs = (pageIndex, pageSize) => {
	const config = {
		method: "GET",
		url: `https://api.remotebootcamp.dev/api/jobs?pageIndex=${pageIndex}&pageSize=${pageSize}`,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let searchJobs = (pageIndex, pageSize, query) => {
	const config = {
		method: "GET",
		url: `https://api.remotebootcamp.dev/api/jobs/search?pageIndex=${pageIndex}&pageSize=${pageSize}&searchTerm=${query}`,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getJobById = (jobId) => {
	const config = {
		method: "GET",
		url: "https://api.remotebootcamp.dev/api/jobs/" + jobId,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};
	return axios(config);
};

export { createJob, updateJob, getAllJobs, searchJobs, getJobById };
