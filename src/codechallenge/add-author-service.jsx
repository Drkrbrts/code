import axios from "axios";

let addAuthor = (newAuthorData) => {
  var config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/authors",
    data: JSON.stringify(newAuthorData),
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

export { addAuthor };
