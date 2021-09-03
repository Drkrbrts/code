import React from "react";
import * as productService from "../../services/productService";
import { toast } from "react-toastify";

class Product extends React.Component {
  state = {
    formData: {
      productName: "",
      manufacturer: "",
      productDescription: "",
      productCost: "",
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;

    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  addProduct = (e) => {
    e.preventDefault();
    let productPayload = { ...this.state.formData };
    productPayload.productCost = parseInt(productPayload.productCost);

    console.log(productPayload);

    productService
      .add(productPayload)
      .then(this.onAddProductSuccess)
      .catch(this.onAddProductError);
  };

  onAddProductSuccess = (response) => {
    let itemId = response.data.item;
    toast.success(`Item ${itemId} added!`);

    this.setState((prevState) => {
      let formData = { ...prevState };
      formData.productName = "";
      formData.manufacturer = "";
      formData.productDescription = "";
      formData.productCost = "";

      return { formData };
    });
  };

  onAddProductError = () => {
    toast.error("Unable to add product");
  };

  render() {
    return (
      <div className="container mx-auto my-5">
        <div className="row">
          <form className="col-md-10 mx-auto">
            <div className="mx-auto">
              <h3>Add A New Product</h3>
            </div>
            <div className="form-group">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                name="productName"
                aria-label="Product Name"
                value={this.state.formData.productName}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="manufacturer" className="form-label">
                Manufacturer
              </label>
              <input
                type="text"
                className="form-control"
                name="manufacturer"
                aria-label="Manufacturer"
                value={this.state.formData.manufacturer}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="productDescription" className="form-label">
                Product Description
              </label>
              <input
                type="text"
                className="form-control"
                name="productDescription"
                aria-label="Product description"
                value={this.state.formData.productDescription}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="productCost" className="form-label">
                Item Cost
              </label>
              <input
                type="text"
                className="form-control"
                name="productCost"
                aria-label="Product Cost"
                value={this.state.formData.productCost}
                onChange={this.onFormFieldChange}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary px-5 mt-3"
              name="addProduct"
              onClick={this.addProduct}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Product;
