import React, { Component } from "react";
import * as codeChallenge from "../../services/codeChallenge";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CodeChallenge extends Component {
  state = {
    formData: {},
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onAddProduct = (e) => {
    e.preventDefault();
    e.stopPropagation();

    codeChallenge
      .addProduct(this.state.formData)
      .then(this.onAddProductSuccess)
      .catch(this.onAddProductError);
  };

  onAddProductSuccess = (response) => {
    console.log(response, "Product Added");
    toast.success("Product Added");
    toast.success(response.data.item);
  };

  onAddProductError = (error) => {
    console.error(error);
    toast.error("Fill out all required inputs", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <form className="form-container m-4 col">
            <h1>Add Product</h1>
            <div className="form-group my-3">
              <label htmlFor="name">Name</label>
              <input
                type="input"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                value={this.state.formData.name}
                onChange={this.onFormFieldChange}
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="manufacturer">Manufacturer</label>
              <input
                type="input"
                className="form-control"
                name="manufacturer"
                placeholder="Enter Manufacturer"
                value={this.state.formData.manufacturer}
                onChange={this.onFormFieldChange}
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="description">Description</label>
              <input
                type="input"
                className="form-control"
                name="description"
                placeholder="Enter Description"
                value={this.state.formData.description}
                onChange={this.onFormFieldChange}
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="cost">Cost</label>
              <input
                type="input"
                className="form-control"
                name="cost"
                placeholder="Enter Cost"
                value={this.state.formData.cost}
                onChange={this.onFormFieldChange}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary submit"
              onClick={this.onAddProduct}
            >
              Add Product
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default CodeChallenge;
