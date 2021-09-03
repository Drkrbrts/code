import axios from "axios";

const jobsService = {
    endpoint: "https://api.remotebootcamp.dev/api/jobs"
};

jobsService.add = (payload) => {
    const config = {
        method: "POST",
        url: jobsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

jobsService.showAll = () => {
    const config = {
        method: "GET",
        url: jobsService.endpoint + "?pageIndex=0&pageSize=10",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

jobsService.edit = (id, payload) => {
    const config = {
        method: "PUT",
        url: jobsService.endpoint + "/" + id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

jobsService.delete = id => {
    const config = {
        method: "DELETE",
        url: jobsService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

jobsService.search = keyword => {
    const config = {
        method: "GET",
        url: `${jobsService.endpoint}?pageIndex=0&pageSize=10&searchTerms=${keyword}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}
export default jobsService;