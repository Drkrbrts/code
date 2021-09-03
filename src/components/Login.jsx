import React from "react";
import Fade from '@material-ui/core/Fade';
import * as userService from "../services/userService";

class Login extends React.Component {

    state = {
        formData: {
            email: "privacyisimportant@icloud.com",
            password: "SabioPassword1!",
            tenantId: "U01RTQ85QN5"
        }
    };

    onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        console.log({currentTarget, newValue});

        this.setState(() => {
            let formData = {...this.state.formData};
            formData[inputName] = newValue;
            return {formData};
        });
    };


    onSubmitClicked = () => {
        const data = {...this.state.formData};
        console.log(data);
        userService.logIn(data)
        .then(this.onActionSuccess)
        .catch(this.onActionError);
    };

    onActionSuccess = (response) => {
        console.log(response);
        window.location = "/home";
      }
       
    onActionError= (errResponse) => {
        console.warn(errResponse);
        window.location = "/login";
      }

    render() {
        return(
            <Fade in={true} style={{transitionDelay: `250ms`}}>
                    <div className="p-4 mb-4 bg-light rounded-3">
                        <h4 style={{textAlign: 'center'}}>Login a user</h4>
                    <div className="container-fluid py-3">
                <form>
                    <div className="form-group p-1">
                        <label htmlFor="email"></label>
                        <input 
                        type="email"
                        autoComplete="email"
                        className="form-control" 
                        style={{width: '30%', margin: `auto`}} 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="form-group p-1">
                        <label htmlFor="password"></label>
                        <input 
                        type="password"
                        autoComplete="current-password"
                        className="form-control" 
                        style={{width: '30%', margin: `auto`}} 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="p-3 ml-3" style={{marginLeft: `420px`}}>
                        <button 
                        id="register" 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={this.onSubmitClicked}>Login</button>
                    </div>
                    <div className="row" style={{marginLeft:`570px`, marginTop: `-62px`}}>
                        <a href="/">I forgot my password</a>
                        <a href="/">Register a new membership</a>
                    </div>
                    </form>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Login;