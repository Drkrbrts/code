import React from "react";
import 'rc-pagination/assets/index.css'
import {Route, NavLink} from "react-router-dom";
import Logout from "./Logout";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import WelcomeMessage from "./WelcomeMessage";
import Avatar from "./Avatar";
import FriendsButton from "./FriendsButton";
import HomeButton from "./HomeButton";
import * as userService from "../services/userService";


class SiteNavUser extends React.Component {

  state = {
    user: {
      
    }
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

 

  clickHandler(e) {
    let currentTarget = e.currentTarget;
    let inputName = currentTarget.name;
    return inputName;
  }
  
    render() {          
        return <React.Fragment>
       
            <header className="p-3 bg-dark text-white">
          
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Avatar />

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Route path="/" >
                  <HomeButton {...this.props} ></HomeButton>
                </Route>
               <Route path="/" component={FriendsButton} />
                <li>
                  <button                                                               
                    href="#"          
                    className="nav-link px-2 text-white link-button"
                  >
                    Blogs
                  </button>
                </li>
                <li>       
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Tech Co.
                  </button>
                </li>
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
                  <Route path="/user/(\d+)" exact={true} component={Logout} />

                  
                  <Route path="/register" exact={true} component={LoginButton} />
                   <Route path="/login" exact={true} component={RegisterButton} />

                   <li>
                       <NavLink to="/widget" >Widget</NavLink>
                   </li>

              </ul>                                              

              

              
            </div>      
         
        </header>

        <Route  path="/user/(\d+)" >
         <WelcomeMessage {...this.props} {...this.state} />
       </Route>
       
        </React.Fragment>
    }
}

export default SiteNavUser;