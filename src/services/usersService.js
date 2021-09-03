import axios from "axios";
const endpoint = "https://localhost:50001/api/users/";

const login = (creds) => {
  //console.log("usersService login firing", creds);
  const config = {
    method: "POST",
    url: `${endpoint}login`,
    data: creds,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const register = (user) => {
  user.tenantId = "U01BM564A0J";
  user.roles = ["User"];
  console.log("usersService register firing", user);
  const config = {
    method: "POST",
    url: `${endpoint}register`,
    data: user,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const currentUser = () => {
  // console.log("usersService currentUser firing");
  const config = {
    method: "GET",
    url: `${endpoint}current`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getUserById = (userId) => {
  // console.log("usersService getUserById firing", userId);
  const config = {
    method: "GET",
    url: `${endpoint}/${userId}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const logout = () => {
  //console.log("usersService logout firing");
  const config = {
    method: "GET",
    url: `${endpoint}logout`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const confirmUser = (email) => {
  //console.log("UsersService confirmUser firing", email);
  const config = {
    method: "GET",
    url: `${endpoint}confirm/${email}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const resetPassword = (payload) => {
  //console.log("usersService resetPassword firing", payload);
  const config = {
    method: "PUT",
    url: `${endpoint}resetpassword`,
    data: payload,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export {
  login,
  register,
  currentUser,
  getUserById,
  logout,
  confirmUser,
  resetPassword,
};
