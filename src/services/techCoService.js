import axios from "axios";

let getTechCo = () => {
  
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/techcompanies?pageIndex=0&pageSize=5",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  
  };

let addTechCo = (payload) => {

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/techcompanies",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);

}

let editTechCo = (payload) => {

    const config = {
        method: "PUT",
        url: "https://api.remotebootcamp.dev/api/techcompanies" + payload.id,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);
}

export { getTechCo, addTechCo, editTechCo };