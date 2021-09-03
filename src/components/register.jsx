import React from 'react'
import * as userService from './auth/userService'
import {toast} from 'react-toastify'

class Register extends React.Component{

    state = {
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            avatarUrl: '',
            tenantId: 'U026KJPV4BY'
        }
    }
    

    onChange = event => {
        console.log('onChange', {syntheticEvent: event})
        var target = event.target
        var value = target.value
        var name = target.name
        console.log(value, name)

        this.setState(prevState => {
            console.log('updater onChange')
            const updatedFormData = {
                ...prevState.formData
            }

            updatedFormData[name] = value;

            return { formData: updatedFormData}
        }, this.stateChanged)

        console.log('end onChange')
    }

    onSubmitClick = (e) => {
        e.preventDefault()
        console.log('submit was clicked', this.state)
        userService.logIn(this.state.formData)
        .then(this.onLoginSuccess)
        .catch(this.onLoginError)

    }

    onLoginSuccess = (response) => {
        console.log(response)
        toast.success('Login Success!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    onLoginError = (response) => {
        console.log({error: response})
        toast.error('Register Error!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    render() {
        return(
            <div className="container">
            <h1>Register User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="fName" className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" id="fName" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" name="lastName" className='form-control' id='lName' onChange={this.onChange} />
                </div>
                <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className='form-control' id='email' onChange={this.onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="pword">Password</label>
                    <input type="password" name="password" className="form-control" id='pword' onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPWord">Confirm Password</label>
                    <input type="password" name="confirmPassword" className='form-control' id='confirmPWord' onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar Url</label>
                    <input type="url" name="avatarUrl" className="form-control" id="avatar" onChange={this.onChange}/>
                </div>
                <button onClick={this.onSubmitClick} className="btn btn-outline-primary my-4" id="form-submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default Register