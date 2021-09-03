import axios from "axios";

const baseURL = "https://api.remotebootcamp.dev/api/entities/products";

let add = (payload) => {
    const config = {
        method: "POST",
        url: baseURL,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
      return axios(config);
};

export { add };