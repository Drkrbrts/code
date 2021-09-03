import axios from "axios";

let friendsPost = (payload) =>{
    const config ={
        method: "POST",
        url:"https://api.remotebootcamp.dev/api/friends",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers : {"Content-Type": "application/json"}
    }
    return axios(config)
};

let getFriends = (pageIndex, pageSize)=>{
    const config ={
        method: "GET",
        url:`https://api.remotebootcamp.dev/api/friends?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers : {"Content-Type": "application/json"}

    }
    return axios(config)
}

let putFriends = (id, payload)=>{
    const config ={
        method: "PUT",
        url:"https://api.remotebootcamp.dev/api/friends/" +id,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers : {"Content-Type": "application/json"}    
}
return axios(config)
}
let deleteFriends = (id)=>{
    const config ={
        method: "DELETE",
        url:"https://api.remotebootcamp.dev/api/friends/" + id,
        withCredentials: true,
        crossdomain: true,
        headers : {"Content-Type": "application/json"}    
}
return axios(config)
}


export{friendsPost, getFriends, putFriends, deleteFriends};