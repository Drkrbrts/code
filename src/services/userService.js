import axios from "axios";
  
const endpoint = "https://api.remotebootcamp.dev/api/users/"
  
  

 const logIn = payload =>{
console.log("userService.log is firing...", payload);
    const config = {
      method: "POST",
      url: endpoint + "/login",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };

    
 

    return axios(config)
};
  
export {logIn}