import React from "react"
import '../Styles/registration.css'
import 'react-toastify/dist/ReactToastify.css'
import { onLoginPost } from "../ajax"
import {onLoginSuccess,onLoginFailure} from '../successAndFailure.js'


class LogIn extends React.Component{


  state = {
    formData : {
        email : ''
      ,password : ''
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
      email: this.state.formData.email,
      password: this.state.formData.password,
      tenantId: "U0242TU77DX"
    }
    
    onLoginPost(payload)
                .then(onLoginSuccess)
                .catch(onLoginFailure)
  }
  

    render(){
        return (
            <React.Fragment>
                        <form className="container form-box" style={{height:300,width:300}}>
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

export default LogIn