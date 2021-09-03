

import axios from "axios";
  
const endpoint = "https://api.remotebootcamp.dev/api/entities/"

const id = ""
  
  

 const newPost = payload =>{
    const config = {
      method: "POST",
      url: endpoint + "posts",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    
 

    return axios(config)

    
};
  

export {newPost, id}