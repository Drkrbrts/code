import axios from "axios";

var techCompaniesEndpoint = "https://api.remotebootcamp.dev/api/techcompanies";

let getPaginated = () => {
  const config = {
    method: "GET",
    url: `${techCompaniesEndpoint}?pageIndex=0&pageSize=10`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let add = (payload) => {
  const config = {
    method: "POST",
    url: techCompaniesEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let update = (payload) => {
  const config = {
    method: "PUT",
    url: `${techCompaniesEndpoint}/${[payload.id]}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${techCompaniesEndpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { getPaginated, add, update, getById };
