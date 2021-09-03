import React from "react";
import Fade from '@material-ui/core/Fade';
import * as userService from "../services/userService";

class Register extends React.Component {

    state = {
        formData: {
            firstName: "Shawn",
            lastName: "Fetanat",
            email: "blah.blah@gmail.com",
            password: "SabioPassword1!",
            passwordConfirm: "SabioPassword1!",
            avatarUrl: "https://pw.sabio.la/images/Sabio.png",
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
        userService.register(data)
        .then(this.onActionSuccess)
        .catch(this.onActionError);
    }

    onActionSuccess = (response) => {
        console.log(response);
      }
       
    onActionError = (errResponse) => {
        console.warn(errResponse);
      }

    render() {
        return(
            <Fade in={true} style={{ transitionDelay:'250ms'}}>
                    <div className="p-4 mb-4 bg-light rounded-3">
                <h4 style={{
                    textAlign: 'center'
                }}>Register a user</h4>
              <div className="container-fluid py-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName"></label>
                        <input type="text" className="form-control" autoComplete="given-name" id="firstName" name="firstName" placeholder="First Name" onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"></label>
                        <input type="text" className="form-control" autoComplete="family-name"id="lastName" name="lastName" placeholder="Last Name" onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" autoComplete="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.onFormFieldChanged}></input>
                        <div id="emailHelp" className="form-text">You must use a new email address or registration will not work</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="new-password" className="form-control" autoComplete="new-password" id="password" name="password" placeholder="Password" onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm"></label>
                        <input type="new-password" className="form-control" autoComplete="new-password" id="passwordConfirm" name="passwordConfirm" placeholder="Retype Password" onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatarUrl"></label>
                        <input type="url" className="form-control" autoComplete="url" id="avatarUrl" name="avatarUrl" placeholder="Avatar Url" onChange={this.onFormFieldChanged}></input>
                    </div>
                    <div className="form-check m-3 p-3">
                        <input type="checkbox" className="form-check-input" id="checkBox" name="checkBox"></input>
                        <label className="form-check-label" htmlFor="checkBox">
                            <b>
                                I agree to the <font color="blue">terms</font>
                            </b>
                        </label>
                        </div>
                        <button id="register" type="button" className="btn btn-primary" onClick={this.onSubmitClicked}>Submit</button>
                        </form>
                    </div>
                </div>
            </Fade>
            
        );
    }
}

export default Register;