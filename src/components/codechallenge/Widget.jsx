import React from "react";
import entityService from "./entityService";
import { toast } from "react-toastify";

class Widget extends React.Component {
  state = {
    formData: {
      Name: [""],
      Manufacturer: [""],
      Description: [""],
      Cost: [0],
      entityName: "",
    },
  };

  onSubmitClicked = (e) => {
    e.preventDefault();
    var updateData = this.state.formData;
    console.log(updateData);

    // updateData.Name = this.state.formData.Name.split(",");
    // updateData.Manufacturer = this.state.formData.Manufacturer.split(",");
    // updateData.Cost = this.state.formData.Cost.split(",");
    // updateData.Description = this.state.formData.Description.split(",");

    entityService
      .add(updateData)
      .then(this.onAddSuccess)
      .catch(function (response) {
        console.log(response);
      });
  };
  onAddSuccess = (response) => {
    console.log("addSuccess", response);
    let id = response.data.item;

    toast.success(`🦄 Log in Success, ID=${id}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log(newValue);

    // const newInput = {};
    // newInput.formData.Name = newValue.Name;
    // newInput.formData.Manufacturer = newValue.Manufacturer;
    // newInput.formData.Description = newValue.Description;
    // newInput.formData.Cost = newValue.Cost;
    // newInput.entityName = newValue.entityName;

    console.log({ newValue, currentTarget });
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  render() {
    return (
      <form id="formTemplate">
        <div className="row g-3 align-items-center">
          <div className="row mb-3">
            <div className="col-1">
              <label htmlFor="inputentityNameLabel" className="col-form-label">
                entityName
              </label>
            </div>
            <div className="col-sm-5">
              <input
                type="entityName"
                id="inputentityName"
                className="form-control"
                name="entityName"
                onChange={this.onFormFieldChange}
                value={this.state.entityName}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1">
              <label htmlFor="inputBioLabel" className="col-form-label">
                Name
              </label>
            </div>
            <div className="col-sm-5">
              <input
                type="Name"
                id="inputName"
                className="form-control"
                name="Name"
                onChange={this.onFormFieldChange}
                value={this.state.formData.Name}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1">
              <label
                htmlFor="inputManufacturerLabel"
                className="col-form-label"
              >
                Manufacturer
              </label>
            </div>
            <div className="col-sm-5">
              <input
                type="Manufacturer"
                id="inputManufacturer"
                className="form-control"
                name="Manufacturer"
                onChange={this.onFormFieldChange}
                value={this.state.formData.Manufacturer}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1">
              <label htmlFor="inputDescriptionLabel" className="col-form-label">
                Description
              </label>
            </div>
            <div className="col-sm-5">
              <input
                type="Description"
                id="inputDescription"
                className="form-control"
                name="Description"
                onChange={this.onFormFieldChange}
                value={this.state.formData.Description}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-1">
              <label htmlFor="inputCostLabel" className="col-form-label">
                Cost
              </label>
            </div>
            <div className="col-sm-5">
              <input
                type="Cost"
                id="inputCost"
                className="form-control"
                name="Cost"
                onChange={this.onFormFieldChange}
                value={this.state.formData.Cost}
              />
            </div>
          </div>

          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary sumbitButton"
              onClick={this.onSubmitClicked}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Widget;
