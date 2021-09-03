import React, { Component } from "react";
//import axios from "axios";
//import ButtonClickEvent from "./components/jumbo";
//import Fruits from "./components/Fruits";
//import Contacts from "./components/Contacts";
//import { BrowserRouter, Route ,NavLink } from "react-router-dom";
import Button from "./services/loginButtonServices";
import success from "./services/toasterSuccess"
import "./App.css";


class App extends Component {

  // Implement Click Handler 
  onbuttonClick=()=>{
    console.log("onbuttonClick", new Date());
  };

  state = {
    buttonClick: "unclicked",
    formData: {
              emailAddress:" ",
              passwordOriginal: "",
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
        <header className="p-3 bg-dark text-white">
        </header>

        <main role="main">
         <div class="container">
        <div class="row">
            <h1>Login Form</h1>
        </div>
        <div class="row">

            <div class="col-6">
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
                    <div>
                        <br></br>
                        {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        <Button click={this.clickChange} submitdata = {this.state.formData}  />
                    </div>
                    
                <success/>
                  
                    
                {/* </form> */}
            </div>
          </div>
    </div> 
        </main>

        <footer className="container">
        <row>
        <div>
        {/* <NavLink to="/Contacts">Contact Us</NavLink>
        <Route  path="/Contacts" exact component={Contacts}> Sabio@test.email.com</Route> */}
        </div>
          {/* <div>
                    <Route path="/Fruits" component={Fruits}>fruits</Route> 
          </div> */}
        </row>                 
          <p>&copy; Sabio 2019-2020</p>
        </footer>
        {/* </BrowserRouter> */}
      </React.Fragment>
    );
  }
}

export default App;
