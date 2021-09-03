import React from "react";
import AddFriendsButton from "./AddFriendsButton";
import { Route } from "react-router-dom";
import HomeButton from "./HomeButton";
import Logout from "./Logout";
import FriendForm from "./FriendForm";
import Friends from "./Friends";
import FriendsButton from "./FriendsButton";
import EditFriend from "./EditFriend";
import * as friendService from "../services/friendService";





class FriendsNav extends React.Component {

  constructor(props) {
    super(props) 
    this.friendHandler = this.friendHandler.bind(this);
    this.clickState = this.clickState.bind(this);

  this.state = {
    friend: {

    }
  }
  }

  clickState = (e) => {
   this.setState(() => {
    let friend = {...this.state.friend};

    friend.name = "john";
    console.log(friend);
    return {friend};
   })

  }
 

  friendHandler = (e) => {
    let currentTarget = e.currentTarget;
    let id = currentTarget.name;
    let friend = {...this.state.friend};
    this.setState(() => {
      friendService.getFriend(id).then(response => {
        console.log(response, "onGetFriendSuccess");
         
        let newFriend = response.data.item;

        friend.title = newFriend.title;
        friend.bio = newFriend.bio;
        friend.summary = newFriend.summary;
        friend.headline = newFriend.headline;
        friend.slug = newFriend.slug;
        friend.statusId = newFriend.statusId;
        friend.primaryImage = newFriend.primaryImage.imageUrl;
        friend.id = newFriend.id;

        
      }).catch(error => {
        console.warn(error, "onGetFriendFailure");
      })
         
      console.log(friend);
      return {friend};
    })
    this.props.history.push("/editFriend");

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

        <Route path="/friends" exact={true}>
           <Friends action={this.clickHandler} set={this.clickState} {...this.props} {...this.state} ></Friends>
         </Route>

        <Route path="/addFriends" >
          <FriendForm  {...this.state} {...this.props} />
        </Route>

       <Route path="/editFriend" >
         <EditFriend {...this.state} {...this.props} />
       </Route>
                        
        </React.Fragment>
    }
}



export default FriendsNav;