import axios from "axios";


let LogIn = () => {
  var payload = {
    "email": "caniglia99@gmail.com",
    "password": "Ac020302!!"
    
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


let Register = (payload) => {
   payload = {
    firstName:"Anthony",
    lastName:"Caniglia",
    email:"caniglia99@gmail.com ",
    password:"Ac020302!!",
    passwordConfirm:"Ac020302!!",
    avatarUrl:"https://gravatar.com/avatar/6b3e683ba0881ab4710bfe985d2a1e34?s=400&d=robohash&r=x"
  
  }
   

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export default Register;

