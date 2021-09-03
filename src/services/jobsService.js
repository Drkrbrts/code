import axios from "axios";

let endpoint = "https://api.remotebootcamp.dev/api/jobs";

let addJob =(payload)=>{

    const config ={
        method: "POST",
        url: endpoint,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type" : "application/json" }
    }

    return axios(config);
}

let updateJob = (payload) =>{

    const config={
        method: "PUT",
        url: `${endpoint}/${payload.id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type" : "application/json"}
    }

    return axios(config);
}

let getAllJobs =(pageIndex, pageSize)=>{

    const config={
        method: "GET",
        url: `${endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type" : "application/json" }
    }

    return axios(config);
}
export {addJob, updateJob, getAllJobs};