import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api/techcompanies";

const getPaginatedCo = (pageIndex, pageSize) => {
  console.log("getPaginatedCo firing", pageIndex, pageSize);
  const config = {
    method: "GET",
    url: `${endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { getPaginatedCo };
