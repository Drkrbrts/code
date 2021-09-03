// var friendsService = {
//     endpoint: "https://api.remotebootcamp.dev/api/friends"
// }

// friendsService.add = (payload) => {
//     const config = {
//         method: "POST",
//         url: friendsService.endpoint,
//         data: payload,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// friendsService.getPaginated = () => {
//     const config = {
//         method: "GET",
//         url: `${friendsService.endpoint}?pageIndex=0&pageSize=10`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// friendsService.delete = (id) => {
//     const config = {
//         method: "DELETE",
//         url: `${friendsService.endpoint}/${id}`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// friendsService.edit = (payload) => {
//     const config = {
//         method: "PUT",
//         url: `${friendsService.endpoint}/${payload.id}`,
//         data: payload,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// friendsService.getById = (id) => {
//     const config = {
//         method: "GET",
//         url: `${friendsService.endpoint}/${id}`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }

// friendsService.search = (pageIndex, pageSize, searchQuery) => {
//     const config = {
//         method: "GET",
//         url: `${friendsService.endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchQuery}`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" }
//     }
//     return axios(config)
// }
