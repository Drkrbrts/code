import axios from 'axios'

let getJobs = (index, size) => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/jobs?pageIndex=${index}&pageSize=${size}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getJob = (id) => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let postJob = payload => {

    const config = {
        method: 'POST',
        url: 'https://api.remotebootcamp.dev/api/jobs',
        data: payload,
        withCredentials: true, 
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let updateJob = (payload, id) => {
    
    const config = {
        method: "PUT",
        url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let search = (index, size, term)  => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/jobs/search?pageIndex=${index}&pageSize=${size}&searchTerm=${term}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

export {getJobs, getJob, postJob, updateJob, search}