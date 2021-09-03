import axios from "axios";

var simpleCarsEndpoint = "https://api.remotebootcamp.dev/api/entities/products";

let get = () => {
  const config = {
    method: "GET",
    url: simpleCarsEndpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let add = (payload) => {
  const config = {
    method: "POST",
    url: simpleCarsEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let destroy = (id) => {
  const config = {
    method: "DELETE",
    url: `${simpleCarsEndpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let update = (id, payload) => {
  const config = {
    method: "PUT",
    url: `${simpleCarsEndpoint}/${id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { get, add, destroy, update };
