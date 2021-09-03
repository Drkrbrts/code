import React from "react";
import { withRouter } from "react-router-dom";
import "./compStyle.css";
import entityService from "../services/entityService";
import { toast } from "react-toastify";

class EntityForm extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      if (inputName === "cost") {
        let formData = { ...prevState.formData };
        formData[inputName] = parseInt(NewValue);
        return { formData };
      } else {
        let formData = { ...prevState.formData };
        formData[inputName] = NewValue;
        return { formData };
      }
    });
  };

  onSubmitClick = () => {
    let currentFormData = { ...this.state.formData };
    console.log(currentFormData);
    entityService
      .add(currentFormData)
      .then(this.onAddCarSuccess)
      .catch(this.onAddCarError);
  };

  onAddCarSuccess = (response) => {
    console.log(response);
    toast.success("Car Successfully Added", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onAddCarError = (response) => {
    console.log({ response });
    console.log(response.response.data);
    toast.error(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Add Car
            </strong>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-6 p-5">
              <div className="card">
                <form className="p-5">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="manufacturer" className="form-label">
                      Manufacturer
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="manufacturer"
                      name="manufacturer"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.manufacturer}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cost" className="form-label">
                      Cost
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cost"
                      name="cost"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.cost}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitClick}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(EntityForm);
