import axios from 'axios';

const baseUrl = `https://api.remotebootcamp.dev/api/entities/`

export function create(data) {
    const config = {
        method: "POST",
        data: data,
        url: `${baseUrl}/${data.name}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

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