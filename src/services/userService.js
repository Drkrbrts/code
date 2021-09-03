import axios from "axios";
  
var userService = {
    endpoint: "https://api.remotebootcamp.dev/api/users"
}

  
  

 userService.currentUser = payload =>{
    const config = {
      method: "GET",
      url: userService.endpoint + "/current",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    return axios(config)
};
 userService.registerUser = payload =>{
    const config = {
      method: "POST",
      url: userService.endpoint + "/register",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    return axios(config)
};
  
userService.login = payload =>{
    const config = {
      method: "POST",
      url: userService.endpoint + "/login",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    
 

    return axios(config)
}

userService.logout = payload =>{
    const config = {
      method: "GET",
      url: userService.endpoint + "/logout",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };


    
 

    return axios(config)

    
};


export {userService}