import React from "react";
import {Route} from "react-router-dom";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import JobsButton from "./JobsButton";
import Logout from "./Logout";


class Events extends React.Component {

    

    




    addEvent = () => {                      
        this.props.history.push("/addEvent");
    }

    render() {                                                                                                                                                                       


        return <React.Fragment>
                    <header className="p-3 bg-info bg-gradient text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Route path="/" >
                <HomeButton {...this.props} ></HomeButton>
              </Route>
              <li>
                <button onClick={this.addEvent} className="nav-link px-2 text-white link-button">
                  <strong>Event+</strong>
                </button>
              </li>
             <Route path="/" component={FriendsButton} />
              <li>
                <button                                                               
                  href="#"          
                  className="nav-link px-2 text-white link-button"
                >
                  Blogs
                </button>
              </li>
              
              <Route path="/" component={JobsButton} />   
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Events
                </button>
              </li>
                <Route path="/"  component={Logout} />

            </ul>                                              
          </div>  

      </header> 

            

        </React.Fragment>
    }
}








export default Events;