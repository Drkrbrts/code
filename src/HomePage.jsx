import React, { Component } from "react";
import * as userService from "./services/userService";

class HomePage extends Component{

    state = {
        welcomeMsg: "Welcome!"
    }

    componentDidMount() {
        userService
            .currentUser(this.state.formData)
            .then(this.onCurrentUserSuccess)
            .catch(this.onCurrentUserError);
    };


    onCurrentUserSuccess = (res) => {
        let name = res.data.item.name;

        this.setState(() => {
            // let newState = { ...prevState }; //ask if necessary
            return { welcomeMsg: `Welcome ${name}!` };
        });

        console.log(name);
    };

    onCurrentUserError = (err) => {
        //redirect to login page
        console.log({ error: err });
    }

    render() {
        return (
            <div className="container text-center my-5">
                <h1 className ="homePageGreeting"
                    style={{ fontsize: "8rem" }}>{this.state.welcomeMsg}
                </h1>
            </div>
        );
    };
};



export default HomePage;