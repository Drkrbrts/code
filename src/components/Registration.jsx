import React from "react"
import * as userService from "../services/userService";
import 'rc-pagination/assets/index.css'



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
      firstName: "Danny",
      lastName: "Dang",
      email: "DannyDang123.com",
      password: "Password123!",
      passwordConfirm: "Password123!",
      avatarUrl: "https://gravatar.com/avatar/aff87eb9ffdc35302adca5176fcb9d25?s=400&d=robohash&r=x",
    }

    userService.register(formData)
    .then(this.onActionSuccess)
    .catch(this.onActionError);
  }

onActionSuccess = (response) => {
   console.log("Submitted!")
}

onActionError= (errResponse) => {
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
  
  