import axios from "axios";

let logIn = () => {
  var payload = {
    firstName: "Testing",
    lastName: "Example",
    email: "register@example.com",
    password: "Password1!",
    passwordConfirm: "Password1!",
    avatarUrl:
      "https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png",
    tenantId: "",
  };
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCrentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { logIn };
