import axios from "axios";

let add = (payload) => {
  console.log("Adding A File....", payload);

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/files",
    data: payload,
  };

  return axios(config);
};

export{add}