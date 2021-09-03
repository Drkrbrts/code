import axios from "axios";

let getJobs = () => {

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/jobs?pageIndex=0&pageSize=5",
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);
    
    };

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
}

let deleteJob = (id) => {

  const config = {
    method: "DELETE",
    url: "https://api.remotebootcamp.dev/api/jobs/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);

};

let editJob = (payload) => {

  const config = {
    method: "PUT",
    url: "https://api.remotebootcamp.dev/api/jobs" + payload.id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
}


export { getJobs, addJob, deleteJob, editJob };