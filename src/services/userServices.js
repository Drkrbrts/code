import axios from "axios";


  const userLogin = (payload) => {
    
    
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/login",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config)
      
  };

  
  const userRegister = (payload) => {
    
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/register",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config)
      
  };

  const userEntity = (payload) => {
    
    
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config)
      
  };
  


  export {userLogin,userRegister, userEntity,};