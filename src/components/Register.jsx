import React from "react";
import * as userService from "../services/userService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

//<button onClick={notify}></>

//const notify = () => {toast.("basic notification")}

class Register extends React.Component
{
    state = {
        firstName: ""
        , lastName: ""
        , email: ""
        , password: ""
        , passwordConfirm: ""
        , avatarUrl: ""
        , tenantId: ""
    }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(() =>{
            let newState = {};
            newState[inputName] = newValue;
            return newState;
        });
    }

    onClickRegisterHandler = (e) =>
    {    
        var data = this.state;

        e.stopPropagation();
        e.preventDefault();
        console.log("i was clicked", e.currentTarget);

        userService
            .register(data)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterError);

    }

    onRegisterSuccess = (response) => {
        console.log(response);
        toast.success("Registered Successfully", {
            position: "top-right"
        });
        //this.props.history.push("/");
    }

    onRegisterError = (errorResponse) => {
        console.error(errorResponse);
        toast.error("Registration Error", {
            position: "top-right"
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="container col-md-8">
                    <h1>Register Here</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputFName">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputFName"
                                name="firstName"
                                onChange={this.onFormFieldChanged}
                                value={this.state.firstName}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputLName" className="form-label">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputLName" 
                                name="lastName" 
                                onChange={this.onFormFieldChanged}
                                value={this.state.lastName}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                onChange={this.onFormFieldChanged}
                                value={this.state.email}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control validate" 
                                name="password" 
                                id="password"
                                onChange={this.onFormFieldChanged}
                                value={this.state.password}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="passwordConfirm" 
                                id="passwordConfirm"
                                onChange={this.onFormFieldChanged}
                                value={this.state.passwordConfirm}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleAvatarUrl" className="form-label">Avatar Url</label>
                            <input 
                                type="url" 
                                className="form-control"
                                name="avatarUrl"
                                id="avatarUrl"
                                onChange={this.onFormFieldChanged}
                                value={this.state.avatarUrl}    
                            />
                        </div>    

                        <div className="mb-3">
                            <label htmlFor="exampleTenantId" className="form-label">Tenant Id</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tenantId"
                                name="tenantId"
                                onChange={this.onFormFieldChanged}
                                value={this.state.tenantId}
                            />
                        </div>               

                        <button 
                            type="button" //submit
                            className="btn btn-primary" 
                            onClick={this.onClickRegisterHandler}
                            value="Submit"
                        >
                            Register
                        </button>
                        
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;

/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
 </div> */

    // componentDidMount(){
    //     var data = {
    //         firstName: "Virginia"
    //         , lastName: "Cabrera"
    //         , email: "Verge@sabio.la"
    //         , password: "Password2!^,"
    //         , passwordConfirm: "Password2!^,"
    //         , avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-sdggr&psig=AOvVaw0TKnrGPPSP0F9NUPiP0GCu&ust=1627691765853000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIi4-8HGifICFQAAAAAdAAAAABAD"
    //         , tenantId: "bootcamp2"
    //       } 

    //     userService.register(data).then(this.onRegisterSuccess).catch(this.onRegisterError);
    // }