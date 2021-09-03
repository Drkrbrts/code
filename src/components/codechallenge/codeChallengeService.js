import axios from "axios";

let createWidget = (widgetInfo) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/entities/widgets",
		data: widgetInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

export default createWidget;
