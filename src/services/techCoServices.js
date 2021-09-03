import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/techcompanies";

export let getAll = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endPoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let addTechCo = (payload) => {
  const config = {
    method: "POST",
    url: `${endPoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

// export let getJobById = (friendId) => {
//   const config = {
//     method: "GET",
//     url: `${endPoint}/${friendId}`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config);
// };

// export let updateJob = (payload, id) => {
//   const config = {
//     method: "PUT",
//     url: `${endPoint}/${id}`,
//     data: payload,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config);
// };

// export let searchJobs = (pageIndex, pageSize, query) => {
//   const config = {
//     method: "GET",
//     url: `${endPoint}?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config);
// };

// export let deleteJob = (id) => {
//   const config = {
//     method: "DELETE",
//     url: `${endPoint}/${id}`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config)
//     .then(() => id)
//     .catch(responseErrorHandler);
// };

// const responseErrorHandler = (errResponse) => {
//   console.log("responseSuccessHandler", errResponse);
//   return errResponse.data;
// };

export default { getAll, addTechCo };
