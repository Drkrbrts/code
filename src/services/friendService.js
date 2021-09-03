import axios from "axios";

const friendEndpoint = "https://api.remotebootcamp.dev/api/friends";

let getAll = () => {
    console.log("Getting All Friends........");

    const config = {
        method: "GET",
        url: friendEndpoint + "?pageIndex=0&pageSize=50",
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};


let add = (payload) => {
  console.log("Adding A Friend......", payload);

  const config = {
    method: "POST",
    url: friendEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};


let getById = (friendId) => {
  console.log("Getting Friend Id.....", friendId);

  const config = {
    method: "GET",
    url: friendEndpoint + "/" + friendId,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};



let update = (id, payload) => {
    console.log("Updating Friend........", id, payload);
    const config = {
      method: "PUT",
      url: friendEndpoint + "/" + id,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    return axios(config)
  
};


let search = (pageIndex, pageSize, query) => {
    console.log("Searching For Friend........", query);
    const config = {
      method: "GET",
      url: friendEndpoint + "/search?pageIndex=" + pageIndex +" &pageSize=" + pageSize + "&q=" + query,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    return axios(config)
  
};


let getPage = (pageIndex, pageSize) => {
    console.log("Getting Page.......", pageIndex, pageSize);
    const config = {
      method: "GET",
      url: friendEndpoint + "?pageIndex=" + pageIndex +" &pageSize=" + pageSize,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    return axios(config)
  
};
  


let remove = async (id) => {

    console.log("Deleting Friend...........", id);

    const config = {
      method: "DELETE",
      url: friendEndpoint + "/" + id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
  
    try {
        await axios(config);
        return id;
    } catch (err) {
        console.error(err);
    }
};
  

export { getAll, add, getById, update, search, remove, getPage };