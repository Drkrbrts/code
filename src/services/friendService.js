import axios from "axios";

var friendService = {
  endpoint: "https://api.remotebootcamp.dev/api/friends"
};


let getFriends = () => {
  console.log("Register service executing");
  
  const config = {
    method: `GET`,
    url: `${friendService.endpoint}?pageIndex=0&pageSize=10`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let addFriend = (payload) => {
  console.log("Login service executing");

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


export { getFriends, addFriend };
