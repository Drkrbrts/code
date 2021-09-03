import axios from "axios";

let createNewEvent = (eventInfo) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/events",
		data: eventInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getAllEvents = (pageIndex, pageSize) => {
	const config = {
		method: "GET",
		url: `https://api.remotebootcamp.dev/api/events/feed?pageIndex=${pageIndex}&pageSize=${pageSize}`,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let updateEvent = (eventInfo, eventId) => {
	const config = {
		method: "PUT",
		url: "https://api.remotebootcamp.dev/api/events/" + eventId,
		data: eventInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

export { createNewEvent, getAllEvents, updateEvent };
