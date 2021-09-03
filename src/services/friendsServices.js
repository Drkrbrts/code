import axios from "axios"


var friendEndpoint="https://localhost:50001/api/friends/"

let addFriends = (payload) => {

  const config = {
    method: "POST",
    url: friendEndpoint,
    data:payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getFriends = (pageIndex,pageSize) => {

  const config = {
    method: "GET",
    url: `${friendEndpoint}paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let updateFriends = (payload) => {

  const config = {
    method: "PUT",
    url: friendEndpoint + payload.id,
    data:payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getFriendsId = (id) => {

  const config = {
    method: "GET",
    url: friendEndpoint +id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let deleteFriendsId = (id) => {

  const config = {
    method: "DELETE",
    url: friendEndpoint+id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(()=>id);
};
let getSearch = (pageIndex,pageSize,query) => {

  const config = {
    method: "GET",
    url: `${friendEndpoint}search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let updateId = (payload,id,statusId) => {

const config = {
  method: "PUT",
  url: friendEndpoint + id + statusId,
  payload:payload,
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
};

return axios(config);
};

let getSlug = (slug) => {

const config = {
  method: "GET",
  url:friendEndpoint + slug,
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
};
return axios(config);
};

export{addFriends,getFriends,updateFriends,getFriendsId,deleteFriendsId,getSearch,updateId,getSlug};
