import axios from "axios";

let createCompany = (coInfo) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/techcompanies",
		data: coInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let updateCompany = (coInfo, coId) => {
	const config = {
		method: "PUT",
		url: "https://api.remotebootcamp.dev/api/techcompanies/" + coId,
		data: coInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getAllCompanies = (pageIndex, pageSize) => {
	const config = {
		method: "GET",
		url: `https://api.remotebootcamp.dev/api/techcompanies?pageIndex=${pageIndex}&pageSize=${pageSize}`,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

export { createCompany, updateCompany, getAllCompanies };
