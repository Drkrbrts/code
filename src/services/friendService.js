import axios from "axios";

var friendService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends"
};


let getFriends = () => {
  console.log("getFriends service executing");
  
  const config = {
    method: `GET`,
    url: `${friendService.endpoint}?pageIndex=0&pageSize=100`,
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

export { getFriends, addNewFriend, deleteFriend, editFriend };
