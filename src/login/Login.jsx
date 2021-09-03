import React from "react"
import defaultExport from "../services/startUserService"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from "react-router-dom"


class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            tenantId: 123
        }
    }

    onLoginChange =(e) => {

        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        
        this.setState(()=>{
            let newState = {}

            newState[inputName] = newValue

            return newState;

        });
    }

    clickHandler = () => {

        var payload = this.state

        defaultExport.logIn(payload)
            .then(this.onLoginSuccess)
            .catch(this.onLoginError)

        this.onLoginClick()

    }

    onLoginSuccess = (response) => {

        console.warn(response)
        toast.success('Great Work', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    onLoginError = (errResponse) => {

        console.warn(errResponse)
        toast.error('Oops, Lets try that again', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    handleSubmit = (e) => {
        alert("A form was submitted:" + this.state);

        fetch("https://api.remotebootcamp.dev/api/users/login", {
            method: "POST",
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        })
        e.preventDefault();
    }

    onLoginClick = (e) => {

        console.log("Login was clicked")

        this.props.history.push("/home/")
    }

    componentDidUpdat (prevProps) {

        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;

        console.log("buttons", {currentPath, previousPath})

    }

    render(){
        return <React.Fragment>
            <div className="header p-5">Login</div>
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label">Email address</label>
                        <input type="email" value={this.state.value} name="email" onChange={this.onLoginChange} className="form-control" id="email1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={this.state.value} name="password" onChange={this.onLoginChange} className="form-control" id="password"></input>
                    </div>
                </form>
                <div>
                    <NavLink to="/home/">
                        <button type="submit" className="btn btn-primary" onClick={this.clickHandler}>Login</button>
                    </NavLink>
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>

    }
}

export default Login

