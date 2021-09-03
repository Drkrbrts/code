import axios from "axios";
const endpoint = "https://api.remotebootcamp.dev/api/users";

const login = (creds) => {
  creds.tenantId = "U01BM564A0J";
  // console.log("usersService login firing", creds);
  const config = {
    method: "POST",
    url: `${endpoint}/login`,
    data: creds,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const register = (user) => {
  user.tenantId = "U01BM564A0J";
  console.log("usersService register firing", user);
  const config = {
    method: "POST",
    url: `${endpoint}/register`,
    data: user,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const currentUser = () => {
  // console.log("usersService currentUser firing");
  const config = {
    method: "GET",
    url: `${endpoint}/current`,
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
  console.log("usersService logout firing");
  const config = {
    method: "GET",
    url: `${endpoint}/logout`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};
export { login, register, currentUser, getUserById, logout };
