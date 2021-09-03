import axios from "axios";
//create
var createJob = (payload) => {

    const config = {
        method: 'POST',
        url: `https://api.remotebootcamp.dev/api/jobs`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    }
    return axios(config);
}

// get jobs first 
var getJobs = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/jobs?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    }

    return axios(config);
}

//update job (after submitting the form)

var updateJobs = (id, payload) => {

    const config = {
        method: 'PUT',
        url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    } 
    return axios(config);
}
//search jobs use decodeUri() method. See stackoverflow 
var searchJobs = (pageIndex, pageSize, searchTerm) => {
    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/jobs/search?pageIndex=0&pageSize=30&searchTerm=Software%20Engineer`
    }
}

// tech CO 
var showJobs = (pageIndex,pageSize) => {
    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/techcompanies?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    }
    return axios(config);
}

export { createJob, getJobs, updateJobs, searchJobs, showJobs }