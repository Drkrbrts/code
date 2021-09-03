import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import * as widgetService from "../services/widgetService";

class ReactFormChallenge extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: 0,
    },
  };
  onFormFieldChanged = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.formData };
      newState[name] = newValue;
      return { formData: newState };
    });
  };

  onSubmitBtnClicked = (e) => {
    e.preventDefault();
    console.log(this.state.formData);

    let formData = this.state.formData;
    formData.cost = Number(formData.cost);
    console.log(formData);

    widgetService
      .add(formData)
      .then(this.onAddWidgetSuccess)
      .catch(this.onAddWidgetError);
  };

  onAddWidgetSuccess = (res) => {
    console.log(res);
    let id = res.data.item;
    toast.success(`entity was created :) id: ${id}`);
  };

  onAddWidgetError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  render() {
    return (
      <form className="px-4 py-2">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">Add Widget</h1>
                </div>
                <div className="form-group m-5">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Airplane"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.name}
                  />
                  <label htmlFor="manufacturer">Manufacturer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="manufacturer"
                    placeholder="Boeing Co"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.manufacturer}
                  />
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="sed faucibus turpis in eu mi bibendum neque egestas congue"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.description}
                  />
                  <label htmlFor="cost">Cost</label>
                  <input
                    type="number"
                    className="form-control"
                    name="cost"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.cost}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary m2"
                  onClick={this.onSubmitBtnClicked}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ReactFormChallenge;
