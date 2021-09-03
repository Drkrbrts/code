import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api/entities/products";

const addProduct = (product) => {
  console.log("carsService addProduct firing", product);
  const config = {
    method: "POST",
    url: endpoint,
    data: product,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((response) => {
    return {
      id: response.data.item,
      ...product,
    };
  });
};

export { addProduct };
