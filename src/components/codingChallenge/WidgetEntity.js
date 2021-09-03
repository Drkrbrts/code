import axios from "axios";

const widgetService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/products"
};

widgetService.add = (payload) => {
    const config = {
        method: "POST",
        url: widgetService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

export default widgetService;