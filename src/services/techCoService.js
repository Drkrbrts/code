import axios from "axios";

var techService = {
  endpoint: "https://api.remotebootcamp.dev/api/techcompanies",
};

let getForJobs = () => {
  const config = {
    method: "GET",
    url: `${techService.endpoint}?pageIndex=0&pageSize=5`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export default { getForJobs };
