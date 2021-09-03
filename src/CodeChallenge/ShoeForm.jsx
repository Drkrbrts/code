import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addShoes } from "./productService";

class shoeForm extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.formData;

    addShoes(data).then(this.onActionSuccess).catch(this.onActionError);
    this.props.history.push("/");
  };

  onActionSuccess = (response) => {
    toast.success(
      `${response.name} was added successfully! Item ID is ${response.id}`
    );
  };

  onActionError = (errResponse) => {
    console.log("login error:", { error: errResponse });
    toast.error("Error adding product, please try again!");
  };

  render() {
    return (
      <React.Fragment>
        <div className="Container col-md-6 p-5">
          <div className="form-content-right">
            <form>
              <h1>Add product here:</h1>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  value={this.state.formData.name}
                  onChange={this.onFormFieldChanged}
                  placeholder="Product Name"
                  name="name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Manufacturer</label>
                <input
                  value={this.state.formData.manufacturer}
                  onChange={this.onFormFieldChanged}
                  placeholder="Manufacturer"
                  name="manufacturer"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.formData.description}
                  onChange={this.onFormFieldChanged}
                  placeholder="Description"
                  name="description"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cost</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.formData.cost}
                  onChange={this.onFormFieldChanged}
                  placeholder="Cost"
                  name="cost"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default shoeForm;
