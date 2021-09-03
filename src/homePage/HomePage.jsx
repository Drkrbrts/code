import React from "react";
import userService from "../services/startUserService";
import {NavLink} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



class HomePage extends React.Component {

    state = {
        name : ""
    }

    componentDidMount () {
        console.log('moutning')
        userService.getUser()
            .then(this.onUserSuccess)
            .catch(this.onUserError)
            console.log('mounted')
    }

    onUserSuccess = (response) => {
        console.log(response)


        userService.getUserId(response.data.item.id)
            .then(this.onGetUserIdSuccess)
            .catch(this.onGetUserIdError)       
    }
    onUserError = (errResponse) => {
        console.log(errResponse)

    }

    onGetUserIdSuccess = (response) => {
        console.log(response)

        this.setState((prevState) => {
            return {...prevState, name: response.data.item.firstName }
        })

    }
    onGetUserIdError = (errResponse) => {
        console.warn(errResponse)
    }

    clickHandler = () => {
        userService.logOut()
            .then(this.onLogOutSuccess)
            .catch(this.onLogOutError)

        this.onLogOutClick();
    }

    onLogOutSuccess = (response) => {
        console.log(response)
        toast.success('Logged Out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    onLogOutError = (errResponse) => {
        console.log(errResponse)
    }

    onRegisterClick = (e) => {

        console.log("register was clicked")

        this.props.history.push("/registration/")
    }
    onLoginClick = (e) => {

        console.log("Login was clicked")

        this.props.history.push("/login/")
    }
    onLogOutClick = (e) => {

        console.log("LogOut was clicked")

        this.props.history.push("/login/")
    }

    componentDidUpdat (prevProps) {

        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;

        console.log("buttons", {currentPath, previousPath})
    }

    

    render () {

        return <React.Fragment>
                    <div className="container">                    
                        <div className="text-end">
                            <NavLink to="/login/">
                                <button type="button" className="btn btn-outline-primary me-2" onClick={this.onLoginClick}>
                                    Login
                                </button>
                            </NavLink>
                            <NavLink to="/registration/">
                                <button type="button" className="btn btn-warning btn-outline-light me-2" onClick={this.onRegisterClick}>
                                    Register
                                </button>
                            </NavLink>
                            <NavLink to="/login/">
                                <button type="button" className="btn btn-danger btn-outline-light" onClick={this.clickHandler}>
                                    LogOut
                                </button>
                            </NavLink>
                        </div>
                        <div className="align-items-center justify-content-center justify-content-lg-start">
                            <h1>Hello {this.state.name}</h1>
                        </div>
                    </div>
                    <ToastContainer />
        </React.Fragment>
    }
}

export default HomePage