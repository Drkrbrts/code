import React, { Component } from "react";
import {SignUp} from "../services/buttonServices";
import success from "../services/toasterSuccess"
import 'rc-pagination/assets/index.css'
//import "./App.css";


class Register extends Component {

  // Implement Click Handler 
  onbuttonClick=(e)=>{
    console.log("onbuttonClick", new Date());
  };

  state = {
    buttonClick: "unclicked",
    formData: {
              firstName: "",
              lastName: "",
              emailAddress:" ",
              passwordOriginal: "",
              passwordConfirm: "",
              avatarURL: "",
              },
    

  };
  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value
    let inputName = currentTarget.name;
    console.log({newValue, currentTarget});

    this.setState(()=>{
      let formData = {...this.state.formData};
      formData[inputName] = newValue;
      console.log({formData});

      return {formData};
    });
  }
  


  clickChange = () => {
    this.setState({
      buttonClick: "clicked"
    });
    console.log("Clicked")
  };
  
// componentDidMount() {
//   console.log("componentDidMount");
//   console.log(this.state);
// }

  render() {
    return (
      <React.Fragment>
        {/* <BrowserRouter> */}
        {/* <header className="p-3 bg-dark text-white">
        </header> */}
        <br/>
        <br/>
         <div class="container">
        <div class="row">
            <h1>Registration Form</h1>
        </div>
        {/* <div class="row"> */}

            {/* <div class="col-6"> */}
                {/* <form id="firstForm"> */}
                    <div class="form-group">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" id="firstName" name="firstName"class="form-control"
                            onChange={this.onFormFieldChange} placeholder="Enter First Name" 
                            value = {this.state.formData.firstName} />
                    </div>
                    <div class="form-group">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" id="lastName" name="lastName"class="form-control"
                            onChange={this.onFormFieldChange} placeholder="Enter last Name" 
                            value={this.state.formData.lastName}/>
                    </div>
                    <div class="form-group">
                        <label for="emailAddress" class="form-label">Email address</label>
                        <input type="email" class="form-control email" id="emailAddress"
                            name="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" 
                            onChange={this.onFormFieldChange}
                            value={this.state.formData.emailAddress}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div class="form-group">
                        <label for="passwordOriginal" class="form-label">Password</label>
                        <input type="password" class="form-control" id="passwordOriginal"
                            onChange={this.onFormFieldChange} name="passwordOriginal" placeholder="Password"
                            value={this.state.formData.passwordOriginal}/>
                    </div>
                    <div class="form-group">
                        <label for="passwordConfirm" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="passwordConfirm"
                            onChange={this.onFormFieldChange} name="passwordConfirm" placeholder="Confirm Password"
                            value={this.state.formData.passwordConfirm}/>
                    </div>
                    <div class="form-group">
                        <label for="avatarURL" class="form-label">Avatar</label>
                        <input type="url"  class="form-control" id="avatarURL"
                            onChange={this.onFormFieldChange} name="avatarURL" placeholder="Avatar Url"
                            value={this.state.formData.avatarURL}/>
                    </div>              
                    <div>
                        <br></br>
                        {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        <SignUp click={this.clickChange} submitdata = {this.state.formData}  />
                    </div>
                    
                <success/>
                  
                    
                {/* </form> */}
            {/* </div> */}
          {/* </div> */}
    </div> 
        {/* </BrowserRouter> */}
      </React.Fragment>
    );
  }
}

export default Register;
