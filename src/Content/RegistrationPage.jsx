import React from "react"
import * as userService from "../services/userService"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RegistrationPage extends React.Component{

    state = {
        newUser: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            avatarUrl: "",
            tenantId: "bootcamp1",
            agreeTerms: false,
        }
    }

    componentDidMount(){
        console.log("componentDidMount() -> RegistrationPage");
    }

    componentDidUpdate(){
        // console.log("componentDidUpdate: ");
    }

    // onChange={Handler}
    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name
        let newValue = currentTarget.type === "checkbox" 
            ? currentTarget.checked 
            : currentTarget.value
        

        this.setState(() => {
            let newUser = {...this.state.newUser};

            newUser[inputName] = newValue

            return {newUser}
        })
    }

    onRegisterClick = (e) => {
        e.preventDefault();

        let userRegistrationInfo = this.state.newUser;

        if(userRegistrationInfo.agreeTerms){
            userService.register(userRegistrationInfo)
                .then(this.onRegisterSuccess)
                .catch(this.onRegisterError)
        } else {
            toast.warning("Please Agree to Terms!")
        }
    }

    onHaveAccountClick = (e) => {
        console.log("onSignUpClick() was clicked!");
        this.props.history.push("/login")
      }

    onRegisterSuccess = (response) => {
        console.log(response.data, "onRegisterSuccess");

        let userId = response.data.item;
        console.log("User ID:", userId);

        toast.success("You have registered successfully!")
        document.getElementById("registrationForm").reset();
        this.props.redirectUser();
    }

    onRegisterError = (errResponse) => {
        // console.log({error: errResponse});

        let errMessage = errResponse.response.data.errors[0];
        console.log(errMessage);
        toast.error(errMessage);

    }

    render(){
        return(
            <div className="col-lg-8 col-md-6 col-sm-6 mb-4 mx-auto">
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            Register a new membership
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="card-text text-black-50">
                            
                            <form id="registrationForm">
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Retype password"
                                        name="passwordConfirm"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Avatar Url"
                                        name="avatarUrl"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        value="777"
                                        checked={this.state.newUser.agreeTerms}
                                        onChange={this.onFormFieldChange}
                                        name="agreeTerms"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="termsCheck"
                                        ><strong>I agree to the terms</strong></label
                                    >
                                </div>
                                <a href="/" onClick={this.onHaveAccountClick}
                                    ><strong
                                        >Already have an Account?</strong
                                    ></a
                                >
                                <div className="card-body text-center">
                                    <button
                                        type="clear"
                                        className="btn btn-primary btn-lg"
                                        onClick={this.onRegisterClick}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default RegistrationPage