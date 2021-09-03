import axios from "axios";

let logIn = () => {

    var payload = 
    {
        email: "arevalohenry96@gmail.com" , 
        password: "Sabiopass123!", 
        tenantId: "U024KAPGY5D"
    }

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/login",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  let register = () => {

    var aPayload = {
        firstName: "Henry",
        lastName: "Arevalo",
        email: "arevalohenry96@gmail.com",
        password: "Sabiopass123!",
        passwordConfirm: "Sabiopass123!",
        avatarUrl: "string",
        tenantId: "U024KAPGY5D"
    }

    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/register",
      data: aPayload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  export { logIn, register};
  