import axios from "axios";

var endpoint = "https://api.remotebootcamp.dev/api/techcompanies";

let getAll = (pageIndex, pageSize) => {
  console.log("getAllJobs is executing");
  const config = {
    method: "GET",
    url: `${endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let updateById = (payload) => {
  console.log("updateById is executing");
  console.log(payload);
  const config = {
    method: "PUT",
    url: `${endpoint}/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json-patch+json" },
  };

  return axios(config);
};

let add = (payload) => {
  console.log("addFriend is executing");
  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json-patch+json" },
  };

  return axios(config);
};
let getById = (id) => {
  console.log("getById is executing");
  const config = {
    method: "GET",
    url: `${endpoint}/${id}`,
    data: id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const exportedObject = {
  getAll,
  getById,
  updateById,
  add,
};
export default exportedObject;
