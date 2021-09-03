var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

usersService.register = (user) => {
  console.log("USER REGISTER");

  const config = {
    method: "POST",
    url: `${usersService.endpoint}/register`,
    data: user,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then((response) => {
    return {
      id: response.data.item,
      ...user,
    };
  });
};

usersService.login = (user) => {
  console.log("users service login firing", user);

  const config = {
    method: "POST",
    url: `${usersService.endpoint}/login`,
    data: user,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
