import React from "react"
import { toast } from "react-toastify";
import * as userService from "../services/userService"

class LogInPage extends React.Component{

    state = {
        formData: {
          email: "",
          password: "",
          tenantId: "bootcamp1"
        }
      }

    componentDidMount(){
        console.log("componentDidMount() -> LogInPage");
    }

    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name
        let newValue = currentTarget.value
        

        this.setState(() => {
            let formData = {...this.state.formData};

            formData[inputName] = newValue

            return {formData}
        })
    }

    onRegisterClick = (e) => {
        e.preventDefault();

        console.log("onSignUpClick() was clicked!");
        this.props.history.push("/register")
    }

    onSignInClick = (e) => {
        e.preventDefault();

        let userLogInInfo = this.state.formData;

        userService.logIn(userLogInInfo)
            .then(this.onUserLogInSuccess)
            .catch(this.onUserLogInError)
    }

    onUserLogInSuccess = (response) => {
        console.log(response.data, "userLogInSuccess");

        userService.getCurrent()
            .then(this.onGetCurrentSuccess)
            .catch(this.onGetCurrentError)
    }

    onGetCurrentSuccess = (response) => {
        console.log(response.data, "onGetCurrentSuccess");

        let currentUser = response.data.item.name;

        document.getElementById("logInForm").reset()
        toast.success(`Welcome ${currentUser}!`)
    }

    onUserLogInError = (errResponse) => {
        console.log({error: errResponse});
        toast.error(`Make sure Email and Password fields are correct!`)
    }

    onGetCurrentError = (errResponse) => {
        console.log({error: errResponse});
    }

    render(){
        return(
            <React.Fragment>
                <div className="container text-center m-3">
                    <div className="col-lg-4 col-md-8 col-sm-8 mb-4 mx-auto">
                            <form id="logInForm">
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="name@example.com"
                                        name="email"
                                        onChange={this.onFormFieldChange}
                                    />
                                    <label htmlFor="floatingInput">Email Address</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.onFormFieldChange}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div><a href="#">I forgot my password</a></div>
                                <div className="mb-3">
                                    <a onClick={this.onRegisterClick} href="#">Register a new membership</a
                                    >
                                </div>

                                <button
                                    className="w-100 btn btn-lg btn-primary mb-3"
                                    type="submit"
                                    onClick={this.onSignInClick}
                                >
                                    Sign in
                                </button>
                            </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LogInPage