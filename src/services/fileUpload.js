import axios from "axios"

const fileUploadServices = {
    endpoint: "https://api.remotebootcamp.dev/api/files"
}

fileUploadServices.add = payload => {
    const config = {
        method: "POST",
        url: fileUploadServices.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    };
    return axios(config)
}

export default fileUploadServices;