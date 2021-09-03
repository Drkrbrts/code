import React from "react"
import * as userService from "../services/userService";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';



class RegisterForm extends React.Component {

    state = {
       FirstName: "",
       LastName: "",
       email: "",
       password: "",
       passwordConfirm: "",
       avatarUrl: URL,
       tenantId: "U024KAS2547"
    // https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fau.whales.org%2Fwp-content%2Fuploads%2Fsites%2F3%2F2018%2F06%2Fhumpback-whale-vanessa-mignon.jpg&f=1&nofb=1   
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

        
        let payload = {firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            avatarUrl : "http://cdn.akc.org/content/article-body-image/lab_puppy_dog_pictures.jpg",
            email: this.state.email,
            tenantId: this.state.tenantId}

        
            
    

         
        userService.registerUser(payload)
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





    render () {
        return(
            <form>
  <div className="form-group p-">
    <label className="firstName p-2">First Name</label>
    <input type="text" className="form-control"
     id="exampleFirstName"
     name="firstName"
     value={this.state.firstName}
     onChange={this.onFormFieldChanged}
     />
    <div>
    <label className="lastName p-2">Last Name</label>
    </div>
    <input type="email" className="form-control"
     id="exampleLastName"
     name="lastName"
     value={this.state.lastName}
     onChange={this.onFormFieldChanged}
     />
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
       onChange={this.onFormFieldChanged} />
  </div>
  <div className="form-group">
    <label className="exampleInputPassword1Confirm p-2">Password Confirm</label>
    <input type="password"
     className="form-control"
      id="exampleInputPassword1Confirm"
      name="passwordConfirm"
       placeholder="One More Time"
       value={this.state.passwordConfirm}
       onChange={this.onFormFieldChanged} 
       />
    <label htmlFor="basic-url"></label>
    <div className="input-group mb-3">
    <div className="input-group-prepend">
    <span className="input-group-text">Insert Url here</span>
   </div>
    <input type="text" 
    className="form-control" 
    id="basic-url" 
    value={this.avatarUrl}
    onChange={this.onFormFieldChanged} 
    
    aria-describedby="basic-addon3"/>
    </div>
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


export default RegisterForm 