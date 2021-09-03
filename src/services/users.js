import axios from "axios";

const userService = {
    endpoint: "https://api.remotebootcamp.dev/api/users"
};
userService.register = (payload) => {
    const config = {
        method: "POST",
        url: userService.endpoint + "/register",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}
userService.login = payload => {
    const config = {
        method: "POST",
        url: userService.endpoint + "/login",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

userService.current = () => {
    const config = {
        method: "GET",
        url: userService.endpoint + "/current",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

userService.userById = (id) => {
    const config = {
        method: "GET",
        url: userService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

userService.logout = () => {
    const config = {
        method: "GET",
        url: userService.endpoint + "/logout",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

export default userService;