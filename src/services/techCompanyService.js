import axios from "axios"

var techCompanyService = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies"
}

let getTechCompanies = (pageIndex, pageSize) => {
    const config = {
        method: "GET",
        url: `${techCompanyService.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type":"application/json" }
    }

    return axios(config)
}

let addTechCompany = (payload) => {
    const config = {
        method: "POST",
        url: `${techCompanyService.endpoint}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type":"application/json" },
    }

    return axios(config)
}

export { getTechCompanies, addTechCompany }