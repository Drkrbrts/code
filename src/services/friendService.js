import axios from "axios";
//import { data } from "jquery";

let endPoint = "https://api.remotebootcamp.dev/api/friends";

let addFriend = (payload) => {

  const config = {
    method: "POST",
    url: `${endPoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let friends = () => {

    const config = {
        method: "GET",
        url: `${endPoint}?pageIndex=0&pageSize=10`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let deleteFriend = (id) => {

    const config = {
        method: "DELETE",  
        url: `${endPoint}/${id}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let getFriend = (id) => {
    const config = {
        method: "GET",
        url: `${endPoint}/${id}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}

let editFriend = (id, payload) => {
    const config = {
        method: "PUT",
        url: `${endPoint}/${id}`,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config);
}


export { addFriend, friends, deleteFriend, getFriend, editFriend }; 