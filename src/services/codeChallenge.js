import axios from "axios";
let entity = "https://api.remotebootcamp.dev/api/entities";

let addProduct = (payload) => {
  const config = {
    method: "POST",
    url: entity + "/products",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { addProduct };
