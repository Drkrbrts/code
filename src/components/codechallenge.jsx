import React from "react";
import * as userService from "../services/codechallengeService";
import { toast } from "react-toastify";

class FormWidget extends React.Component {
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
    // console.log({ newValue, currentTarget, e });

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onAddEnitytClicked = (e) => {
    console.log("add entity firing");
    e.preventDefault();

    userService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log("add success", response);
    this.successMessage(response);
  };

  onRegisterError = (errResponse) => {
    console.log("add fail", errResponse);
    this.errorMessage();
  };

  successMessage = (response) => {
    // console.log(response);
    let entityId = response.data.item;
    console.log(entityId);

    toast.success(`🦄 Successfully added Entity and your ID is: ${entityId}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  errorMessage = () => {
    toast.error("🦄 Please fill all input fields", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an Entity
                    </h2>

                    <form className="form-container">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control form-control-lg firstName-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.name}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="manufacturer"
                          name="manufacturer"
                          className="form-control form-control-lg lastName-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.manufacturer}
                        />
                        <label className="form-label" htmlFor="form3Example2cg">
                          Manufacturer
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="description"
                          name="description"
                          className="form-control form-control-lg email-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.description}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Description
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          id="cost"
                          name="cost"
                          className="form-control form-control-lg password-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.cost}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Cost
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={this.onAddEnitytClicked}
                        >
                          Add Entity
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FormWidget;
