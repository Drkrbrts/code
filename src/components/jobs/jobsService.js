import axios from "axios";

let addJob = (payload) => {

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/jobs",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let editJob = (id, payload) => {

    const config = {
      method: "PUT",
      url: "https://api.remotebootcamp.dev/api/jobs/" + id,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config).then(() => id);
  };

  let getJobs = () => {

    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/jobs?pageIndex=0&pageSize=10",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
  

  let getCompanies = () => {

    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/techcompanies?pageIndex=0&pageSize=10",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    return axios(config);
  };

  export {addJob, editJob, getJobs, getCompanies};