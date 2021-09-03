import React from "react";
import 'rc-pagination/assets/index.css'
import {Route} from "react-router-dom";
import Logout from "./Logout";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";



import HomeButton from "./HomeButton";



class SiteNav extends React.Component {

           
       
                     
                    
 

  clickHandler(e) {                                                                                                                                                                                                                 
    let currentTarget = e.currentTarget;     
    let inputName = currentTarget.name;     
    return inputName;
  }
  
    render() {          
        return <React.Fragment>    
       
            <header className="p-3 bg-dark text-white">
          
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Route path="/" >
                  <HomeButton {...this.props} ></HomeButton>
                </Route>
               
                  <Route path="/user/(\d+)" exact={true} component={Logout} />

                  
                  <Route path="/register" exact={true} component={LoginButton} />
                   <Route path="/login" exact={true} component={RegisterButton} />

              </ul>                                              

              

              
            </div>      
         
        </header>

        
       
        </React.Fragment>
    }
}

export default SiteNav;