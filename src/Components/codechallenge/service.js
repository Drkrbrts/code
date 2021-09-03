import axios from "axios";
  
const endpoint = "https://api.remotebootcamp.dev/api/entities/"
  
  
 const widgetInfo = payload =>{
    const config = {
      method: "POST",
      url: endpoint + "/Cars",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    
 
    return axios(config)
}; 

export {widgetInfo}