import React from "react";
import * as entitiesService from "../../services/entitiesService";
import { toast } from "react-toastify";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        manufacturer: "",
        description: "",
        cost: 0,
      },
    };
  }

  onFormFieldChange = (e) => {
    let newValue = e.currentTarget.value;
    let inputName = e.currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.product };

      formData[inputName] = newValue;

      return { product: formData };
    });
  };

  onCreateClick = (e) => {
    e.preventDefault();
    entitiesService
      .add(this.state.product)
      .then(this.onAddSuccess)
      .catch(this.onAddError);
  };
  onAddSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return { entityAddedId: response.data.item };
    });
    toast.success(`Product Created! ID: ${this.state.entityAddedId}`);
  };
  onAddError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <form className="container shadow col-md-6 border border-light bg-white rounded">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.product.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturer">Product Manufacturer</label>
          <input
            name="manufacturer"
            type="text"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.product.manufacturer}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.product.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Product Cost</label>
          <input
            name="cost"
            type="number"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.product.cost}
          />
        </div>
        <button
          type="button"
          className="mt-2 mb-2 btn btn-primary"
          onClick={this.onCreateClick}
        >
          Confirm
        </button>
      </form>
    );
  }
}
