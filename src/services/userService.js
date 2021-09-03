import axios from 'axios';

const baseUrl = `https://api.remotebootcamp.dev/api/users`

export function create(data) {
    const config = {
        method: "POST",
        data: data,
        url: `${baseUrl}/register`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

    return axios(config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler);
}

export function logIn(data) {
    const config = {
        method: "POST",
        url: `${baseUrl}/login`,
        data: data,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler);
}

const responseSuccessHandler = (response) => {
    return response.data;
};

const responseErrorHandler = (error) => {
    return Promise.reject(error);
};