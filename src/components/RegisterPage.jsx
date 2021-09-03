import React from "react";
import * as userService from "../services/userService";
import { toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    

class RegisterPage extends React.Component {

    state = {
        formData:{firstName:""
            , lastName:""
            , userEmail:""
            , password:""
            , passwordConfirm:""
            , avatarUrl:""
        }
    };

    // onRegisterBtnClick = (payload) =>{

    //     userService.register(payload)
    //     .then(this.onActionSuccess)
    //     .catch(this.onActionError)
    //     console.log("click button is working")
    //     }

    //     onActionSuccess = (response) => { toast.success()
    //       console.log("success")
    //     }

    //     onActionError = (errResponse) => { toast.error()
    //       console.log("error")
    //     }


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
    

    onRegisterBtnClick = (data) =>{
        var formData = {
          firstName: "kim",
          lastName: "viiiii",
          email: "kimm2@gmail.com",
          password: "Password1!",
          passwordConfirm: "Password1!",
          avatarUrl: "https://api.remotebootcamp.dev/apihelp/rbclogo.png",
          tenantId:"kimnewid123",
        }
        userService.register(formData)
        .then(this.onActionSuccess)
        .catch(this.onActionError);
        }

        onActionSuccess = (response) => { toast.success('Registration Success')
        console.log("Submitted!")
        }
        onActionError= (errResponse) => { toast.error('Registration Failed')
        console.log("Error!")
        }

   
    render() {
        return (

            // <React.Fragment>

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
                            <button type="button" 
                            className="btn btn-primary" 
                            onClick={this.onRegisterBtnClick}
                            >Register</button>
                        <div>
                            <a href="url">Already have an account?</a>
                        </div>
                     
                    </form>
   
            // </React.Fragment>
        );
    }
}

export default RegisterPage;