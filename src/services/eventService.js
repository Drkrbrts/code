import axios from "axios";

const eventEndpoint = "https://api.remotebootcamp.dev/api/events";

const getAll = (pageIndex, pageSize) => {
    console.log("retrieving events...");

    const config = {
        method: "GET",
        url: eventEndpoint + "/feed?pageIndex=" + pageIndex + "&pageSize=" + pageSize,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
};

const add = payload => {
    console.log("adding new event...");

    const config = {
        method: "POST",
        url: eventEndpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
};

const update = (id, payload) => {
    console.log("updating event...");

    const config = {
        method: "PUT",
        url: eventEndpoint + "/" + id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
};

const search = (pageIndex, pageSize, dateStart, dateEnd) => {
    console.log("searching events...");

    const config = {
        method: "GET",
        url: eventEndpoint + "/" + "search?pageIndex=" + pageIndex + "&pageSize=" + pageSize + "&dateStart=" + dateStart + "&dateEnd=" + dateEnd,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
};

export {getAll, add, update, search};