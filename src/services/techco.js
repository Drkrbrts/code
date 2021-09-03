import axios from "axios";

const techCoService = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies"
};
techCoService.add = (payload) => {
    const config = {
        method: "POST",
        url: techCoService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}
techCoService.all = () => {
    const config = {
        method: "GET",
        url: techCoService.endpoint + "?pageIndex=0&pageSize=10",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}
techCoService.edit = (id,payload) => {
    const config = {
        methods: "PUT",
        url: techCoService.endpoint + "/" + id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

techCoService.delete = id => {
    const config = {
        methods: "DELETE",
        url: techCoService.endpoint + "/" + id,
        crossdomain:true,
        headers: { "Content-Type": "application/json"}
    };
    return axios(config)
}

export default techCoService

