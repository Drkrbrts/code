import React from 'react'
import * as userService from './auth/userService'
import {toast} from 'react-toastify'

import debug from 'sabio-debug'
const _logger = debug.extend("App")


class Login extends React.Component {

    state = {
        formData: { tenantId: 'U026KJPV4BY' }
    }

    onChange = event => {
        _logger('onChange', {syntheticEvent: event})

        const target = event.target
        const value = target.value
        const name = target.name

        this.setState(prevState => {
            _logger('update onChange')
            var updatedFormData = {...prevState.formData}
            updatedFormData[name] = value

            return {formData: updatedFormData}
        }, this.stateChanged)

        _logger('end onChange')
    }

    onSubmitClick = (e) => {
        e.preventDefault()
        console.log('Submit was clicked')
        console.log(this.state.formData)
        userService.logIn(this.state.formData)
        .then(this.onLogInSuccess)
        .catch(this.onLogInError)
    }

    

    onLogInSuccess = (response) => {
        console.log(response)
        toast.success('Login Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        userService.getCurrentUser()
        .then(this.onGetCurrentUserSuccess)
        .catch(this.onGetCurrentUserError)
    }

    onGetCurrentUserSuccess = (response) => {
        console.log(response)
        userService.getById(response.data.item.id)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError)
    }

    onGetByIdSuccess = (response) => {
        console.log(response.data.item)
        this.props.handleLogin(response.data.item)
        this.props.history.push('/home')
    }

    onGetByIdError = (response) => 
    {
        console.log({error: response})
    }

    onGetCurrentUserError = (response) => 
    {
        console.log({error: response})
    }

    onLogInError = (response) => 
    {
        console.log({error: response})
        toast.error('Login Error!', {
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
        <div className="container">
            <h1>Login</h1>
            <form className="my-4">
                <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className='form-control' id='email' onChange={this.onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="pword">Password</label>
                    <input type="password" name="password" className="form-control" id='pword' onChange={this.onChange}/>
                </div>
                <button className="btn btn-outline-primary my-4" id="form-submit" onClick={this.onSubmitClick}>Submit</button>
            </form>
        </div>
    )        
    }
}

export default Login