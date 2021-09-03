import axios from "axios";
import { onGlobalError, } from "../services/serviceHelper"

let addFriend = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/friends",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
    return axios(config);
  };

  let editFriend = (payload) => {

    const config = {
      method: "PUT",
      url: "https://api.remotebootcamp.dev/api/friends/25445",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
    
      return axios(config);
    };


      let deleteFriend = (friend) => {
        const config = {
          method: "DELETE",
          url: `https://api.remotebootcamp.dev/api/friends/${friend.id}`,
          withCredentials: true,
          crossdomain: true,
          headers: { "Content-Type": "application/json" }
        };
        return axios(config).then(() => friend).catch(onGlobalError)
      };
    

    
      let getAllFriends = () => {

        const config = {
          method: "GET",
          url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10",
          withCredentials: true,
          crossdomain: true,
          headers: { "Content-Type": "application/json" }
        };
        
          return axios(config);
        };

        let searchFriend = () => {

          const config = {
            method: "GET",
            url: "https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=10&q=theo",
            withCredentials: true,
            crossdomain: true,
            headers: { "Content-Type": "application/json" }
          };
          
            return axios(config);
          };






export { addFriend, editFriend, deleteFriend, getAllFriends, searchFriend }; 
