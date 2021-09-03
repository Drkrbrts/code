import axios from "axios";

let endPoint = "https://api.remotebootcamp.dev/api/events";

export let getPaginated = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endPoint}/feed?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export let newEvent = (payload) => {
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

// export let deleteJob = (id) => {
//   const config = {
//     method: "PUT",
//     url: `${endPoint}/${id}/2`,
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

export default {
  getPaginated,
  newEvent,
};
