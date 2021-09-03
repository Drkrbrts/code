import axios from "axios";
  
const endpoint = "https://api.remotebootcamp.dev/api/users/"
  
  

 const registerUser = payload =>{
    const config = {
      method: "POST",
      url: endpoint + "/register",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    
 

    return axios(config)

    
};
  

export {registerUser}
