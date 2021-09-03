import React from "react"
import * as userService from "../services/userService";
import 'rc-pagination/assets/index.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
class Registration extends React.Component {
    state = {
      formData: { InputfName: ""
                , InputlName: ""
                , InputEmail: "" 
                , InputPass: ""
                , InputPassConf: ""
                , InputAvatar: ""
                //  isModalopen: false,
                //  hasMadeAjax:  true,
                //  arrayfComp: [],
    }
  };
  onChange = event => {
    // console.log(event)
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(prevState => {
      const updatedFormData = {
        ...prevState.formData
      };
      updatedFormData[name] = value;
      return { formData: updatedFormData };
    }, this.stateChanged);
  };
  
  onSubmitRegClicked = (data) =>{
    console.log("Registration submitted!")
    var formData = {
      firstName: "Khanh",
      lastName: "Nguyen",
      email: "kh4nhnguyen625@gmail.com",
      password: "Password1234!",
      passwordConfirm: "Password1234!",
      avatarUrl: "https://gravatar.com/avatar/aff87eb9ffdc35302adca5176fcb9d25?s=400&d=robohash&r=x",
      tenantId: "lol123"
    }
    userService.register(formData)
    .then(this.onActionSuccess)
    .catch(this.onActionError);
  }
onActionSuccess = (response) => { toast.succeess()
   console.log("Submitted!")
}
onActionError= (errResponse) => { toast.error()
  console.log("Error!")
}
    render() {
        return  <form>
        <font size="+4">
        Registeration Form
        </font>
        <div className="mb-3">
          <label htmlFor="exampleFirstName" className="form-label">First Name</label>
          <input 
          type="text" 
          className="form-control" 
          name="InputfName"
          id="InputfName"
          value={this.state.formData.InputfName} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleLastName" className="form-label">Last Name</label>
          <input 
          type="text"
          className="form-control" 
          name="InputlName"
          id="InputlName" 
          value={this.state.formData.InputlName} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email</label>
          <input 
          type="email" 
          className="form-control" 
          name="InputEmail"
          id="InputEmail" 
          value={this.state.formData.InputEmail} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
          type="text" 
          className="form-control" 
          name="InputPass"
          id="InputPass" 
          value={this.state.formData.InputPass} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConf" className="form-label">Confirm Password</label>
          <input 
          type="text" 
          className="form-control" 
          name="InputPassConf"
          id="InputPassConf" 
          value={this.state.formData.InputPassConf} 
          onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleAvatarUrl" className="form-label">Avatar Url</label>
          <input 
          type="text" 
          className="form-control" 
          name="InputAvatar"
          id="InputAvatar" 
          value={this.state.formData.InputAvatar} 
          onChange={this.onChange}
          />
        </div>
        <div>
        <button 
            type="button" 
            className="btn btn-primary"
            style={{float: 'left'}}
            onClick={this.onSubmitRegClicked}
            onChange={this.onChange}
            >
            Register
            </button>
          </div>
          <br></br>
          <br></br>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
             I agree to the terms
            </label>
          </div>
          <div>
            <a href="url">Already have an account?</a>
          </div>
      </form>
    }
}
export default Registration;




















