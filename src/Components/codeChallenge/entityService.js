import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api/entities/widgets";

//Crud: POST request
const postEntity = (payload) => {
  const config = {
    method: "POST",
    url: endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { postEntity };
