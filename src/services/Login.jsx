import React from "react"
import * as userService from "../services/userService";
import { toast } from "react-toastify";



class Login extends React.Component{

    state = {
        formData: {
            email: '',
            password: '',
            tenantId: "U02B8F0JPGC"
        }
    }
    onFormChange = (e) => {
        let currentTarget = e.currentTarget
        let newValue = currentTarget.value
        let inputName = currentTarget.name
        
        this.setState(() => {
            let formData = {...this.state.formData}
            formData[inputName] = newValue
            return {formData}
           })
    }

    onLoginClick = (e) => {
       e.preventDefault()
        userService.logIn(this.state.formData)
          .then(this.onActionSuccess)
          .catch(this.onActionError);
    }
    onActionSuccess = (response) => {
        if (response) {
            this.props.history.push('/Home')
            toast.success('✅ Sign In Successful', {
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
            this.props.history.push('/Login')
            toast.error('❌ Sign In failed', {
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
                

<form className= 'wider card p-4 bg-white col-xs-6 col-sm-3'>
  <div className="mb-3">
  <div className='form-login text-center text-secondary '>Sign In</div>
    <label htmlFor="exampleInputEmail1" className="form-label"></label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={this.onFormChange} value={this.state.formData.email}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"></label>
    <input type="password" name='password' className="form-control input-sm" id="exampleInputPassword1" placeholder="Password" onChange={this.onFormChange} value={this.state.formData.password}/>
  </div>
  <div className="mb-3 form-check">
  <div><a className="pass" href="#">I forgot my password</a>
  <button type="submit"  className="btn btn-primary si" onClick={this.onLoginClick}>Sign In</button>
  </div>
  <div className="pull-right"><a href="/Register">Register a new membership</a></div>
  
  </div>
</form>

            </React.Fragment>
        )}

}

export default Login