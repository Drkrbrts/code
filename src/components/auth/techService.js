import axios from 'axios'

let createTechCo = (payload) => {

    const config = {
        method: 'POST',
        url: 'https://api.remotebootcamp.dev/api/techcompanies',
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getCompanies = (index, size) => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/techcompanies?pageIndex=${index}&pageSize=${size}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config)
}

let getCompany = (id) => {

    const config = {
        method: 'GET',
        url: `https://api.remotebootcamp.dev/api/techcompanies/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: {'Content-Type': "application/json"}
    }

    return axios(config)
}

let updateCo = (payload, id) => {
    
    const config = {
        method: 'PUT',
        url: `https://api.remotebootcamp.dev/api/techcompanies/${id}`,
        data: payload,
        withCredentials: true, 
        crossdomain: true,
        headers: {'Content-Type': 'application/json'}
    }

    return axios(config)
}

export {createTechCo, getCompanies, getCompany, updateCo}