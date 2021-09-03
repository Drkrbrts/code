import axios from "axios";

var friendService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends"
};


let getFriends = (payload) => {
  console.log("getFriends service executing");
  console.log("payload",payload);
  const config = {
    method: `GET`,
    url: `${friendService.endpoint}?pageIndex=${payload.page}&pageSize=${payload.size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let addNewFriend = (payload) => {
  console.log("addFriend service executing");

  const config = {
    method: `POST`,
    url: `${friendService.endpoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let deleteFriend = (payload) => {
  console.log("addFriend service executing");

  const config = {
    method: `DELETE`,
    url: `${friendService.endpoint}/${payload}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then((response) =>{
    return payload
  });
};

let editFriend = (payload) => {
  console.log("addFriend service executing");

  const config = {
    method: `PUT`,
    url: `${friendService.endpoint}/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then((response) =>{
    return payload
  });
};

let searchFriends = (payload) => {
  //console.log("searchFriends service executing");
  console.log("payload",payload.search);
  const config = {
    method: `GET`,
    url: `${friendService.endpoint}/search?pageIndex=0&pageSize=10&q=${payload.search}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export { getFriends, addNewFriend, deleteFriend, editFriend, searchFriends };
