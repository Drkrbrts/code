import axios from "axios";

let logIn = () => {

    var payload = { 
        email: "cweasley@yahoo.com", 
        password: "Password1!", 
        tenantId:"sabio" };

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
        
            firstName: "Carl",
            lastName: "Weasley",
            email: "cweasley@yahoo.com",
            password: "Password1!",
            passwordConfirm: "Password1!",
            avatarUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
            tenantId: "sabio"
          };
    

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