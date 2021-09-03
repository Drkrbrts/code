import axios from "axios";
axios.defaults.withCredentials = true;
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.withCredentials = true;
  return config;
});

const addFriend = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { addFriend };

const getAllFriends = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url:
      "https://api.remotebootcamp.dev/api/friends?pageIndex=" +
      pageIndex +
      "&pageSize=" +
      pageSize,
    // data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { getAllFriends };

const deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: "https://api.remotebootcamp.dev/api/friends/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { deleteFriend };

const editFriend = (payload, id) => {
  const config = {
    method: "PUT",
    url: "https://api.remotebootcamp.dev/api/friends/" + id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { editFriend };
