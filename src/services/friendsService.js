import axios from "axios";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination"

let endpoint = "https://api.remotebootcamp.dev/api/friends"

let add =(payload)=>
{
    console.log("adding friend")

    const config = {
        method: "POST",
        url: endpoint,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

    return axios(config);
}

let getFriends = () =>
{

    const config ={
        method: "GET",
        url: `${endpoint}?pageIndex=0&pageSize=2`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

    return axios(config)
        .then((response)=>{
            return response.data.item.pagedItems
        });
}

let update =(payload)=>
{

    const config={
        method: "PUT",
        url: `${endpoint}/${payload.id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

    return axios(config)
}

let toDelete =(id)=>
{

    const config={
        method: "DELETE",
        url: `${endpoint}/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }
    
    return axios(config).then((response)=>response)

}

export {add, getFriends, update, toDelete}