import axios from "axios";


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

let getFriends = (pageIndex, pageSize) =>
{

    const config ={
        method: "GET",
        url: `${endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

    return axios(config)
        .then((response)=>{
            return response.data
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
    
    return axios(config).then((response)=>{
        return{response: response, id: id}
    });

}

let search =(pageIndex, pageSize, query)=>
{
    const config={
    method: "GET",
    url: `${endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: {"Content-Type": "application/json"}
    }

    return axios(config).then((response)=>response.data.item.pagedItems[0]);
}

let getById =(id)=>{

    const config={
        method: "GET",
        url: `${endpoint}/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }
    
    return axios(config)
}

export {add, getFriends, update, toDelete, search, getById}