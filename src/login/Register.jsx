import React from "react";
import defaultExport from "../services/startUserService"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from "react-router-dom"

class Register extends React.Component
{
    state = {
        registerData: { 
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            passwordConfirm : "",
            avatarUrl : "",
            tenantId: 123
        }
    }

    onFormChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        
        this.setState(()=>{
            let registerData = {...this.state.registerData}

            registerData[inputName] = newValue

            return { registerData };

        });
    }

    onClickHandler = () =>
    {
        var payload = this.state.registerData;

        defaultExport.register(payload)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterError)

        this.onSubmitClick()
    }

    onRegisterSuccess = (response) => {
        console.warn(response.data, "Successful")
        toast('You are all set!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }
       
    onRegisterError = (errResponse) => {
        console.warn(errResponse, "Unsuccessful")
        toast('Submit Error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }

    handleSubmit = (e) => {
        alert("A form was submitted:" + this.state);

        e.preventDefault();
    }

    onSubmitClick = (e) => {

        console.log("Submit was clicked")

        this.props.history.push("/home/")
    }

    componentDidUpdat (prevProps) {

        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;

        console.log("buttons", {currentPath, previousPath})

    }

    render() {
   
        return <React.Fragment>
            <div className="header p-5">
                    <h1 className="text-primary">Registration</h1>
                </div>
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text"  value={this.state.registerData.firstName} name="firstName" onChange={this.onFormChange} className="form-control" id="firstName" v-model="firstName" aria-describedby="firstNameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" value={this.state.registerData.lastName} name="lastName" onChange={this.onFormChange} className="form-control" id="lastName" v-model="lastName" aria-describedby="lastNameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={this.state.registerData.email} name="email" onChange={this.onFormChange} className="form-control" id="email" v-model="email" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={this.state.registerData.password1} name="password" onChange={this.onFormChange} className="form-control" id="password1" v-model="password"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirm" className="form-label">Confirm Password</label>
                        <input type="password" value={this.state.registerData.password2} name="passwordConfirm" onChange={this.onFormChange} className="form-control" id="password2" v-model="passwordConfirm"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="avatarUrl" className="form-label">Avatar URL</label>
                        <input type="url" value={this.state.registerData.avatarUrl} name="avatarUrl" onChange={this.onFormChange} className="form-control" id="avatarUrl" v-model="avatarUrl"></input>
                    </div>
                    <NavLink to="/home/">
                        <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
                    </NavLink>
                </form>
            </div>
            <ToastContainer />    
        </React.Fragment>
    }    
}

export default Register