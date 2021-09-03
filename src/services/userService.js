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

export { logIn, register, logOut, get, getById, getCars }; // export all your calls here

// if you had three functions to export
// export { logIn, register, thirdFunction
