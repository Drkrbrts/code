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

export {getJobs, postJob}