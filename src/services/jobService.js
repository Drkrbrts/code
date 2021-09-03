import axios from "axios";

const jobEndpoint = "https://api.remotebootcamp.dev/api/jobs";

let getAll = () => {

    console.log("Getting All Jobs..........");

    const config = {
        method: "GET",
        url: jobEndpoint + "?pageIndex=0&pageSize=50",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

  return axios(config);

};

let add = (payload) => {
  console.log("Adding Job.....", payload);

  const config = {
    method: "POST",
    url: jobEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};



let update = (id, payload) => {
    console.log("Updating Job.......", id, payload);
    const config = {
      method: "PUT",
      url: jobEndpoint + "/" + id,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
  return axios(config);
  
};

let getById = (id) => {
  console.log("Getting Job By Id.......", id);

  const config = {
    method: "GET",
    url: jobEndpoint + "/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let search = (pageIndex, pageSize, searchTerm) => {
    console.log("Searching Job.......", searchTerm);
    const config = {
      method: "GET",
      url: jobEndpoint + "/search?pageIndex=" + pageIndex + "&pageSize="+ pageSize + "&searchTerm=" + searchTerm,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
  return axios(config);
  
};
  

let getPage = (pageIndex, pageSize) => {
    console.log("Getting Page...........", pageIndex, pageSize);
    const config = {
      method: "GET",
      url: jobEndpoint + "?pageIndex=" + pageIndex + "&pageSize=" + pageSize, 
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
  };
  
  return axios(config);
};
  
export { getAll, add, update, getById, search, getPage };