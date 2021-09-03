import axios from "axios";


let movies = (payload) => {
    
      
  
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/movies",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
 export  {movies}