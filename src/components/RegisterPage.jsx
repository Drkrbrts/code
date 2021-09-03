import React from "react";
import * as userService from "../services/userService";


class RegisterPage extends React.Component {

    onRegisterBtnClick = (payload) =>{

        userService.register(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)
        console.log("click button is working")
        }

        onActionSuccess = (response) => {
          console.log("success")
        }

        onActionError = (errResponse) => {
          console.log("error")
        }

    state = {
        formData:{firstName:""
            , lastName:""
            , userEmail:""
            , password:""
            , passwordConfirm:""
            , avatarUrl:""
        }
    };


    onChange = event => {
        // console.log(event)
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState(prevState => {
    
          const updatedFormData = {
            ...prevState.formData
          };
    
          updatedFormData[name] = value;
    
          return { formData: updatedFormData };
          
        }
        , this.stateChanged);
      };
    

    render() {
        return (

            <React.Fragment>

                    <form>
                        <h2>Register a new membership</h2>
                        <div className="form-group col-md-4 p-1">   
                            <input type="text" 
                                name="firstName"
                                id="firstName" 
                                className="form-control" 
                                value={this.state.formData.firstName}
                                onChange={this.onChange}
                                placeholder="First Name"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <input type="text" 
                                name="lastName"
                                id="lastName" 
                                className="form-control" 
                                value={this.state.formData.lastName}
                                onChange={this.onChange}
                                placeholder="Last Name"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <input type="email" 
                                className="form-control" 
                                name="userEmail"  
                                id="userEmail"
                                value={this.state.formData.userEmail}
                                onChange={this.onChange}
                                placeholder="Email"></input>
                        </div>
                        <div className="form-group col-md-4 p-1"> 
                            <input type="text" 
                                className="form-control" 
                                name="password"
                                id="password" 
                                value={this.state.formData.password} 
                                onChange={this.onChange}
                                placeholder="Password"></input>
                        </div>
                        <div className="form-group col-md-4 p-1"> 
                            <input type="text" 
                                className="form-control" 
                                name="passwordConfirm" 
                                id="passwordConfirm" 
                                value={this.state.formData.passwordConfirm} 
                                onChange={this.onChange}
                                placeholder="Retype Password"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <input type="text" 
                                className="form-control" 
                                name="avatarUrl" 
                                id="avatarUrl"
                                value={this.state.formData.avatarUrl} 
                                onChange={this.onChange}
                                placeholder="Avatar Url"></input>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="checkBox"></input>
                            <label className="form-check-label" >I agree to the terms</label>
                        </div>
                            <button type="Register" 
                            className="btn btn-primary" 
                            onClick={this.onRegisterBtnClick}>Register</button>
                        <div>
                            <a href="url">Already have an account?</a>
                        </div>
                     
                    </form>
   
            </React.Fragment>
        );
    }
}

export default RegisterPage;