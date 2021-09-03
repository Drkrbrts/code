import axios from "axios"

let addFriend = payload => {

    const config = {
        method: 'POST', 
        url: 'https://api.remotebootcamp.dev/api/friends',
        data: payload,
        withCredentials: true,
        crossdomain: true, 
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getFriends = (pageIndex, pageSize) => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/friends?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true, 
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getById = id => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/friends/${id}`,
        withCredentials: true, 
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let deleteFriend = friendId => {

    const config = {
        method: 'DELETE',
        url: `https://api.remotebootcamp.dev/api/friends/${friendId}`,
        withCredentials: true,
        crossdomain: true, 
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let updateFriend = payload => {

    const config = {
        method: 'PUT',
        url: `https://api.remotebootcamp.dev/api/friends/${payload.id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {'Content-Type': 'application/json'}
    }

    return axios(config)
}

export { addFriend, getFriends, deleteFriend, getById, updateFriend }