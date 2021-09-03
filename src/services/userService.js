import axios from "axios";




function products(){
  var payload = { name: "react fly", Manufacturer : "Nike",   Description : "running shoes" , Cost : 50 };
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/products",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};




export { products}