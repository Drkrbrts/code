import axios from "axios";

var baseUrl= "https://api.remotebootcamp.dev/api/users";

let logIn = (payload) => {

    const config = {
        method: "POST",
        url: baseUrl + "/login",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    };
    return axios(config);
}

let register = (payload) => {

    const config = {
        method: "POST",
        url: baseUrl + "/register",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

export {logIn, register};