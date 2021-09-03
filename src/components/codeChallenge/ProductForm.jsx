import React from "react";
import { toast } from "react-toastify";
import * as productService from "./productService";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      manufacturer: "",
      description: "",
      cost: undefined,
    };
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };

  onSubmitClicked = () => {
    productService
      .createProduct(this.state)
      .then(this.onCreateProductSuccess)
      .catch(this.onCreateProductError);
  };

  onCreateProductSuccess = (response) => {
    console.log(response);
    toast.success(
      `Successfully created a product with product ID: ${response.data.item}`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      }
    );
  };

  onCreateProductError = (err) => {
    console.warn(err);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <h6 style={{ textAlign: "center" }}>Create a Product</h6>
            <div className="container-fluid py-4">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="manufacturer"
                    placeholder="manufacturer"
                    value={this.state.manufacturer}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Manufacturer</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Password"
                    value={this.state.description}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    className="form-control"
                    name="Cost"
                    placeholder="cost"
                    value={this.state.cost}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Cost</label>
                </div>
              </form>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.onSubmitClicked}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductForm;
