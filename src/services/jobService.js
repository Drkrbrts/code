import axios from "axios";
//import { data } from "jquery";

let endPoint = "https://api.remotebootcamp.dev/api/jobs";

let addJob = (payload) => {

  const config = {
    method: "POST",
    url: `${endPoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let jobs = () => {

    const config = {
        method: "GET",
        url: `${endPoint}?pageIndex=0&pageSize=10`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let deleteJob = (id) => {

    const config = {
        method: "DELETE",  
        url: `${endPoint}/${id}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let getJob = (id) => {
    const config = {   
        method: "GET",
        url: `${endPoint}/${id}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let editJob = (id, payload) => {
    const config = {
        method: "PUT",
        url: `${endPoint}/${id}`,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let searchJob = (payload) => {
    const config = {
        method: "GET",
        url: `${endPoint}/search?pageIndex=0&pageSize=10&searchTerm=${payload}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}


export { addJob, jobs, deleteJob, getJob, editJob, searchJob }; 