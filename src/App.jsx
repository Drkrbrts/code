import React, { Component } from "react";
import { products } from "./services/userService";
import "./App.css";

class App extends Component {

  onLoginClick = (e)=>{
    e.preventDefault();

    var payload = { name: "react fly", Manufacturer : "Nike",   Description : "running shoes" , Cost : 50
  };
    products(payload)
    console.log("button been clicked", payload)
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
    <input type="text" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Enter Name" />
  </div>

  <div className="form-group">
    <label htmlFor="InputManufacturer">Manufacturer</label>
    <input type="text" className="form-control" id="InputManufacturer" placeholder="Manufacturer"/>
  </div>

  <div className="form-group">
    <label htmlFor="InputDescription">Description</label>
    <input type="text" className="form-control" id="InputDescription" placeholder="Description"/>
  </div>

  <div className="form-group">
    <label htmlFor="InputCost">Cost</label>
    <input type="int" className="form-control" id="InputCost" placeholder="Cost"/>
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
