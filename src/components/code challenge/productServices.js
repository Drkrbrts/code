import axios from "axios";


var baseUrl= "https://api.remotebootcamp.dev/api/entities";

let createProduct = (payload) => {

    const config = {
        method: "POST",
        url: baseUrl + "/products",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    };
    return axios(config);
}

export {createProduct};