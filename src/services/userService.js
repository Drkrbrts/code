import axios from "axios";




function products(){
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/products",
    data: {'Name':this.state.InputName,
           'Manufacturer' :this.state.InputManufacturer, 
           'Description' : this.state.InputDescription,
           'Cost' : this.state.InputCost},
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};




export { products}