import axios from "axios";

const endpoint ="https://api.remotebootcamp.dev/api/friends";

let friends = () => {
    const config ={
        method:"GET",
        url: endpoint +"?pageIndex=0&pageSize=5",
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config);
};

let addfriend = (payload) => {
    const config ={
        method:"POST",
        url: endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config);
};

let deletefriend = (payload) => {
    const config ={
        method:"DELETE",
        url: endpoint + "{userId}",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config);
};

let update = (payload) => {
    const config ={
        method:"PUT",
        url: endpoint + "{userId}",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config);
};

let updateStatusId = (payload) => {
    const config ={
        method:"PUT",
        url: endpoint + "{userId}"/"{statusId}",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config);
};


export {friends, addfriend, deletefriend, update, updateStatusId};