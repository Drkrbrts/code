import axios from "axios";

let logIn = (payload) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let loginUser = (payload) =>{

  const config = {
    method: "Post",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  return axios(config);
};


// let register = (payload, onSuccess, onError) => {

//   const config = {
//     method: "_PICK_A_HTPP_METHOD_FOR_THIS_ENDPOINT",
//     url: "_AnOther_URL_GOES_HERE",
//     data: payload,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" }
//   };

//   return axios(config);
// };

let register = (payload) =>{
  const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/register",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    
    return axios(config);
}

//Homepage
var currentInfo = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

var getUser = (id) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/users/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

var userLogout = () => {
  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

//Friends 
var getFriends = (index,size) => {
  const config = {
      method: 'GET',
      url: `https://api.remotebootcamp.dev/api/friends?pageIndex=${index}&pageSize=${size}`,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
  }

  return axios(config);
}

var deletePerson = (id) => {
  const config = {
      method: 'DELETE',
      url: `https://api.remotebootcamp.dev/api/friends/${id}`,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
  }

  return axios(config);
}

var editFriend = (id,payload) => {
  const config = {
      method: 'PUT',
      url: `https://api.remotebootcamp.dev/api/friends/${id}`,
      data: payload, 
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
  }

  return axios(config);
} 

var friendData = (id) => {
  const config = {
      method: 'GET',
      url: `https://api.remotebootcamp.dev/api/friends/${id}`,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
  }

  return axios(config);
}



export { logIn, register, loginUser, currentInfo, getUser, userLogout, getFriends, deletePerson, editFriend, friendData}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }