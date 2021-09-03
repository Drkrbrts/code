import axios from "axios";

//            Friend Services

const endpoint = "https://api.remotebootcamp.dev/api/friends";

//Get Records request
const getRecords = (pageIndex = 0, pageSize = 5) => {
  const config = {
    method: "GET",
    url: `${endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

//** Add friend is done and fully functional renders to template on the promise function!
const addFriend = (payload) => {
  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

//for edit freind button which then becomes submit button
//PUT request is done and fully functional!
const editFriend = (payload, friendID) => {
  const config = {
    method: "PUT",
    url: endpoint + "/" + friendID,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

//for delete button which then removes from DOM
//** Delete button is DONE!!!!

const deleteFriend = (friendID) => {
  const config = {
    method: "DELETE",
    url: `${endpoint}/${friendID}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

//Get friend by query request
const getFriendQuery = (query, pageSize = 10, pageIndex = 0) => {
  const config = {
    method: "GET",
    url: `${endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { getRecords, addFriend, editFriend, deleteFriend, getFriendQuery };
