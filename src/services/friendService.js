import axios from 'axios';

const baseUrl = `https://api.remotebootcamp.dev/api/friends`;

export function getAll(page) {
    const config = {
        method: "GET",
        url: `${baseUrl}?pageIndex=${page}&pageSize=3`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

export function remove(id) {
    const config = {
        method: "DELETE",
        url: `${baseUrl}/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

const responseSuccessHandler = (response) => {
    return response.data;
};

const responseErrorHandler = (error) => {
    return Promise.reject(error);
};