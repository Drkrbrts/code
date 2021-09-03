import axios from "axios";

let addEntity = (payload) => {

    console.log("addEntity is executing");

    payload = {
        name: payload.name,
        manufacturer: payload.manufacturer,
        description: payload.description,
        cost: payload.cost,
    };

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/entities/computers",
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);

}

let getEntity = (entityName) => {

    console.log("get Entity is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/entities/" + entityName,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

let getById = (id) => {

    console.log("get(Friend)ById is executing");

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/computers/" + id,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

export { getEntity, addEntity, getById };