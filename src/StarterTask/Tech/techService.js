import axios from "axios";

const baseUrl = "https://api.remotebootcamp.dev/api/techcompanies"

let getAllCompanies = (index) => {

  const config = {
    method: "GET",
    url: `${baseUrl}?pageIndex=${index}&pageSize=2`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let getCompanyById = (id) => {

  const config = {
    method: "GET",
    url: `${baseUrl}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let addCompany = (payload) => {

  const config = {
    method: "POST",
    url: baseUrl ,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let changeCompany = (payload, coId) => {

  const config = {
    method: "PUT",
    url: baseUrl + "/" + coId,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let deleteCompany = (coId) => {

  const config = {
    method: "PUT",
    url: `${baseUrl}/${coId}/Deleted`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let searchForCompanies = (searchItem) => {

  const config = {
    method: "GET",
    url: baseUrl + '/search?pageIndex=0&pageSize=20&q=' + searchItem,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default {addCompany, searchForCompanies, getAllCompanies, getCompanyById, changeCompany, deleteCompany}