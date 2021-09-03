import axios from "axios";

let friendService = {endpoint: "https://api.remotebootcamp.dev/api/friends"}

let addFriend = (payload) => {
 //================================= adds friend from the form function
  
  const config = {
    method: `POST`,
    url: friendService.endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
  .then((response) => {
    return{
        id: response.data.item.pagedItems,
        ...payload
       
    }
});
};

//================================ returns a list of friends once added with forms

let getAllFriends = () => {
 
  
  const config = {
    method: `GET`,
    url: `${friendService.endpoint}?pageIndex=0&pageSize=10`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


//=========================================== deletes friend 
//=============================== should only delete single friend, not all friends

let deleteFriend=(id)=>{
    const config = {
        method: `DELETE`,
        url: `${friendService.endpoint}/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);

}

let editFriend = (payload) => {
  console.log("addFriend service executing");

  const config = {
    method: `PUT`,
    url: `${friendService.endpoint}/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then((response) =>{
    return payload
  });
};

export { addFriend, getAllFriends, deleteFriend, editFriend };