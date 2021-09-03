import React from "react";
import { toast } from "react-toastify";
import * as productsService from "./productsService";

class Product extends React.Component {
  state = {
    product: {
      name: "",
      manufacturer: "",
      description: "",
      cost: 0,
    },
  };

  onChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState((prevState) => {
      let product = { ...prevState.product };
      product[inputName] = inputValue;
      return { product };
    });
  };

  submitProduct = (e) => {
    console.log("Submitting product registration!");
    let productData = { ...this.state.product };
    console.log(productData);

    productsService
      .productReg("products", productData)
      .then(this.onRegSuccess)
      .catch(this.onRegError);
  };

  onRegSuccess = (response) => {
    toast.success("Product Registration Approved for ID:" + response.id);
  };

  onRegError = (response) => {
    console.log(response);
    toast.error("Product Registration Failed, Please Try Again");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form
            style={{ width: "500px", marginLeft: "center", margin: "auto" }}
          >
            <div className="input-container">
              <h3>Input Your Product Data Here!</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.onChange}
                required
              ></input>
            </div>
            <div className="input-container">
              <input
                type="text"
                name="manufacturer"
                placeholder="Manufacturer"
                onChange={this.onChange}
                required
              ></input>
            </div>
            <div className="input-container">
              <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={this.onChange}
                required
              ></input>
            </div>
            <div className="input-container">
              <input
                type="text"
                name="cost"
                placeholder="Cost"
                onChange={this.onChange}
                required
              ></input>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary submit"
                type="button"
                onClick={this.submitProduct}
              >
                Submit Product
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
