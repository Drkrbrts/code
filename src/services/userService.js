import axios from "axios";

function loginConfig(payload) {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/users/login",
		data: payload,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
}

export default loginConfig; // export all your calls here
