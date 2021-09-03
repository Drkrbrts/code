import axios from "axios";

let getFriends = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `http://localhost:50000/api/friends/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config);
};

let addFriends = (payload) => {
  const config = {
    method: "POST",
    url: "http://localhost:50000/api/friends",
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
    return { friend: response.data.item, ...payload };
  });
};

let deleteFriends = (id) => {
  const config = {
    method: "DELETE",
    url: "http://localhost:50000/api/friends/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config).then(() => id);
};

let editFriends = (id, payload) => {
  const config = {
    method: "PUT",
    url: "http://localhost:50000/api/friends/" + id,
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

let searchFriend = (query, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `http://localhost:50000/api/friends/search?query=${query}&pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config);
};

export { getFriends, addFriends, deleteFriends, editFriends, searchFriend };
