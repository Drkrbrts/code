import React from "react"
import * as userService from "../services/userService";
import {toast } from "react-toastify"
import SiteNav from "../SiteNav";



class Register extends React.Component{


    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            avatarUrl: '',
            tenantId: "U02B8F0JPGC",
            check: ""
        }
    }
    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget
        let newValue = currentTarget.type === 'checkbox' 
            ? currentTarget.checked 
            : currentTarget.value
        let inputName = currentTarget.name
        
        this.setState(() => {
            let formData = {...this.state.formData}
            formData[inputName] = newValue
            // console.log(newState.firstName, {newState} )
            // console.log(newState.lastName, {newState} )
            return {formData}
           })
    }

    onRegisterClick = (e) => {
       e.preventDefault()
        userService.register(this.state.formData)
          .then(this.onActionSuccess)
          .catch(this.onActionError);
    }
    onActionSuccess = (response) => {
        if (response) {
            this.props.history.push('/Login')
            toast.success('✅ Registration Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
       }
    
    onActionError= (errResponse) => {
        if(errResponse) {
            this.props.history.push('/Register')
            toast.error('❌ Registration failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
       }

    render() {
        return (
            <React.Fragment>
                {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                /> */}
                <header><SiteNav/></header>
    <div className='col-6 form '>
        
    <form  className= 'card p-3 bg-white'>
        <div className='form-title text-center '>Register a new membership</div>
    <div className="mb-3">
    <input type="text"  name="firstName" className="form-control" id="InputfirstName" placeholder="First name" onChange={this.onFormFieldChange} value={this.state.formData.firstName}/>
    
  </div>
  <div className="mb-3">
    <input type="text" name="lastName" className="form-control" id="InputlastName" placeholder="Last name" onChange={this.onFormFieldChange} value={this.state.lastName}/>
  </div>
  <div className="mb-3 " >
    <input type="email"  name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email" onChange={this.onFormFieldChange} value={this.state.formData.email}/>
  </div>
  <div className="mb-3">
    <input type="password"  name="password" className="form-control" id="InputPassword1" placeholder="Password" onChange={this.onFormFieldChange} value={this.state.password}/>
  </div>
  <div className="mb-3">
    <input type="password"  name="passwordConfirm" className="form-control" id="InputPassword2" placeholder="Retype password" onChange={this.onFormFieldChange} value={this.state.formData.passwordConfirm}/>
  </div>
  <div className="mb-3">
    <input type="text"  name="avatarUrl" className="form-control" id="InputAvatar" placeholder="Avatar Url" onChange={this.onFormFieldChange} value={this.state.formData.avatarUrl}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="check" name='check' onChange={this.onFormFieldChange} value='check' checked={this.state.formData.check}/>
    <label className="form-check-label text-secondary" ><strong>I agree to the <a href="#">terms.</a></strong></label>
  <button type="submit" className="btn btn-primary reg " onClick={this.onRegisterClick}>Register</button>
  <div><a href="Login" >Already have an account?</a></div>
  </div>
  
</form>

</div>


            </React.Fragment>
        )}


} 

export default Register