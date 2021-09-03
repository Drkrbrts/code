import axios from "axios"

export var onLoginPost = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/login",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
          return axios(config)
}

export var onRegisterPost = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/register",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}

export var amILoggedIn = () =>{
    return axios('https://api.remotebootcamp.dev/api/users/current')
}

export var loggingOutGet =  () =>{
    return axios('https://api.remotebootcamp.dev/api/users/logout')
}

export var postFriendFormData = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/friends",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}
export var getMyFriends = () =>{
    return axios('https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10')
}
export var deleteThePerson = (id) =>{
    const config = {
        method: "DELETE",
        url: `https://api.remotebootcamp.dev/api/friends/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
}
export var putEditThePerson = (payload,id) =>{
    const config = {
        method: "PUT",
        url: `https://api.remotebootcamp.dev/api/friends/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config)
}
export var getPersonById = (id) =>{
    return axios(`https://api.remotebootcamp.dev/api/friends/${id}`)
}
export var postNewJob = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/jobs",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}
export var postJobUpdate = (payload,id) =>{
    const config = {
        method: "POST",
        url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}
export var getAllCompanies = () =>{
    return axios("https://api.remotebootcamp.dev/api/techcompanies?pageIndex=0&pageSize=5")
}
export var getAllJobs = (searchValue) =>{
    return axios(`https://api.remotebootcamp.dev/api/jobs/search?pageIndex=0&pageSize=4&searchTerm=${searchValue}`)
}
export var getTheOneJob = (id) =>{
    return axios(`https://api.remotebootcamp.dev/api/jobs/${id}`)
}
export var postNewTechCompany = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/techcompanies",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}
export var postUdateTechCompany = (payload,id) =>{
    const config = {
        method: "POST",
        url: `https://api.remotebootcamp.dev/api/techcompanies/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}
export var getTheOneTechCompany = (id) =>{
    return axios(`https://api.remotebootcamp.dev/api/techcompanies/${id}`)
}
export var getAllEvents = () =>{
    return axios("https://api.remotebootcamp.dev/api/events/search?pageIndex=0&pageSize=6&dateStart=2021-09-01T19%3A56%3A26.598Z&dateEnd=2031-09-01T19%3A56%3A26.598Z")
}

export var postEvent = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/events",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}
export var postUpdateEvent = (payload,id) =>{
    const config = {
        method: "PUT",
        url: `https://api.remotebootcamp.dev/api/events/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}