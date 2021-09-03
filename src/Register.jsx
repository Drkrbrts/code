import React from "react"
import 'rc-pagination/assets/index.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from "react-router-dom"
import * as userService from "./services/userService"


class Register extends React.Component
{
    state = {
        formData: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            avatarUrl: "",
            tenantId: "",
            userId: "U0284AU10GM"
        }
        
    }
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        console.log(e);
        
        this.setState(() =>{
            let newState = {...this.state.formData};
            //newState.firstName = newValue;
            newState[inputName] = newValue;

            
            return {formData: newState};
        })
    };
    

    onRegisterClicked = (e) =>
    {
        e.preventDefault();
        var firstName = this.state.formData.firstName;
        var lastName = this.state.formData.lastName;
        var email = this.state.formData.email;
        var password = this.state.formData.password;
        var passwordConfirm = this.state.formData.passwordConfirm;
        var avatar = this.state.formData.avatarUrl;
        var userId = "U0284AU10GM";
        
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            avatarUrl: avatar,
            tenantId: userId
        }    

        userService.register(data)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterErroe)
    }

    onRegisterSuccess = (response) =>
    {
        console.log("Registration Sucess ");
        toast.success("Registration success! You have registered successfully!", 
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
    }
    onRegisterErroe = (response) =>
    {
        console.log("Register Fail");
        toast.error("Registration Fail! Please provide unique User Id! ",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }

    render()
    {
        
        return (
            <React.Fragment>
                <form>
                    {/* <div className="form-group p-3">
                        <input type="text" className="form-control" name="userId" id="userId" aria-describedby="userIdHelp" placeholder="User Id" value={this.state.formData.userId} onChange={this.onFormFieldChanged}/>
                        <small id="userIdHelp" className="form-text text-muted">Please provide unique User ID.</small>
                    </div> */}
                    <div className="form-group p-3">
                        <input type="text" className="form-control" name="firstName" id="firstName" aria-describedby="firstNameHelp" placeholder="First Name" value={this.state.formData.firstName} onChange={this.onFormFieldChanged}/>
                        <small id="firstNameHelp" className="form-text text-muted">Please provide your first name.</small>
                    </div>

                    <div className="form-group p-3">
                        <input type="text" className="form-control" name="lastName" id="lastName" aria-describedby="lastNameHelp" placeholder="Last Name" value={this.state.formData.lastName} onChange={this.onFormFieldChanged}/>
                        <small id="lastNameHelp" className="form-text text-muted">Please provide your last name.</small>
                    </div>

                    <div className="form-group p-3">
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" value={this.state.formData.email} onChange={this.onFormFieldChanged}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group p-3">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.formData.password} onChange={this.onFormFieldChanged}/>
                    </div>

                    <div className="form-group p-3">
                        <input type="password" className="form-control" name="passwordConfirm" id="passwordConfirm" placeholder="Retype password" value={this.state.formData.passwordConfirm} onChange={this.onFormFieldChanged}/>
                    </div>

                    <div className="form-group p-3">
                        <input type="text" className="form-control" name="avatarUrl" id="avatarUrl" placeholder="Avatar Url" value={this.state.formData.avatarUrl} onChange={this.onFormFieldChanged}/>
                    </div>

                    <div className="form-group form-check m-3">
                        <input type="checkbox" className="form-check-input" id="agree" />
                        <label className="form-check-label" htmlFor="agree">I agree to the <a href="#">terms</a></label>
                    </div>
                    <div className="form-group m-3">
                         <NavLink to="/LogIn">
                             <p>Already have an account?</p>
                         </NavLink>
                    </div>
                    <button type="submit" className="btn btn-primary m-3" onClick={this.onRegisterClicked}>Register</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Register