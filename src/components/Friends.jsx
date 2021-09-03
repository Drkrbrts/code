import React, {Component} from "react"; 
import * as friendService from "../services/friendService";
import Friend from "../components/Friend";

class Friends extends Component {
//parent component 

    state = {
        friends: [
            {
              title: "", 
              bio: "", 
              summary: "", 
              headline: "", 
              slug: "", 
              statusId: "", 
              primaryImage: "https://static.wixstatic.com/media/93af8b_b34bd4ae7e264c62bd07483b6b396b2f~mv2.png/v1/fill/w_1286,h_830,fp_0.50_0.50,q_90/93af8b_b34bd4ae7e264c62bd07483b6b396b2f~mv2.webp", 
            }
        ], 
        mappedFriends: []
    }; 
    

    componentDidMount() {

        friendService.getAllFriends()
          .then(this.onGetAllFriendsSuccess)
          .catch(this.onGetAllFriendsError)

    }


    onGetAllFriendsSuccess = (response) => {
        console.log("onGetAllFriendsSuccess", response);

        let friendsArray = response.data.item.pagedItems.map(this.mapFriends)
        console.log("friendsArray", friendsArray);

        this.setState((prevState)=>{
            return {
              friendsArray
            }
        })
    }
    //create a function that returns that child component 
    //returning template of friends list 
    //then, map array of objects to render list 


    onGetAllFriendsError = (error) => {
        console.error("onGetAllFriendsError", error);
    }


    mapFriends = (oneFriend) => {
        return (
          <div key={`Friend-${oneFriend.id}`}>
          <Friend
            friend={oneFriend}
            editClicked={this.onEditClicked}
            deleteClicked={this.onDeleteClicked}
          />
          </div>
        );
      };




    onEditClicked = (e) => {
      // e.preventDefault(); 
      console.log("onEditClicked", "button firing from Friends.jsx");

      friendService.editFriend(this.state)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditFriendError)
    }

    onEditFriendSuccess = (response) => {
      console.log("onEditFriendSuccess", response)
    }


    onEditFriendError = (err) => {
      console.error(err);
    }




    


    onDeleteClicked = (oneFriendId) => {

      console.log("onDeleteClicked", "button firing from Friends.jsx");

      friendService.deleteFriend(oneFriendId)
        .then(this.onDeleteFriendSuccess)
        .catch(this.onDeleteFriendError);
    };
  

    onDeleteFriendSuccess = (response) => {
      console.log("onDeleteFriendSuccess", response);
    }

    onDeleteFriendError = (error) => {
      console.error(error);
    }




    render() {
        return(
            <div>
              {this.state.friends.map(this.mapFriends)}
            </div>
        ); 
    }
}

export default Friends; 