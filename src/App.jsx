import React, { Component } from "react";
import { products } from "./services/userService";
import "./App.css";



class App extends Component {
constructor(props){
  super(props);
  this.state = {Name: "", Manufacturer : "", Description : "", Cost : ""};

  this.onLoginClick = this._handleSubmit.bind(this);
}


  onLoginClick = (e)=>{
      e.preventDefault();
      this.setState({Name: "", Manufacturer : "", Description : "", Cost : ""})
   
    products();

    console.log("button been clicked")
  }
  render() {
    return (
      <React.Fragment>
      <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-3">

              <form>
  <div className="form-group">
    <label htmlFor="InputName">Name</label>
    <input type="text" className="form-control" id="InputName" value={this.state.Name} aria-describedby="nameHelp" placeholder="Enter Name" />
  </div>

  <div className="form-group">
    <label htmlFor="InputManufacturer">Manufacturer</label>
    <input type="text" className="form-control" id="InputManufacturer" value={this.state.Manufacturer} placeholder="Manufacturer"/>
  </div>

  <div className="form-group">
    <label htmlFor="InputDescription">Description</label>
    <input type="text" className="form-control" id="InputDescription"value={this.state.Description}  placeholder="Description"/>
  </div>

  <div className="form-group">
    <label htmlFor="InputCost">Cost</label>
    <input type="int" className="form-control" id="InputCost"value={this.state.Cost}  placeholder="Cost"/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={this.onLoginClick}>Submit</button>
</form>
           
              </div>
              </div>
            <hr />
          </div>
        </main>

        <footer className="container">
          <p>&copy; Sabio 2019-2020</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
