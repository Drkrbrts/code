import React from "react";
import * as friendService from "../services/friendService";
import FriendZone from "./FriendZone";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import AddFriendsButton from "./AddFriendsButton";
import Logout from "./Logout";
import {Route} from "react-router-dom";



class Friends extends React.Component {

    state = {
        friends: []
    }

    componentDidMount() {                    

        friendService.friends().then(response => {
            let pages = response.data.item.pagedItems;
            console.log(pages, "onGetFriendsSuccess");

            this.setState(() => {
                let friends = {...this.state.friends};

               friends =  pages;
               console.log(friends);

                return {friends};           

            })       
            
        }).catch(error => {      
            console.warn(error, "onGetFriendsFailure");
        })


    }

    deleteFriend = (e) => {     
        let currentTarget = e.currentTarget;       
        let id = currentTarget.id;
        console.log(id);
        friendService.deleteFriend(id).then(response => {
            console.log(response, "onDeleteFriendSuccess");
            
            this.setState(() => {
                let newFriends = {...this.state.friends};
              
                let friends = [];     

                for (let key in newFriends) {
                    id = parseInt(id);
                    newFriends[key].id = parseInt(newFriends[key].id);
                    
                    if (newFriends[key].id !== id) {

                        friends.push(newFriends[key]);
                    }
                    
                }
                
               
            
               return {friends};    
                
            })

        }).catch(error => {
            console.warn(error, "onDeleteFriendFailure");
        }) 
    }

    friendMap = (friend) => {                                     
     
        return (      

            <div key={`Friends-${friend.bio}`} id={friend.slug} className="card" style={{width:  "18rem", float: "left", padding: "20px"}}>
                <img src={friend.primaryImage.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{friend.title}</h5>
                  <p className="card-text">{friend.summary}</p>

                  <button id={friend.id} onClick={this.deleteFriend} type="button" className="btn btn-danger" style={{margin: "5px", bottom: "0"}}>Delete</button>
                  <button name={friend.id} onClick={this.props.action}   type="button" className="btn btn-info" style={{margin: "5px", bottom: "0"}}>Edit</button>
                  
                </div>
                </div>

        )

    }

    
    render() {

        return <React.Fragment>

<header style={{backgroundColor: "steelBlue"}} className="p-3  text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
             <Route path="/" >
                 <HomeButton {...this.props} ></HomeButton>
             </Route>
             
              <Route path="/addFriends" >
                <FriendsButton {...this.props} />
              </Route>
              <Route path="/editFriend" >
                <FriendsButton {...this.props} />
              </Route>

              <Route path="/friends" component={AddFriendsButton} />
              
              <li>
                <button    
                  href="#"           
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </button>                    
              </li>      
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Events
                </button>
              </li>
              <Logout {...this.props} />
            </ul>                                              
          </div>      
        
      </header>

                    
                        <FriendZone  friends={this.state.friends.map(this.friendMap)}   />
                  


        </React.Fragment>
    }
}



export default Friends;