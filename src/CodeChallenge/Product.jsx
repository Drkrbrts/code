import React from "react";
import { toast } from "react-toastify";
import { add } from "./entitiesService";

class Product extends React.Component {
  state = {
    name: "",
    manufacturer: "",
    description: "",
    cost: 0,
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    // console.log(currentTarget);
    let newValue = currentTarget.value;
    // console.log(newValue);
    let inputName = currentTarget.name;
    // console.log(inputName);

    this.setState(() => {
      let newState = {};

      newState[inputName] = newValue;
      console.log(newState);

      return newState;
    });
  };

  onSumbitClicked = (e) => {
    e.preventDefault();
    console.log("Submit Clicked", this.state);

    add(this.state).then(this.onAddSuccess).catch(this.onAddError);
  };

  onAddSuccess = (response) => {
    console.log(response, "onAddSuccess");
    toast.success(
      `Congratulation! Your product ${response.data.item}  was successfully created!`
    );
  };

  onAddError = (error) => {
    console.warn(error, "onAddError");
  };

  render() {
    return (
      <React.Fragment>
        <form id="productForm">
          <div>
            <h5 style={{ textAlign: "center" }}>Enter Product Here</h5>
            <input
              type="text"
              className="form-control"
              style={{ marginTop: "20px" }}
              placeholder="Name"
              name="name"
              onChange={this.onFormFieldChanged}
              value={this.state.name}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Manufacturer"
              name="manufacturer"
              onChange={this.onFormFieldChanged}
              value={this.state.manufacturer}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              onChange={this.onFormFieldChanged}
              value={this.state.description}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Cost"
              name="cost"
              onChange={this.onFormFieldChanged}
              value={this.state.cost}
            />
            <br />

            <input
              onClick={this.onSumbitClicked}
              className="btn-register"
              style={{ margin: 0 }}
              type="button"
              value="Submit"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Product;
