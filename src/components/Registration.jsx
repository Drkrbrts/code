import React, { Component } from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";


class Registration extends Component {
    state = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "passwordConfirm": "",
        "avatarUrl": "",
        "tenantId": "U01JBQH4TFB"
  }

    onSubmit = (e) => {
      e.preventDefault(); 
      console.log("onSubmit", "button is firing ok");

      userService.registerUser(this.state)
        .then(this.onRegisterSuccess)
        .catch(this.onRegisterError);
    }

    onRegisterSuccess = (response) => {
      toast.success("You successfully registered!");
   
      console.log("onRegisterSuccess", response);

      this.props.history.push("/home");

    };
   
    onRegisterError = (response) => {
      toast.error("Please fill in the indicated fields.");
      console.log(response);
    };
  

    onFormFieldCompleted = (e) => {
        let currentTarget = e.currentTarget; 
        let newValue = currentTarget.value; 
        let inputName = currentTarget.name; 

        this.setState((prevState)=>{
           
          
          let newState = {}; 

            newState[inputName] = newValue; 

            return newState; 
        }); 
    }; 


    render() {
        return(
            <React.Fragment>
            <main role="main">
            <div className="container p-5">
              <div className="row">
                <div className="col-md-4 p-5">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input 
                        className="form-control"
                        name="firstName"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.firstName} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input 
                        className="form-control" 
                        name="lastName"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.lastName} />
                    </div>

                    
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        className="form-control" 
                        name="email"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.email} />
                    </div>

                    
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.password} />
                    </div>

                    
                    <div className="mb-3">
                      <label className="form-label">Password Confirm</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        name="passwordConfirm"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.passwordConfirm} />
                    </div>

                                        
                    <div className="mb-3">
                      <label className="form-label">Avatar Url</label>
                      <input 
                        className="form-control" 
                        name="avatarUrl"
                        onChange={this.onFormFieldCompleted}
                        value={this.state.avatarUrl} />
                    </div>

                    <button 
                      type="submit" className="btn btn-primary" 
                      onClick={this.onSubmit.bind(this)}
                    >Submit
                    </button>
                  </form>
                </div>
  
              </div>
              
              <hr />
            </div>
          </main>
          </React.Fragment>
            ); 
    }

}

export default Registration; 