import axios from "axios"

let friendCreate = (payload) => {

    const config = {
      method: "POST", 
      url: "https://api.remotebootcamp.dev/api/friends",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: {"Content-type": "application/json"}
    }

    return axios(config)

  }

  let friendDelete = (id) => {
    const config = {
      method: "DELETE",
      url: "https://api.remotebootcamp.dev/api/friends/"+ `${id}`,
      data: id,
      withCredentials: true,
      crossdomain: true,
      headers: {"Content-type": "application/json"}
    }
    return axios(config)
  }

  let friendGetAll = () => {

    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10",
      withCredentials: true,
      crossdomain: true,
      headers: {"Content-type": "application/json"}
    }
    return axios(config)
  }

  let searchFriend = (payload) => {
    const config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=10&q=`+`${payload}`, 
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: {"Content-type": "application/json"}
    }
    return axios(config)
  }
let editFriend = (payload, id) => {
  const config ={
    method: "PUT",
    url: "https://api.remotebootcamp.dev/api/friends/"+ `${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {"Content-type": "application/json"}
  }
  return axios(config)
}
  export {friendCreate, friendDelete, friendGetAll, searchFriend, editFriend}