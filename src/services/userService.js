import axios from "axios";
import debug from "sabio-debug";
const _logger = debug.extend("userService");

const baseUrl = `https://api.remotebootcamp.dev/api/entities/products`;

export function products(data){

  _logger("Post called");
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/products",
    data: data,
    withCredentials: true,
    crossdomain: true,
    headers: { 
      "Content-Type": "application/json",
    "SABIO-AUTH": "sabio-internal-00", 
  },
  };

  return axios(config).then(responseSuccessHandler).catch(responseErrorHandler);
};


export function getAll() {
  _logger("getAll called");

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/entities/products",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };

  return axios(config).then(responseSuccessHandler).catch(responseErrorHandler);
}


export function update(data) {
  _logger("update called");
  const config = {
    method: "PUT",
    data: data,
    url: `${baseUrl}/${data.id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00",
    },
  };

  return axios(config).then(responseSuccessHandler).catch(responseErrorHandler);
}

const responseSuccessHandler = (response) => {
  _logger("responseSuccessHandler", response);
  //return { data: response.data, status: response.status };
  return response.data;
};

const responseErrorHandler = (error) => {
  _logger("responseErrorHandler", error);
  return Promise.reject(error);
};



