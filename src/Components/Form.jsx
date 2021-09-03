import React from "react"
import * as userService from "../services/userService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Form extends React.Component {
   state = {
       email: "",
       password: "",
       tenantId: "U01QGVDG1LG"
       
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

        
        let payload = {email: this.state.email,
            password: this.state.password,
            tenantId: this.state.tenantId}
            
    

         
        userService.logIn(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)

          
          

    }

    

    onActionSuccess = response => {
        console.log(this.onItemClicked);
;
};

    onActionError = response => {
        console.warn(this.onItemClicked)
    }
    



    render () {
        return(<React.Fragment><form>
            <div className="form-group">
              <label className="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control"
               id="exampleInputEmail1"
               name="email"
               value={this.state.email}
               onChange={this.onFormFieldChanged}
               />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label className="exampleInputPassword1">Password</label>
              <input type="password"
               className="form-control"
                id="exampleInputPassword1"
                name="password"
                 placeholder="Dont use you birthday, please"
                 value={this.state.password}
                 onChange={this.onFormFieldChanged} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.onItemClicked}>Submit</button>
          </form>
                  <ToastContainer>Sample</ToastContainer></React.Fragment>
            )
    }
}

export default Form 