import axios from "axios";
import debug from "sabio-debug";
const _logger = debug.extend("friendService");

let getAllFriends = (pageIndex, pageSize) => {
	const config = {
		method: "GET",
		url: `https://localhost:50001/api/friends/joins/paginate/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let searchFriends = (pageIndex, pageSize, query) => {
	const config = {
		method: "GET",
		url: `https://localhost:50001/api/friends/joins/search-paginate/?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let addNewFriend = (friendInfo) => {
	const config = {
		method: "POST",
		url: "https://localhost:50001/api/friends",
		data: friendInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let deleteFriend = (friendId) => {
	const config = {
		method: "DELETE",
		url: "https://localhost:50001/api/friends/" + friendId,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let getFriendById = (friendId) => {
	_logger("getFriendById start");
	const config = {
		method: "GET",
		url: "https://localhost:50001/api/friends/joins/" + friendId,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

let updateFriend = (friendInfo, friendId) => {
	const config = {
		method: "PUT",
		url: "https://localhost:50001/api/friends/" + friendId,
		data: friendInfo,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

export {
	getAllFriends,
	addNewFriend,
	deleteFriend,
	getFriendById,
	updateFriend,
	searchFriends,
};
