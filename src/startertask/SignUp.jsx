import React from "react";
import defaultExport from "../services/userService";
import { ToastContainer, toast } from 'react-toastify';


 

class register extends React.Component{
  
  state = {
    firstName: " ",
    lastName: " ",
    email: " ",
    password: "",
    passwordConfirm: "",
    avatarUrl:" ",
    tenantId: 12344654

  }
  onFormFieldChange =(e)=>
  {
    let currentTarget = e.currentTarget;
    let newvalue = currentTarget.value;
   let inputName = currentTarget.name
   

    this.setState(()=>
    {
      let newState = {};

       newState[inputName] = newvalue;

      


      return newState
    })

  }
  onClickHandler = () =>
  {
    console.log("I was clicked")
    var payload = this.state
    defaultExport.register(payload)
    .then(this.onRegisterSuccess)
    .catch(this.onRegisterError)
  }


  onRegisterSuccess = (response) =>{
    console.log(response.data, "Succsessful")
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
  
  }




  onRegisterError = (errorResponse) =>{
    console.log(errorResponse, "Unsuccsessful")
    toast.error('🦄 Wow you suck!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  

  
  
  }

  





  render(){
    return <React.Fragment>
   
      <div>
      
      </div>
      <div>
<div role="main">
  <div className="container">
    <div className="row">
    <div className="col-mb-3 p-5">
<form>
<div className="mb-3">
    <label htmlFor="name" className="form-label">First Name</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    name="firstName"
    onChange={this.onFormFieldChange}
   value={this.state.firstName}/>
  </div>


  <div className="mb-3">
    <label htmlFor="name" className="form-label">Last Name</label>
    <input type="text" 
    className="form-control" 
    id="name" 
    name="lastName"
    onChange={this.onFormFieldChange}
   value={this.state.lastName}/>
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" 
    className="form-control" 
    id="email" 
    name="email"
    onChange={this.onFormFieldChange}
   value={this.state.email}/>
  </div>
    



  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" 
    className="form-control" 
    id="Password"
    name="password"
    onChange={this.onFormFieldChange}
   value={this.state.password}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="text" 
    className="form-control" 
    id="Password"
    name="passwordConfirm"
    onChange={this.onFormFieldChange}
   value={this.state.passwordConfirm}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">avatarUrl</label>
    <input type="url" 
    className="form-control" 
    id="avatarUrl"
    name="avatarUrl"
    onChange={this.onFormFieldChange}
   value={this.state.avatarUrl}/>
  </div>


  
  <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
</form>
</div>
</div>
<ToastContainer/>
</div>
</div>
</div>





    </React.Fragment>
  }
}

export default register





