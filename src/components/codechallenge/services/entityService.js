import axios from "axios";

console.log("Entity service executing");

const config = {
    method: `POST`,
    url: "https://api.remotebootcamp.dev/api/entities/{challengeExample}",
    data: payLoad,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
};

return axios(config);