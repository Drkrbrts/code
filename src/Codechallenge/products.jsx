import React, { Component } from 'react';

import * as ProductService  from "../services/productServices"
import { toast } from 'react-toastify';


class Product extends Component {
    state = {
        "Name":"",
        "Manufacturer ":"",
        "Description":"",
        "Cost": "",
        "tenantId":"U01MWSB89L5",
    }




onSubmit = (e) => {
    e.preventDefault();
    console.log( "firing")

    ProductService.createProduct(this.state)
    .then(this.onRegisterSuccess) 
    .catch(this.onRegisterError)

}
onRegisterSuccess = (response) => {
    toast.success("congratulations, Your Registered!")
    console.log("onRegisterSuccess", response)
  
}

onRegisterError = (response) => {
    toast.error("Please fill in the indicated field")
    console.log(response)  
}

onFormFieldCompleted = (e) => {
    console.log(e.currentTarget.name)
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
    let newState = {}
    newState[inputName] = newValue;
    
    return newState;
    });
};

render() {
    return (
        <React.Fragment>
            <main role="main">
                <div className ="container  p-5">
                    <div style={{fontSize:"5em", color:"red"}  }>Products</div>
                  <div className ="row">
                    <div className ="col-md-4 p-5">
                        <form>
                          <div className ="m-3">
                              <label className ="form-label"> Name</label>
                              <input className="form-control"
                              name="Name"
                              onChange={this.onFormFieldCompleted}
                              value={this.state.Name} />
                              </div>
                              
                              <div className ="m-3">
                              <label className ="form-label">Manufacturer</label>
                              <input className="form-control"
                              name="Manufacturer"
                              onChange={this.onFormFieldCompleted}
                              value={this.state.Manufacturer} />
                              </div>

                              <div className ="m-3">
                              <label className ="form-label">Description</label>
                              <input className="form-control"
                              name="Description"
                              onChange={this.onFormFieldCompleted}
                              value={this.state.Description} />
                              </div>

                              <div className ="m-3">
                              <label className ="form-label">Cost</label>
                              <input className="form-control"
                              name="Cost"
                              onChange={this.onFormFieldCompleted}
                              value={this.state.Cost} />
                              </div>
                              <div className ="m-3">
                              <label className ="form-label">ID</label>
                              <input className="form-control"
                              name="passwordConfirm"
                              onChange={this.onFormFieldCompleted}
                              value={this.state.passwordConfirm} />
                              </div>

                              

                              <button
                              type="submit"
                              className="btn btn-info"
                              onClick={this.onSubmit.bind(this)}
                              >Submit
                              </button>
                            </form>
                        </div>
                    </div>

                    <hr />
                </div>
            </main>
        </React.Fragment>
    );
  }
}

export default Product

