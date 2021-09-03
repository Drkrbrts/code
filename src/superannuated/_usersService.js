// var usersService = {
//   endpoint: "https://api.remotebootcamp.dev/api/users",
// };

// usersService.login = (payload) => {
//   const config = {
//     method: "POST",
//     url: `${usersService.endpoint}/login`,
//     data: payload,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

// usersService.logout = () => {
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/logout`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

// usersService.current = () => {
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/current`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

// usersService.getById = (id) => {
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/${id}`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

// usersService.register = (payload) => {
//   const config = {
//     method: "POST",
//     url: `${usersService.endpoint}/register`,
//     data: payload,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };
