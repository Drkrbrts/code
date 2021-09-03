import React from "react";
import * as entityServices from "../services/codeChallengeService";

class Product extends React.Component {
  state = {
    formData: { name: " ", manufacturer: " ", description: " ", cost: 32 },
  };

  onButtonClicked = (e) => {
    console.log("Button was clicked");
    const payload = {
      name: this.state.formData.name,
      manufacturer: this.state.formData.manufacturer,
      description: this.state.formData.desctription,
      cost: this.state.formData.cost,
    };
    entityServices
      .newEntity(payload)
      .then(this.onEntitySuccess)
      .catch(this.onEntityError);
  };

  onEntitySuccess = (response) => {
    console.log(response, "Success!");
    return response.data;
  };

  onEntityError = (errResponse) => {
    console.log(errResponse, "Yikes, what happened?");
    return Promise.reject(errResponse);
  };
  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;

      return { formData };
    });
  };

  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            onChange={this.onFormFieldChanged}
            value={this.state.formData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Manufacturer
          </label>
          <input
            type="email"
            className="form-control"
            name="manufacturer"
            id="inputManufacturer"
            onChange={this.onFormFieldChanged}
            value={this.state.formData.manufacturer}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="inputDescription"
            onChange={this.onFormFieldChanged}
            value={this.state.formData.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Cost
          </label>
          <input
            type="text"
            className="form-control"
            name="cost"
            id="inputCost"
            onChange={this.onFormFieldChanged}
            value={this.state.formData.cost}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onButtonClicked()}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Product;
