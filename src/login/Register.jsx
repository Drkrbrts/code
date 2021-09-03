import React from "react";
import defaultExport from "../services/startUserService"

class Register extends React.Component
{
    state = {
        firstName : "Delano",
        lastName : "Robinson",
        email : "D.Robinson@fakemail.com",
        password1 : "123321",
        password2 : "123321",
        avatarUrl : "https://gravatar.com/avatar/c063dd2b70cfb0a837613f3c09e6b643?s=400&d=robohash&r=x"
    }

    onFormChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        // console.log({newValue, currentTarget})
        // this.setState({[currentTarget.firstName]: currentTarget.value})
        // this.setState({[currentTarget.lastName]: currentTarget.value})


        this.setState(()=>{
            let newState = {}

            newState.firstName = newValue
            console.log("newState", newState.firstName)

            return newState;

        });
    }

    onClickHandler = () =>
    {
        var payload ={
            "firstName": "Delano",
            "lastName": "Robinson",
            "email": "D.Robinson@fakemail.com",
            "password": "Delano.Robinson#123",
            "passwordConfirm": "Delano.Robinson#123",
            "avatarUrl": "https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635",
            "tenantId": 5577884
        }
        defaultExport.register(payload)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterError)
    }

    onRegisterSuccess = (response) => {
        console.warn(response.data, "Successful")
    }
       
    onRegisterError = (errResponse) => {
        console.warn(errResponse, "Unsuccessful")
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         password1: "",
    //         password2: "",
    //         avatarUrl: ""
    //     }
    // }

    // handleSubmit = (e) => {
    //     alert("A form was submitted:" + this.state);

    //     fetch("https://api.remotebootcamp.dev/api/users/register", {
    //         method: "POST",
    //         body: JSON.stringify(this.state)
    //     }).then(function(response) {
    //         console.log(response)
    //         return response.json();
    //     })
    //     e.preventDefault();
    // }

    render() {
   
        return <React.Fragment>
            <div className="header p-5">Registration</div>
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text"  value={this.state.firstName} name="firstName" onChange={this.onFormChange} className="form-control" id="firstName" v-model="firstName" aria-describedby="firstNameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" value={this.state.lastName} name="lastName" onChange={this.onFormChange} className="form-control" id="lastName" v-model="lastName" aria-describedby="lastNameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" value={this.state.email} name="email" onChange={this.onFormChange} className="form-control" id="email" v-model="email" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password1" className="form-label">Password</label>
                        <input type="password" value={this.state.password1} name="password1" onChange={this.onFormChange} className="form-control" id="password1" v-model="password1"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Confirm Password</label>
                        <input type="password" value={this.state.password2} name="password2" onChange={this.onFormChange} className="form-control" id="password2" v-model="password2"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="avatarUrl" className="form-label">Avatar URL</label>
                        <input type="url" value={this.state.avatarUrl} name="avatarUrl" onChange={this.onFormChange} className="form-control" id="avatarUrl" v-model="avatarUrl"></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
                </form>
            </div>    
        </React.Fragment>
    }    
}

export default Register