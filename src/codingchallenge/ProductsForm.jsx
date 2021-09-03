import React from "react";
import { addProduct } from "./productsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ProductsForm extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    },
  };

  onFormFieldChange = (e) => {
    // console.log("onFormFieldChange firing", e.currentTarget.value);
    let target = e.currentTarget;
    let newValue = target.value;
    let inputName = target.name;
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;

      return { ...prevState, formData };
    });
  };

  onSubmitClicked = (e) => {
    e.preventDefault();
    console.log("onSubmitClicked", this.state.formData);
    addProduct(this.state.formData)
      .then(this.onAddSuccess)
      .catch(this.onAddError);
  };

  onAddSuccess = (response) => {
    console.log("onAddSuccess firing", response);
    let notify = () =>
      toast.success(
        `The Product: ${response.name} was added with ID: ${response.id}.`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  onAddError = (err) => {
    console.log("onAddError firing", err);
    let notify = () =>
      toast.error("There was an error adding the product.  Try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Hello World!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  values={this.state.formData.name}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                  type="text"
                  className="form-control"
                  id="manufacturer"
                  name="manufacturer"
                  values={this.state.formData.manufacturer}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description">Product Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={this.state.formData.description}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="cost">Cost</label>
                <input
                  type="text"
                  className="form-control"
                  name="cost"
                  value={this.state.formData.cost}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsForm;
