import React, { Component } from "react";
import { createWidget } from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class WidgetForm extends React.Component {
  state = {
    widgetData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: 0,
    },
  };
  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });

    this.setState(() => {
      let widgetData = { ...this.state.widgetData };
      widgetData[inputName] = newValue;
      console.log(widgetData);
      return { widgetData };
    });
  };
  onSubmitButtonClicked = () => {
    createWidget(this.state.widgetData)
      .then(this.onCreateWidgetSuccess)
      .catch(this.onCreateWidgetError);
  };
  onCreateWidgetSuccess = (response) => {
    console.log(response.data.item);
    let idNum = response.data.item;
    const notify = () => {
      toast.success(`Widget ${idNum} was created!`);
    };
    notify();
  };
  onCreateWidgetError = (response) => {
    console.warn(response);
    const notify = () => {
      toast.error("Oh no, it appears there's an error in one of your lines");
    };
    notify();
  };

  render() {
    return (
      <div>
        <main role="main">
          <div className="container">
            <div className="col-lg-4 p-3">
              <form>
                <h3>Enter Widget Data</h3>

                <div className=" mb-3 form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="Name"
                    name="name"
                    onChange={this.onFormFieldChanged}
                    value={this.state.widgetData.name}
                  />
                </div>

                <div className=" mb-3 form-group">
                  <label className="form-label">Manufacturer</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Manufacturer"
                    id="Manufacturer"
                    name="manufacturer"
                    onChange={this.onFormFieldChanged}
                    value={this.state.widgetData.manufacturer}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Description"
                    id="Description"
                    name="description"
                    onChange={this.onFormFieldChanged}
                    value={this.state.widgetData.description}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="costNumber" className="form-label">
                    Cost
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter cost"
                    id="Cost"
                    name="cost"
                    onChange={this.onFormFieldChanged}
                    value={this.state.widgetData.cost}
                  />
                </div>
                <div style={{ padding: "15px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitButtonClicked}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default WidgetForm;

// // var mapResult = friends.map(mappingFunction);
// filterFunction = (data) => {
//   let result = false;
//   if ((data.id = "21")) {
//     return true;
//   } else {
//     return false;
//   }
//   return result;
// };
// var filterResult = mapResult.filter(filterFunction);
