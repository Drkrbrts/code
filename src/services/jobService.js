import axios from "axios"

var jobService = {
    endpoint: "https://api.remotebootcamp.dev/api/jobs"
}

let addJob = (payload) => {
    const config = {
        method: "POST",
        url: `${jobService.endpoint}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type":"application/json" }
    }

    return axios(config)
}

let updateJob = (jobId, payload) => {
    const config = {
        method: "PUT",
        url: `${jobService.endpoint}/${jobId}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type":"application/json" }
    }

    return axios(config)
}

export { addJob, updateJob }