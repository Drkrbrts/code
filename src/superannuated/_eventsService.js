// var eventsService = {
//   endpoint: "https://api.remotebootcamp.dev/api/events",
// };

// eventsService.add = (payload) => {
//   const config = {
//     method: "POST",
//     withCredentials: true,
//     crossdomain: true,
//     url: eventsService.endpoint,
//     data: payload,
//   };
//   return axios(config);
// };

// eventsService.update = (payload) => {
//   const config = {
//     method: "PUT",
//     withCredentials: true,
//     crossdomain: true,
//     url: `${eventsService.endpoint}/${payload.id}`,
//     data: payload,
//   };
//   return axios(config);
// };

// eventsService.searchByDate = () => {
//   const config = {
//     method: "GET",
//     withCredentials: true,
//     crossdomain: true,
//     url: `${eventsService.endpoint}`, //temp
//   };
//   return axios(config);
// };

// eventsService.searchByGeo = (lat, lng, radiusMiles) => {
//   console.log(lat, lng, radiusMiles);
//   const config = {
//     method: "GET",
//     withCredentials: true,
//     crossdomain: true,
//     url: `${eventsService.endpoint}/search/geo?latitude=${lat}&longitude=${lng}&radius=${radiusMiles}`, //temp
//   };
//   return axios(config);
// };

// eventsService.getPaginatedNotStarted = () => {
//   const config = {
//     withCredentials: true,
//     crossdomain: true,
//     method: "GET",
//     url: `${eventsService.endpoint}/feed?pageIndex=0&pageSize=10`,
//   };
//   return axios(config);
// };

// eventsService.getPaginatedStartingSoon = () => {
//   const config = {
//     method: "GET",
//     withCredentials: true,
//     crossdomain: true,
//     url: `${eventsService.endpoint}/feeds`,
//   };
//   return axios(config);
// };

// //status ID
