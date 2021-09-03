import React from "react";
import 'rc-pagination/assets/index.css';
import * as userService from "../services/userService";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink, Route} from "react-router-dom";
import SubmitButton from "./SubmitButton";

toast.configure()
class Register extends React.Component {
  state = {
    formData: { 
      firstName: "First", 
      lastName: "Last", 
      email: "you@somewhere.com", 
      password: "password",
      passwordConfirm: "confirm password",
      avatarUrl: "image address"},
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
        
        
      userService.register(inputs).then(response => {
        console.log(response);
        toast.success("Registration Success!");
        this.props.history.push("/login");
      }).catch(error => {
        console.log(error);
        toast.error("Registration Failure!");     
      }); 
      

  }

    render() {
        return <React.Fragment>
  <div className="mb-3" style={{border: "2px, solid, lightGrey"}}>       
   <form className="p-3" style={{float: "left", width: "30%"}}>
  
    <label htmlFor="exampleInputEmail1" className="form-label" style={{margin: "5px"}}><strong>Simple Registration Form</strong></label>
    <input id="firstName" onChange={this.onFormFieldChanged} name="firstName" value={this.state.formData.firstName}  className="form-control input" style={{margin: "5px"}} />
    <input id="lastName" onChange={this.onFormFieldChanged} name="lastName" value={this.state.formData.lastName}  className="form-control input" style={{margin: "5px"}} />
    <input id="email" onChange={this.onFormFieldChanged} name="email" value={this.state.formData.email} type="email" className="form-control input" style={{margin: "5px"}} />
    <input id="password" onChange={this.onFormFieldChanged} name="password" value={this.state.formData.password} type="password" className="form-control input" style={{margin: "5px"}} />
    <input id="passwordConfirm" onChange={this.onFormFieldChanged} name="passwordConfirm" value={this.state.formData.passwordConfirm} type="password" className="form-control input" style={{margin: "5px"}} />
    <input id="avatarUrl" onChange={this.onFormFieldChanged} name="avatarUrl" value={this.state.formData.avatarUrl}  className="form-control input" style={{margin: "5px"}} />
    <span>
      <Route path="/">
        <SubmitButton action={this.formSubmit}></SubmitButton>
      </Route>
    <NavLink style={{paddingLeft: "20px"}} to="/login">Already a Member? Login</NavLink>
    </span>   
   </form>
   </div>
        </React.Fragment>
    }
}


export default Register;