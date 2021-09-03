import React from "react"
import '../Styles/registration.css'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {onRegisterFailure ,onRegisterSuccess}  from '../successAndFailure.js'
import {onRegisterPost} from "../ajax"

toast.configure()

class RegForm extends React.Component{


  state = {
    formData : {
      firstName :  ''
      ,lastName : ''
      ,email : ''
      ,password : ''
      ,confirmpassword : ''
      ,avatar : ''
    }
  }

  onChangeState = (e) =>{
    let target = e.currentTarget
    let newValue = target.value;
    let inputName = e.currentTarget.name;
    this.setState(()=>{
      let newState = {...this.state.formData}
      newState[inputName] = newValue;
      
      return {formData:newState}
    })

  }

  onSubmitBtnClick = (e) =>{
    e.preventDefault();

    const payload ={
      firstName: this.state.formData.firstName,
      lastName: this.state.formData.lastName,
      email: this.state.formData.email,
      password: this.state.formData.password,
      passwordConfirm: this.state.formData.confirmpassword,
      avatarUrl: this.state.formData.avatar,
      tenantId: "U0242TU77DX"
    }
    onRegisterPost(payload)
          .then(onRegisterSuccess)
          .catch(onRegisterFailure)

  }


    render(){
        return (
            <React.Fragment>

                        <form className="container form-box" style={{width: 400}}>
                            <div className="form-group">
                                <input 
                                className="firstName"  
                                name="firstName" 
                                placeholder="First Name" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.firstName}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="lastName" 
                                name="lastName" 
                                placeholder="Last Name" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.lastName}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="email" 
                                name="email" 
                                placeholder="Email" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.email}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="password" 
                                name="password" 
                                placeholder="Password" 
                                type="password" 
                                onChange={this.onChangeState}
                                value={this.state.formData.password}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="confirmPassword" 
                                name="confirmpassword" 
                                placeholder="Confirm Password" 
                                type="password" 
                                onChange={this.onChangeState}
                                value={this.state.formData.confirmpassword}
                                />
                            </div>
                            <div className="form-group">
                                <input className="avatar" 
                                name="avatar" 
                                placeholder="Avatar URL" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.avatar}
                                />
                            </div>
                            <button 
                                className="btn" 
                                type="submit"
                                onClick={this.onSubmitBtnClick}
                            >Submit</button>
                            </form>
             
            </React.Fragment>
        )
    }
}

export default RegForm