import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import * as userService from "../src/services/userService";
import { Route, /*navLink,*/ withRouter} from "react-router-dom";
import SiteNav from "./Components/SiteNav";
import Register from "./Components/Register";
import Friends from "./Components/Friends";
import Jobs from "./Components/Jobs";
import Login from "./Components/Login";
import FriendForm from "./Components/FriendForm";
import TechCo from "./Components/TechCo";
import HomePage from "./Components/HomePage";
import JobForm from "./Components/JobForm";
import * as friendService from "./services/friendService";
import * as jobService from "./services/jobService";
import {toast} from "react-toastify";
import TechForm from "./Components/TechForm";
import Events from "./Components/Events";
import EventForm from "./Components/EventForm";
import Cars from "./Components/Cars";


import "./App.css";



class App extends Component {

  constructor(props) {
    super(props) 



    this.state = {
      user: {

      },
      friend: {
        
    }, 
      job: {

      }
    }
  }

  jobReset = () => {
    this.setState(() => {
      let job = {...this.state.job};
      job = {};

      return {job};
    })
    this.props.history.push("/addJob");
  }

  friendReset = () => {
    this.setState(() => {
      let friend = {...this.state.friend};
      friend = {title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      skills: "",
      primaryImage: ""};

      return {friend};
    })
    this.props.history.push("/addFriend");
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
      this.props.history.push(`/friends/${id}`);
    }).catch(error => {
      console.warn(error, "onGetFriendFailure");
    })

  }


 jobHandler = (e) => {
   let currentTarget = e.currentTarget;
   let id = currentTarget.id;
   let job = {...this.state.job};

   

   jobService.getJob(id).then(response => {
     console.log(response, "onGetJobSuccess");
     toast.success("Job Found!");
      let newJob = response.data.item;
      
      job.title = newJob.title;
      job.techCompanyId = newJob.techCompany.id;
      job.description = newJob.description;
      job.summary = newJob.summary;
      job.pay = newJob.pay;
      job.skills = newJob.skills[0].name;
      job.slug = newJob.slug;
      job.statusId = newJob.statusId;
      job.id = newJob.id;

      this.setState(() => {
        return {job};
      })

   }).then(response => {
     this.props.history.push(`/jobs/${id}`);
   }).catch(error => {
     console.warn(error, "onGetJobFailure");
     toast.error("No Job!");
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
       <HomePage {...this.props} {...this.state} />
     </Route>

     <Route  path="/user/undefined" exact={true} >
       <HomePage {...this.props} {...this.state} />
     </Route>       

     <Route path="/addFriend" exact >
       <FriendForm {...this.state} {...this.props} />
     </Route>
     <Route path="/friends/(\d+)" >
       <FriendForm  {...this.state} {...this.props} />
     </Route>
    
      
       
      <Route path="/friends" exact={true} >
        <Friends reset={this.friendReset} action={this.friendHandler} {...this.props} {...this.state} />
      </Route>
       
       <Route path="/jobs" exact={true}>
         <Jobs action={this.jobHandler} reset={this.jobReset} {...this.props} {...this.state} />
       </Route>
        <Route  path="/register" exact={true} >
          <Register {...this.props} />
        </Route>
      
       <Route path="/addJob" exact>
         <JobForm {...this.props} {...this.state} />
       </Route>
       <Route path="/jobs/(\d+)">
         <JobForm {...this.props} {...this.state} />
       </Route>
        
       <Route  path="/login" exact={true} >
         <Login  {...this.props} {...this.state} />
         </Route>               
         
         <Route path="/tech" exact={true}  >
           <TechCo {...this.props} {...this.state} />
         </Route>
         
       <Route path="/addTech" >
         <TechForm {...this.props} {...this.state} />
       </Route>

       <Route path="/events" >
         <Events {...this.props} {...this.state} />
       </Route>

       <Route path="/addEvent" >
         <EventForm {...this.state} {...this.props} />
       </Route>

       <Route path="/cars" >
         <Cars {...this.props} />
       </Route>
         
       
        </React.Fragment>         
    );
  }
}    


export default withRouter(App);