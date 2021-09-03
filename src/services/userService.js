import axios from "axios";
// import "./peopleService";

let logIn = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
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

let register = (payload, onSuccess, onError) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
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

let logOut = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };

  return axios(config);
};

let get = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };

  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };

  return axios(config);
};

let getFriends = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=6",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config).then((response) => {
    console.log(response);
    return { friends: response.data.item.pagedItems };
  });
};

let addFriends = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
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
    url: "https://api.remotebootcamp.dev/api/friends/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };
  return axios(config).then((response) => {
    console.log(response);
    return { id };
  });
};

let editFriends = (id, payload) => {
  const config = {
    method: "PUT",
    url: "https://api.remotebootcamp.dev/api/friends/" + id,
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

let getCars = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/cars",
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

export {
  logIn,
  register,
  logOut,
  get,
  getById,
  getFriends,
  getCars,
  addFriends,
  deleteFriends,
  editFriends,
}; // export all your calls here

// if you had three functions to export
// export { logIn, register, thirdFunction
