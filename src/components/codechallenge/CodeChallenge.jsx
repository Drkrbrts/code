import React from "react";
import * as codeService from "./codeServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CodeChallenge extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "$",
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

  onSubmitClick = (e) => {
    e.preventDefault();
    var copy = { ...this.state.formData };
    let data = {
      name: copy.name,
      manufacturer: copy.manufacturer,
      description: copy.description,
      cost: copy.cost,
    };
    codeService
      .dogToyInput(data)
      .then(this.onDogToySuccess)
      .catch(this.onDogToyError);
    console.log("dog toy info. submitted", data);
  };

  onDogToySuccess = (response) => {
    console.log("success", response); 
    toast.success(`Dog toy (item # ${response.data.item}) information successfully submitted`);
  };

  onDogToyError = (response) => {
    console.warn({ error: response });
    toast.error("Registration Error")
  };

  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <div className="row">
              <h5>
                <strong>Coding Challenge</strong> | Dog Toys
              </h5>
              <div className="col-md-4 pd-5 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <input
                      type="text"
                      className="form-control"
                      name="manufacturer"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.manufacturer}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.description}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cost">Cost</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cost"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.cost}
                    />
                  </div>
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      //   value="registration"
                      onClick={this.onSubmitClick}
                    >
                      <a href="#">Submit</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <div></div>
      </React.Fragment>
    );
  }
}

export default CodeChallenge;
