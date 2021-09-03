import axios from "axios"


var postWidget = (payload) => {

    console.log(payload)

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/entities/Widgets",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
};


export {postWidget}