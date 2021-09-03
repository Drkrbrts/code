import axios from "axios";

let logInUser = (data) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/users/login",
		data: data,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getCurrent = () => {
	const config = {
		method: "GET",
		url: "https://api.remotebootcamp.dev/api/users/current",
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getUserInfoById = (id) => {
	const config = {
		method: "GET",
		url: "https://api.remotebootcamp.dev/api/users/" + id,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let logOutUser = () => {
	console.log("logout clicked");

	const config = {
		method: "GET",
		url: "https://api.remotebootcamp.dev/api/users/logout",
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

export { logInUser, getCurrent, getUserInfoById, logOutUser };
