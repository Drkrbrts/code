import React from "react"
import * as loginUser from "../services/loginUser";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class UserLogin extends React.Component {

  state = {
    email: "",
    password: "",
    tenantId: "U024KAS2547"
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

onItemClicked = (e) => {
  e.preventDefault()
  // e.stopPropogation()
  console.log("I was clicked")
  // console.log(this.newState)

  
  let payload = {
    password: this.state.password,
    email: this.state.email,
    tenantId: this.state.tenantId}

  
      


   
  loginUser.newLogin(payload)
  .then(this.onActionSuccess)
  .catch(this.onActionError)

    

}

onActionSuccess = response => {
  console.log(this.onItemClicked)
  toast.success('Succesfull Login', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
};

onActionError = response => {
  console.warn(this.onItemClicked)
  toast.error('You Thought, Try again', {
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

    
    
    return(       
      <form>
      <div className="form-group p-">

        <div>
        <label className="exampleInputEmail1 p-2">Email address</label>
        </div>
        <input type="email" className="form-control"
         id="exampleInputEmail1"
         name="email"
         value={this.state.email}
         onChange={this.onFormFieldChanged}
         />
      </div>
        <div className="form-group">
    <label className="exampleInputPassword1 p-2">Password</label>
    <input type="password"
     className="form-control"
      id="exampleInputPassword1"
      name="password"
       placeholder="Dont use you birthday, please"
       value={this.state.password}
       onChange={this.onFormFieldChanged} 
       />
  </div>
      <div>
        
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onItemClicked}>Submit</button>
        
        
        <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    {/* Same as */}
    <ToastContainer />
        </form>
    )
  }
}

export default UserLogin