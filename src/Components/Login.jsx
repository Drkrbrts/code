import React from "react";
import 'rc-pagination/assets/index.css';
import * as userService from "../services/userService"; 
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route} from "react-router-dom";
import SubmitButton from "./SubmitButton";

import {NavLink} from "react-router-dom"

class Login extends React.Component {
    state = {
        formData: { 
          email: "you@somewhere.com", 
          password: "password"},
        isModalOpen: false,
        hasMadeAjax: true,
        arrayOfComp: []         
      }

      onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;
    
        this.setState(() => {
          let formData = {...this.state.formData};
    
          formData[inputName] = newValue;    
           
          return {formData};             
        })     
      }

      formSubmit = () => {                             
        let inputs = {};
    
        for (let key in this.state.formData) {
          inputs[key] = document.querySelector(`#${key}`).value;
        }                                     
          userService.logIn(inputs).then(response => {
              console.log(response, "onLoginSuccess");
              toast.success("Login Success!");
              userService.user().then(response => {
                console.log(response.data.item.id);
                
                this.props.history.push(`user/${response.data.item.id}`);
                

              })
          }).catch(error => {
              console.warn(error, "onLoginFailure");
              toast.error("Login Failure!");        
          })      
             
      }                     
              
    render() {           
        return <React.Fragment>
                
                <form className="p-3" style={{float: "left", width: "30%"}}>
                <div>
                  <label style={{margin: "5px"}}><strong>Log In</strong></label>
                  <input id="email" onChange={this.onFormFieldChanged} name="email" value={this.state.formData.email} type="email" className="form-control" style={{margin: "5px"}} />
           
                  <input id="password" onChange={this.onFormFieldChanged} name="password" value={this.state.formData.password} type="password" className="form-control" style={{margin: "5px"}} />
                </div>
                <span>
                <Route path="/">
        <SubmitButton onClick={this.props.update} action={this.formSubmit}></SubmitButton>
      </Route>
                <NavLink style={{paddingLeft: "20px"}} to="/register">Register new Membership</NavLink>
                </span>
                </form>
        
               </React.Fragment>
    }
}




export default Login;