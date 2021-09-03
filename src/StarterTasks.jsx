import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";
import NavBar from "./taskComponents/NavBar"
import Login from "./taskComponents/Login";
import Register from "./taskComponents/Register";
class StarterTasks extends Component {

    state = {
        formData:{
        firstName: ""
        ,lastName: ""
        ,email: ""
        ,password: ""
        ,passwordConfirm: ""
        ,avatarUrl: ""
        ,tenantId: "UO228K6HGDD"
        ,agree: ""
        }
    }
// component did mount to get user information
// then pass the props to NavBar
    render() {
        
        return(
        <React.Fragment>
            <section className="vh-100 container-bg">
                
            <div>
                    <NavBar {...this.props}></NavBar> {/* ""...this.props" passes the props to SiteNav */}
            </div>
            <div>
                    <Route path="/Login" exact={true} component={Login}></Route>
                    <Route 
                    path="/Register" 
                    exact={true}   
                    render={(routeProps) => (
                    <Register
                    registerData={this.state}
                    {...routeProps}
                    ></Register>
                    )}
                    ></Route>
            </div>
        
        </section>
        </React.Fragment>
        )
    }
}

export default withRouter(StarterTasks);