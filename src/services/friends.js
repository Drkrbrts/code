import axios from "axios";

const friendsService = {
    endpoint: "https://api.remotebootcamp.dev/api/friends"
};

friendsService.add = (payload) => {
    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

friendsService.showAll = () => {
    const config = {
        method: "GET",
        url: friendsService.endpoint + "?pageIndex=0&pageSize=10",
        crossdomain: true,
        headers: { "Conten-Type": "application/json"} 
    };
    return axios(config)
}

export default friendsService;