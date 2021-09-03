import React from "react"
import { userService } from "../services/userService";

import { ToastContainer, toast } from 'react-toastify';


class LandingPage extends React.Component{
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
  
    
    let payload = {
      password: this.state.password,
      email: this.state.email,
      tenantId: this.state.tenantId}
  
    
        
  
  
     
    userService.login(payload)
    .then(this.onActionSuccess)
    .catch(this.onActionError)
  
    
  
  }

  onActionSuccess = response => {
    console.log(this.onItemClicked)
    toast.success( `${"Welcome!!"} ${this.state.email} `,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        this.props.history.push("/WelcomePage")
  
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
        this.props.history.push("/Blogs")
  
  
  }
  
    
    
    
    
    
    render(){
        return(

            
            


            <body className="">
            <main className="form-signin">
                <div>
                    <h1>Welcome! Please Sign in</h1>
                </div>
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
                placeholder=""
                value={this.state.password}
                onChange={this.onFormFieldChanged} 
                />
                </div>
                <div>

                </div>

        
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onItemClicked}{...this.props}>Sign in</button>
              </form>
            </main>
          </body>
        
        )
    }
}

export default LandingPage