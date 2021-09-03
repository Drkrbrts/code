import axios from "axios";


let endpoint = "https://api.remotebootcamp.dev/api/users"

let logIn = (payload) =>
{
    // console.log("logIn api");

    const config = {
        method: "POST",
        url: `${endpoint}/login`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    }

    return axios(config).then(()=> payload);
}

let register =(payload)=>
{
    // console.log("registration api");

    const config = {
        method: "POST",
        url: `${endpoint}/register`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        header: { "Content-Type": "application/json" }
    };

    return axios(config)
        .then((response)=> payload);

};

let currentUser =()=>
{
    // console.log("current user api");

    const config ={
        method: "GET",
        url: `${endpoint}/current`,
        withCredentials: true,
        crossdomain: true,
        header: { "Content-Type": "application/json" }
    }

    return axios(config).then((response) => response.data.item )
}

let logOut =()=>
{
    console.log("logging out")

    const config ={
        method: "GET",
        url: `${endpoint}/logout`,
        withCredentials: true,
        crossdomain: true,
        header: { "Content-Type": "application/json" }
    }

    return axios(config);
}

export {logIn, register, currentUser, logOut};
