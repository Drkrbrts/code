import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/techcompanies";

let addCompany = (payload) => {
    let config = {
        method: "POST",
        url: endPoint,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let getCompanies = () => {
    let config = {
        method: "GET", 
        url: `${endPoint}?pageIndex=0&pageSize=10`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}







export { addCompany, getCompanies };