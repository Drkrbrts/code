import axios from "axios";

let addJob = (payload) => {

    console.log("add is executing");

    payload = {
            title: payload.title,
            description: payload.description,
            summary: payload.summary,
            pay: payload.pay,
            slug: payload.slug,
            statusId: payload.statusId,
            techCompanyId: payload.techCompanyId,
            skills: payload.skills
    };

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/jobs",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config);
}

let getById = (id) => {

    console.log("get(Job)ById is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/jobs/" + id,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

let update = (id, payload) => {
    
    console.log("update Friend is executing");

    payload = {
        title: payload.title,
        description: payload.description,
        summary: payload.summary,
        pay: payload.pay,
        slug: payload.slug,
        statusId: payload.statusId,
        techCompanyId: payload.techCompanyId,
        skills: payload.skills
    };  

    const config = {
        method: "PUT",
        url: "https://api.remotebootcamp.dev/api/jobs/" + id,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

let getPaginated = (pageIndex,pageSize) => {

    console.log("getPaginated is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/jobs?pageIndex=" + pageIndex + "&pageSize=" + pageSize,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

let searchJob = (pageIndex, pageSize, searchTerm) => {

    console.log("searchJob is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/jobs/search?pageIndex=" + pageIndex + "&pageSize=" + pageSize + "&searchTerm=" + searchTerm,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config);
}


export { addJob, update, getPaginated, getById, searchJob};