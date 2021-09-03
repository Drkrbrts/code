import React from "react"
import * as userService from "../services/userService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class LoginForm extends React.Component
{
    state = {
        email: "",
        password: "",
        tenantId: ""
        
    }
    
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget
        let newValue = currentTarget.value
        let inputName = currentTarget.name
 
        this.setState(()=>{
         
         let newState = {} 
         newState[inputName] = newValue
         return newState
 
        })
    }
    onLoginClicked = (e) => {
        // e.preventDefault()
        // e.stopPropogation()
        console.log("I was clicked")

        
        let payload = {email: this.state.email,
            password: this.state.password,
            tenantId: this.state.tenantId}
            
    

         
        userService.logIn(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)       
    }
    onActionSuccess = response => {
        console.log(response);
        toast.success('Success!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
;
};

    onActionError = response => {
        console.warn(response);
        toast.error('Error!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    

render(){return(<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    name="email"
    value={this.state.email}
    onChange={this.onFormFieldChanged}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
  <label for="exampleInputEmail1">Tenant ID</label>
  <input type="email" class="form-control" id="exampleInputID" aria-describedby="emailHelp" placeholder="Enter Tenant ID"
                 name="tenantId"
                 value={this.state.tenantId}
                 onChange={this.onFormFieldChanged}/>
  <small id="tenantIDhelp" class="form-text text-muted">Unique ID.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    name="password"
    value={this.state.password}
    onChange={this.onFormFieldChanged}/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={this.onLoginClicked} type="submit" class="btn btn-primary">Submit</button>
</form>)
}
}

export default LoginForm 