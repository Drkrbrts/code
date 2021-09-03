// var techCompaniesService = {
//     endpoint: "https://api.remotebootcamp.dev/api/techcompanies"
// }

// techCompaniesService.getPaginated = () => {
//     const config = {
//         method: "GET",
//         url: `${techCompaniesService.endpoint}?pageIndex=0&pageSize=10`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// techCompaniesService.add = (payload) => {
//     const config = {
//         method: "POST",
//         url: techCompaniesService.endpoint,
//         data: payload,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// techCompaniesService.update = (payload) => {
//     const config = {
//         method: "PUT",
//         url: `${techCompaniesService.endpoint}/${[payload.id]}`,
//         data: payload,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// techCompaniesService.getById = (id) => {
//     const config = {
//         method:"GET",
//         url: `${techCompaniesService.endpoint}/${id}`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config);
// }
