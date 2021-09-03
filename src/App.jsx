import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import * as userService from "../src/services/userService";
import { Route, /*navLink,*/ withRouter} from "react-router-dom";
import SiteNav from "./Components/SiteNav";
import Register from "./Components/Register";
import Friends from "./Components/Friends";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import FriendForm from "./Components/FriendForm";
import EditFriend from "./Components/EditFriend";
import SiteNavUser from "./Components/SiteNavUser";
import CodingChallenge from "./Components/CodeChallenge";
import * as friendService from "./services/friendService";



import "./App.css";



class App extends Component {

  constructor(props) {
    super(props) 



    this.state = {
      user: {

      },
      friend: {

      }
    }
  }

 
  friendHandler = (e) => {
    let currentTarget = e.currentTarget;
    let id = currentTarget.name;
    let friend = {...this.state.friend};
    
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

        this.setState(() => {

          return {friend};
        })
    }).then(response => {
      this.props.history.push("/editFriend");
    }).catch(error => {
      console.warn(error, "onGetFriendFailure");
    })

  }
 


  componentDidMount() {                            
    console.log("Mounted");
    userService.user().then(response => {
      
      this.setState(() => {
        let user = {...this.state.user};
        user.name = response.data.item.name;
        user.id = response.data.item.id;   
        
        return {user};       
      })
     
    }).then(response => {
      this.props.history.push(`/user/${this.state.user.id}`);
    
    }).catch(error => {            
      console.warn(error);
      this.props.history.push("/login");
    }) 
    
  }    
 
  render() {                                          
    return ( <React.Fragment >                                                                                
      
      
       

      <Route  path="/login" exact={true}>
     <SiteNav   {...this.props} {...this.state} />
     </Route>
     <Route path="/register" exact={true} >
       <SiteNav {...this.props} {...this.state} />
     </Route>
     <Route  path="/user/(\d+)" exact={true} >
       <SiteNavUser {...this.props} {...this.state} />
     </Route>

     <Route  path="/user/undefined" exact={true} >
       <SiteNavUser {...this.props} {...this.state} />
     </Route>       

     <Route path="/addFriends" >
       <FriendForm {...this.state} {...this.props} />
     </Route>
    
      <Route path="/editFriend" >
        <EditFriend {...this.props} {...this.state} />
      </Route>
       
      <Route path="/friends" >
        <Friends action={this.friendHandler} {...this.props} {...this.state} />
      </Route>
       
       
        <Route  path="/register" exact={true} >
          <Register {...this.props} />
        </Route>
      
       
        
       <Route  path="/login" exact={true} >
         <Login  {...this.props} {...this.state} />
         </Route>               
         
         <Route path="/widget" exact={true} >
           <CodingChallenge />
         </Route>
       
         <Footer />
       
        </React.Fragment>         
    );
  }
}    


export default withRouter(App);