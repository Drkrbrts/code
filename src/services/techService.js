import axios from "axios";

let logIn = () => {

  let payload =
  {
    email: "louiskang27@gmail.com",
    password: "Sabio27!",
    tenantId: "LKSabio27",
  };

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};


let makeTech = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/techcompanies",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let showTech = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/techcompanies?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: TransformStreamDefaultController,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let asdf  = (id) => {
  const config = {
    method: "DELETE",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export { logIn, makeTech, showTech, }; 