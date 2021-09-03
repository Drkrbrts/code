import React from "react";
import { toast } from "react-toastify";
import { current, getById } from "../services/userService";
//import { currentUser, userById } from "./services/userService";

class Home extends React.Component
{
    state = {
        currentUser: {
            firstName: ""
        }
    };

    componentDidMount() 
    {
        current()
            .then(this.onCurrentUserSucces)
            .catch(this.onCurrentUserError);
    }

    onCurrentUserSucces = (response) =>
    {
        let id = response.data.item.id;
        console.log("Current User", response);
        toast.success(id)
        
        getById(id)
            .then(this.getByIdSuccess)
            .catch(this.getByIdError);
    }

    onCurrentUserError = (error) =>
    {
        console.log(error);
    }

    getByIdSuccess = (response) =>
    {
        console.log(response);
        this.setState((prevstate) => {
            return {
                currentUser: response.data.item
            };
        });
    }

    getByIdError = (error) =>
    {
        console.log(error);
    }

    render(){
        return (
            <React.Fragment>
                <div className="container">
 
                                <h1>
                                    Hello {this.state.currentUser.firstName}, good to see you again!
                                </h1>

                </div>
            </React.Fragment>
        );
    }
}

export default Home;




//import {data } from jquery

// {
//     "firstName": "Virginia",
//     "lastName": "Cabrera",
//     "email": "Verge@sabio.la",
//     "password": "Password2!^,",
//     "passwordConfirm": "Password2!^,",
//     "avatarUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-sdggr&psig=AOvVaw0TKnrGPPSP0F9NUPiP0GCu&ust=1627691765853000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIi4-8HGifICFQAAAAAdAAAAABAD",
//     "tenantId": "bootcamp2"
//   }