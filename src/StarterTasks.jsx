import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";
import NavBar from "./taskComponents/NavBar"
import Login from "./taskComponents/Login";
import Register from "./taskComponents/Register";
class StarterTasks extends Component {

    render() {
        
        return(
        <React.Fragment>
            <section className="vh-100 container-bg">
                
            <div>
                    <NavBar {...this.props}></NavBar> {/* ""...this.props" passes the props to SiteNav */}
            </div>
            <div>
                    <Route path="/Login" exact={true} component={Login}></Route>
                    <Route path="/Register" exact={true} component={Register}></Route>
            </div>
        
        </section>
        </React.Fragment>
        )
    }
}

export default withRouter(StarterTasks);