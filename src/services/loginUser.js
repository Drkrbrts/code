import axios from "axios";
  
const endpoint = "https://api.remotebootcamp.dev/api/users/"
  
  

 const newLogin = payload =>{
    const config = {
      method: "POST",
      url: endpoint + "/login",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    
 

    return axios(config)

    
};
  

export {newLogin}