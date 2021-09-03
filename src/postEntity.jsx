import React, { Component } from "react";
import postThis from "./services/EntityButtonService";
import "./App.css";
<link href="toastr.css" rel="stylesheet"/>


class App extends Component {

  // Implement Click Handler 
  onbuttonClick=()=>{
    console.log("onbuttonClick", new Date());
  };

  state = {
    buttonClick: "unclicked",
    formData: {
              Name:"",
              Manufacturer: "",
              Description: "",
              Cost: 0,
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
                        <label for="Name" class="form-label">First Name</label>
                        <input type="text" id="Name" name="Name"class="form-control"
                            onChange={this.onFormFieldChange} placeholder="Enter Entity Name" 
                            value = {this.state.formData.Name} />
                    </div>
                    <div class="form-group">
                        <label for="Manufacturer" class="form-label">First Name</label>
                        <input type="text" id="Manufacturer" name="Manufacturer"class="form-control"
                            onChange={this.onFormFieldChange} placeholder="Enter Manufacture Name" 
                            value = {this.state.formData.Manufacturer} />
                    </div>
                    <div class="form-group">
                        <label for="Description" class="form-label">First Name</label>
                        <input type="text" id="Description" name="Description"class="form-control"
                            onChange={this.onFormFieldChange} placeholder="Enter Description" 
                            value = {this.state.formData.Description} />
                    </div>
                    <div class="form-group">
                        <label for="Cost" class="form-label">Cost</label>
                        <input type="number" id="Cost" name="Cost"class="form-control"
                            onChange={this.onFormFieldChange} placeholder="Enter Cost" 
                            value = {this.state.formData.Cost} />
                    </div>
                    <div>
                        <br></br>
                        {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        <postThis click={this.clickChange} submitdata = {this.state.formData}  />
                    </div>
                    <div>
                    <script src="toastr.js"></script>
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
