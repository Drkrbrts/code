import React from "react";
import { data } from "jquery";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formData: this.propsToFormData(this.props) };
  }

  propsToFormData(props) {
    const item = {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    };
    return item;
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: value };
      return { formData: formData };
    });
  };

  successToast = () => {
    toast("You Created a Product", data.item, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  errorToast = () => {
    toast(" Something went worng!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  createProductsuccess = () => {
    console.log("You did it!!", data);
    this.successToast();
  };

  onProductError = (error) => {
    console.log("you goofed up", { error });
    this.errorToast();
  };

  onProductClick = (event) => {
    event.preventDefault();
    const product = {
      ...this.state.formData,
    };

    if (this.state.formData) {
      userService
        .products(product)
        .then((data) => {
          this.createProductsuccess();
        })
        .catch(this.onProductError);
    }
  };

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
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      aria-describedby="nameHelp"
                      placeholder="Enter Name"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputManufacturer">Manufacturer</label>
                    <input
                      type="text"
                      id="manufacturer"
                      name="manufacturer"
                      className="form-control"
                      value={this.state.manufacturer}
                      placeholder="Manufacturer"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputDescription">Description</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      placeholder="Description"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputCost">Cost</label>
                    <input
                      type="int"
                      id="cost"
                      name="cost"
                      className="form-control"
                      value={this.state.cost}
                      placeholder="Cost"
                      onChange={this.onChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onProductClick}
                  >
                    Submit
                  </button>
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
export default ProductForm;
