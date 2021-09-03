import React from "react";
import defaultExport from "../services/userService";
import { ToastContainer, toast } from 'react-toastify';



class start extends React.Component{




  onClickLogin = (e) =>{
  
  
    console.log("login  was clicked");
    
  
  }

  state = {
    email:" ",
    password: "",
    tenantId: 12344654

  
  }
  
  onFormFieldChange = (e) => {
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
    defaultExport.logIn(payload)
    .then(this.onLoginSuccess)
    .catch(this.onLoginError)
  }


  onLoginSuccess = (response) =>{
    console.log(response.data, "Succsessful")
    toast.success('🦄 you are logged in!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      this.props.history.push("/Home" )
  
  
  }




  onLoginError = (errorResponse) =>{
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
    <div role="main">
    <div className="container">
        <div className = "row">
        <div className="col-mb-3 p-5">
          <h1>Login here</h1>
          
        
        <div className="content">
       
        <form>
          
           
              
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
              
             
              
              
            
    
            <button type="button" value="Submit" className="btn btn-primary" onClick={this.onClickHandler} >log In</button>
            
           
            </form>
        </div>
        <ToastContainer/>
      </div>
      </div>
      </div>
      </div>






  </React.Fragment>
}


}
export default start