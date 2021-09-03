import axios from "axios";

let getUser = (newUserData) => {
  var config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/authors",
    data: JSON.stringify(newUserData),
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.warn(response);
    });
};

export { getUser };
