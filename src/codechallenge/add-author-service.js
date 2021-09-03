import axios from "axios";

export const addAuthor = (newAuthorData) => {
  const config = {
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
