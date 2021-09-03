import axios from "axios";

let addJobs = (payload) => {
  const config = {
    method: "POST",
    url: "http://localhost:50000/api/jobs",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config).then((response) => {
    console.log(response);
    return { id: response.data.item, ...payload };
  });
};

let editJobs = (id, payload) => {
  const config = {
    method: "PUT",
    url: "http://localhost:50000/api/jobs/" + id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config);
};

let getJobs = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `http://localhost:50000/api/jobs/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config);
};

let searchJobs = (query, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `http://localhost:50000/api/jobs/search?query=${query}&pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config);

  //   .then((response) => {
  //     console.log(response);
  //     return { job: response.data.item.pagedItems };
  //   });
};

let deleteJobs = (id, payload) => {
  const config = {
    method: "PUT",
    url: `https://api.remotebootcamp.dev/api/jobs/${id}/3`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config).then(() => id);
};

export { addJobs, editJobs, getJobs, searchJobs, deleteJobs };
