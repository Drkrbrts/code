import React from "react";
// import {NavLink} from "react-router-dom";
import * as userService from "../services/userService";

class Home extends React.Component {

    state = {
        firstName: "Brian Trinh",
        email: "btrinh426@yahoo.com"
    };

    onLogOutClicked = () => {
        userService.logOut()
            .then(this.onLogOutSuccess)
            .catch(this.onLogOutError)
    };

    onLogOutSuccess = (response) => {
        console.log(response, "You have logged out.");
        this.props.history.push("/");
    };

    onLogOutError = (error) => {
        console.log(error, "You have failed to log out.");
    };

    render () {
        return (
            <>
            <div className="container">
                <strong>Welcome {this.state.firstName}, {this.state.email}. This is the Home page.</strong>
                <button className="btn btn-danger" onClick={this.onLogOutClicked}>Logout</button>
            </div>
            

            </>
        )

    };
};

export default Home;