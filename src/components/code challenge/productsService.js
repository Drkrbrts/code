import axios from "axios";

var productsService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities",
};

let productReg = (entityName, payload) => {
  const config = {
    method: "POST",
    url: productsService.endpoint + `/${entityName}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then((response) => {
    payload.id = response.data.item;
    return payload;
  });
};

export { productReg };
