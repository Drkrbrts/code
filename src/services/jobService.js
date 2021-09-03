import axios from "axios"

let createJob = (payload) => {

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/jobs",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

let updateJob = (id, payload) => {

    const config = {
        method: "POST",
        url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}


export {createJob, updateJob}