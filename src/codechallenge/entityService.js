import axios from "axios"

var entityService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities"
}

let addEntity = (entityName, payload) => {
    const config = {
        method: "POST",
        url: `${entityService.endpoint}/${entityName}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type":"application/json" }
    }
    return axios(config)
}

export { addEntity }