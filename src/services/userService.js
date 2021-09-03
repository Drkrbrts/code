import axios from "axios";


let logIn = (payload) => 
{
    const config ={
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/login",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config);
}

let register = (payload) => 
{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/register",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config);
}

let logOut = () =>
{
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/logout",
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config);
}

let getCurrent = () => 
{
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/current",
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config)
}

let getUserById = (id) => 
{
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/" + id,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config)
}

let postFriend = (data) => 
{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/friends",
        data: data,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config)
}

let getPageFriend = () => 
{
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10",
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config)
}


let deleteFriend = (id) =>
{
    const config ={
        method: "DELETE",
        url: "https://api.remotebootcamp.dev/api/friends/" + id,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };

    return axios(config)
}

let updateFriend = (id) =>
{
    const config = {
        method: "PUT",
        url: "https://api.remotebootcamp.dev/api/friends/" + id,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}



export {logIn, register, logOut, getCurrent, getUserById, postFriend, getPageFriend, deleteFriend, updateFriend};