import React from "react";
import * as productServices from "./productServices";
import { toast } from "react-toastify";

class Products extends React.Component {
  state = {
    product: {
      productName: "",
      manufacturer: "",
      description: "",
      cost: 100,
    },
  };

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(() => {
      let updatedFormData = { ...this.state.product };

      updatedFormData[name] = value;

      return { product: updatedFormData };
    });
  };

  onClickCreate = (e) => {
    e.preventDefault();

    const payload = { ...this.state.product };

    productServices
      .createProduct(payload)
      .then(this.createSuccess)
      .catch(this.createError);
  };

  createSuccess = (response) => {
    toast.success("Product Created! Your Product ID is: " + response.data.item);
    console.log(response);
  };

  createError = (error) => {
    toast.error("Please try again.");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <main>
            <h2>Create a Product!</h2>
          </main>
          <form>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="productName"
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="manufacturer" className="form-label">
                Manufacturer
              </label>
              <input
                type="text"
                className="form-control"
                name="manufacturer"
                onChange={this.onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                onChange={this.onChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="cost" className="form-label">
                Cost
              </label>
              <input
                type="text"
                className="form-control"
                name="cost"
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary register"
              onClick={this.onClickCreate}
            >
              Create
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
