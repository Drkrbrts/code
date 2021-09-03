import React from "react"
import * as userService from "../services/userService";
import 'rc-pagination/assets/index.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


class Login extends React.Component {

onLoginButtonClicked = (data) =>{
  
   
  var payload = { email: "kh4nhcodes@gmail.com", password: "Password1234!", tenantId:"U025RDS34CC" };
   
      userService.logIn(payload)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  }
   
      onActionSuccess = (response) => {
        console.log("Logged in!")
 }
      
      onActionError= (errResponse) => {
       console.log("Error!")
}  

  state = {
    formData: { InputEmail: "" 
               , InputPass: ""
               
              //  isModalopen: false,
              //  hasMadeAjax:  true,
              //  arrayfComp: [],
  
  }
};
  
  // onFormFieldChanged = (e) => {
  //   const currentTarget = e.currentTarget;
  //   const newValue = currentTarget.value;
  //   const inputName = currentTarget.name;
  //   console.log({newValue, currentTarget})


  //   this.setState((prevState)=>{
  //     const formData = {...this.state.formData};

  //     formData[inputName] = newValue;
      

  //     return {formData}; 
  //   });
  // };
  
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
      email: "",
      password: "",
    }

    userService.logIn(formData)
    .then(this.onActionSuccess)
    .catch(this.onActionError);
  }

 onActionSuccess = (response) => { toast.success('Registration Success')
  console.log("Submitted!")
  }
  onActionError= (errResponse) => { toast.error('Registration Failed')
  console.log("Error!")
  }




    render() {
        return  <form>
        <font size="+4">
        Login Page
        </font>

        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email</label>
          <input 
          type="email" 
          className="form-control" 
          name="InputEmail"
          id="InputEmail" 
          placeholder="Enter Email"
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
          placeholder="Enter Password"
          value={this.state.formData.InputPass} 
          onChange={this.onChange}
          />
        </div>
        <div>
        <button 
            type="button" 
            className="btn btn-primary"
            style={{float: 'left'}}
            onClick={this.onLoginButtonClicked}
            onChange={this.onChange}
            >
            Sign in
            </button>
          </div>

        <br></br>
        <br></br>
          <div>
            <a href="url">I forgot my password</a>
          </div>
          <div>
            <a href="url">Register a new membership</a>
          </div>
      </form>
      
    }
}

export default Login;


// <main>
//   <div className="container">
//     <div className="row">
//       <div className="col-md-4 p-5">
//         <form>
//           <div className="form-group">
//               <label>Text box</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="InputfName"
//                   name="InputfName"
//                   onChange={this.state.onFormFieldChanged}
//                   value="{this.state.InputfName"
//                   />
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </main>
  
  