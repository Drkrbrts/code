import axios from "axios";

let add = (payload) => {

    console.log("add is executing");

    payload = {
        title: payload.title,
        bio: payload.bio,
        summary: payload.summary,
        headline: payload.headline,
        slug: payload.slug,
        statusId: payload.statusId,
        primaryImage: payload.primaryImage
    };

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/friends",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config);
}

/*************************************************************************************************/

let getPaginated = (pageIndex,pageSize) => {

    console.log("getPaginated is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/friends?pageIndex=" + pageIndex + "&pageSize=" + pageSize,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

let update = (id, payload) => {
    
    console.log("update Friend is executing");

    payload = {
        title: payload.title,
        bio: payload.bio,
        summary: payload.summary,
        headline: payload.headline,
        slug: payload.slug,
        statusId: payload.statusId,
        primaryImage: payload.primaryImage
    };

    const config = {
        method: "PUT",
        url: "https://api.remotebootcamp.dev/api/friends/" + id,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

let getById = (id) => {

    console.log("get(Friend)ById is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/friends/" + id,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

let deleteFriend = (id) => {

    console.log("deleteFriend is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/friends/" + id,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

let searchFriend = (pageIndex, pageSize, q) => {

    console.log("searchFriend is executing");

    const config = {
        method:"GET",
        url: "https://api.remotebootcamp.dev/api/friends/search?pageIndex=" + pageIndex + "&pageSize=" + pageSize + "&q=" + q,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

let updateIdStatus = (id, statusId) => {

    console.log("update friend statusId is executing");

    const config = {
        method: "PUT",
        url: "https://api.remotebootcamp.dev/api/friends/" + id + "/" + statusId,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

let getBySlug = (slug) => {

    console.log("getBySlug is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/friends/" + slug,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

/*************************************************************************************************/

export {add, getPaginated, update, getById, deleteFriend, searchFriend, updateIdStatus, getBySlug};