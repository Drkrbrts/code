import axios from "axios";

const userLogin = (payload) => {
  var config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: JSON.stringify(payload),
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((response) => {
      console.warn(response);
    })
    .finally(() => {
      console.log("axios stuff is done");
    });
};

const getCurrentUser = () => {
  var config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    crossdomain: true,
  };
  return axios(config)
    .then((response) => {
      return response.data.item;
      /*
      this.setState({
        currentUser: response.data.item,
      });
      */
    })
    .catch((response) => {
      console.warn(response);
    });
};

export { userLogin, getCurrentUser };
