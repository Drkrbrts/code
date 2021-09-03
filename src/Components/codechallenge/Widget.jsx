import React from "react";
// import { render } from "react-dom";
import { postWidget } from "../../services/userService";
import { toast } from "react-toastify";
import "rc-pagination/assets/index.css";

class Widget extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    },
  };

  onFormFieldChange = (e) => {
    console.log(e);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ currentTarget, newValue });

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onPostWidgetClicked = () => {
    postWidget(this.state.formData)
      .then(this.onPostWidgetSuccess)
      .catch(this.onPostWidgetError);
  };
  onPostWidgetSuccess = (response) => {
    console.log(response);

    toast("Widget Success");
  };
  onPostWidgetError = (response) => {
    console.warn(response);
    toast("Widget error...");
  };

  render() {
    console.log("rendering widget");
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <form>
              <div className="mb-3">
                <label htmlFor="widgetName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="widgetManufacturer" className="form-label">
                  Manufacturer
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="manufacturer"
                  value={this.state.formData.manufacturer}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="widgetDescription" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={this.state.formData.description}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="widgetCost" className="form-label">
                  Cost
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cost"
                  value={this.state.formData.cost}
                  onChange={this.onFormFieldChange}
                />
              </div>

              <div className="col-md-4">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.onPostWidgetClicked}
                >
                  Post Widget
                </button>
              </div>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Widget;
