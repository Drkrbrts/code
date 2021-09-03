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

export var codeChallegePost = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/entities/codechalleges",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}