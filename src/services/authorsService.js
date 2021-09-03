import axios from "axios";

var authorsService = {
  endpoint: "https://api.remotebootcamp.dev/api/authors",
};

let getAll = () => {
  console.log("getAuthors is executing");
  const config = {
    method: "GET",
    url: authorsService.endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let add = (payload) => {
  console.log("addAuthor is executing", payload);

  const config = {
    method: "POST",
    url: authorsService.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { getAll, add };
