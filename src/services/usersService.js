import axios from "axios";

var url="https://api.remotebootcamp.dev/api/users/"

let logIn = (payload) => {

    const config = {
        method: "POST",
        url: url+"logIn",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

let register = (payload) => {
    
    const config = {
        method: "POST",
        url: url+"register",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

export { logIn, register };