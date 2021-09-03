import axios from "axios";


const addShoes = (payload) => {

    const config = {
      method: "POST",
      url: `https://api.remotebootcamp.dev/api/entities/shoes`,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config).then((response) => {
        return{
            id: response.data.item,
            ...payload
        }
    })
  };
export { addShoes };