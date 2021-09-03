import axios from "axios";
axios.defaults.withCredentials = true;
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

const addEntity = (payload, id) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/" + id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { addEntity };

const getEntity = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/entities/widgets",
    //   data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { getEntity };
