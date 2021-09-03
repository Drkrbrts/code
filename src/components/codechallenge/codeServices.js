import axios from "axios";

var dogToyInput = (dogData) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/dogToys",
    data: dogData,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

var getAllDogs = () => {
  var endpoint = "https://api.remotebootcamp.dev/api/entities/dogToys/";

  const config = {
    method: "GET",
    url: endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

var deleteDog = (id) => {
  var endpoint = `https://api.remotebootcamp.dev/api/entities/dogToys/${id}`;

  const config = {
    method: "delete",
    url: endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config)
    .then(() => {
      return id;
    })
    .catch(function (response) {
      console.error(response);
    });
};

var editDog = (id, payload) => {
  var endpoint = `https://api.remotebootcamp.dev/api/entities/dogToys/${id}`;
  const config = {
    method: "put",
    url: endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config)
    .then(() => {
      return payload;
    })
    .catch(function (response) {
      console.error(response);
    });
};

export { dogToyInput, getAllDogs, deleteDog, editDog };
