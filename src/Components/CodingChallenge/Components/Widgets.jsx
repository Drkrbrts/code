import React from "react";
import userService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Widgets extends React.Component {
  state = {
    name: "Clock",
    manufacturer: "Rolex",
    description: "A clock widget that displays time and date",
    cost: 20,
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;

      return newState;
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    userService(this.state)
      .then(this.onAddWidgetSuccess)
      .catch(this.onAddWidgetError);
  };

  onAddWidgetSuccess = (response) => {
    console.log(response, "widget added");
    const notify = () => toast("Widget Added! ID:" + response.data.item);
    notify();
    <ToastContainer />;
  };

  onAddWidgetError = (error) => {
    console.warn(error, "widget did not add");
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="md-4 p-3">
              <form>
                <div className="md-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onFormFieldChanged}
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Manufacturer</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onFormFieldChanged}
                    name="manufacturer"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onFormFieldChanged}
                    name="description"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Cost</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onFormFieldChanged}
                    name="cost"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmitHandle}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Widgets;
