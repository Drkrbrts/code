import axios from 'axios'


let createEvent = payload => {

    const config = {

        method: "Post",
        url: 'https://api.remotebootcamp.dev/api/events',
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {'Content-Type': "application/json"}
    }

    return axios(config)
}

let getFeed = (index, size) => {

    const config = {
        method: "GET",
        url: `https://api.remotebootcamp.dev/api/events/feed?pageIndex=${index}&pageSize=${size}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getFeeds = () => {

    const config = {
        method: "GET",
        url: 'https://api.remotebootcamp.dev/api/events/feeds',
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getBySlug = (slug) => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/events/${slug}`,
        withCredentials: true,
        crossdomain: true,
        headers: {'Content-Type': "application/json"}
    }

    return axios(config)
}


export {createEvent, getFeed, getFeeds, getBySlug}