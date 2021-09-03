import axios from "axios";

const eventsService = {
    endpoint: "https://api.remotebootcamp.dev/api/events"
}

eventsService.add = payload => {
    const config = {
        method: "POST",
        url: eventsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-type": "application/json"}
    }

    return axios(config)
}

eventsService.feed = () => {
    const config = {
        method: "GET",
        url: eventsService.endpoint + "?pageIndex=0&pageSize=10",
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    }

    return axios(config)
}

eventsService.feeds = () => {
    const config = {
        method: "GET",
        url: eventsService.endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    }

    return axios(config)
}

eventsService.update = (id, payload) => {
    const config = {
        method: "PUT",
        url: eventsService.endpoint + "/" + id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    }

    return axios(config)
}

export default eventsService