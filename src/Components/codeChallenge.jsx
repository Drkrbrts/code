import React, { Component } from "react";
import * as widgetService from "../services/codingChallenge";
import { toast } from "react-toastify";

class EntityForm extends Component {
  state = {
    newWidgetInfo: {
      Name: "",
      Manufacturer: "",
      Description: "",
      Cost: 0,
    },
  };
  onLoginFormDataChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newWidgetInfo = { ...this.state.newWidgetInfo };
      newWidgetInfo[inputName] = newValue;
      return { newWidgetInfo };
    });
  };
  onEntitySubmit = (e) => {
    e.preventDefault();
    let newWidgetInfo = this.state.newWidgetInfo;
    widgetService
      .newWidget(newWidgetInfo)
      .then(this.onNewWidgetSuccess)
      .catch(this.onNewWidgetError);
  };

  onNewWidgetSuccess = (response) => {
    console.log(response);
    let newItemId = response.data.item;
    toast.success(`New Widget Created: ${newItemId}`);
  };

  onNewWidgetError = (err) => {
    console.warn(err);
    toast.error("There seems to be an error");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid form-container loginForm pt-5">
          <div className="row justify-content-center">
            <div className="col-5">
              <form>
                <div className="main-form form-group">
                  <label htmlFor="widgetName">Widget Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    placeholder="Name"
                    onChange={this.onLoginFormDataChanged}
                    value={this.state.newWidgetInfo.Name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Manufacturer">Manufacturer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Manufacturer"
                    placeholder="Hasbro"
                    onChange={this.onLoginFormDataChanged}
                    value={this.state.newWidgetInfo.Manufacturer}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Description"
                    placeholder="Describe your widget"
                    onChange={this.onLoginFormDataChanged}
                    value={this.state.newWidgetInfo.Description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cost">Cost $</label>
                  <input
                    type="number"
                    className="form-control"
                    name="Cost"
                    placeholder="Cost 0.00"
                    onChange={this.onLoginFormDataChanged}
                    value={this.state.newWidgetInfo.Cost}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary form-pushData mt-2"
                  onClick={this.onEntitySubmit}
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EntityForm;
