import React from "react";
import { widgetCreate } from "../../services/userService";
import { toast } from "react-toastify";

class Widget extends React.Component {
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

    this.setState(() => {
      let newState = { ...this.state.formData };
      newState[inputName] = newValue;

      return { formData: newState };
    });
  };
  onSubmitClicked = () => {
    console.log("clicked!!");

    console.log(this.state.formData);

    widgetCreate(this.state.formData)
      .then(this.widgetCreateSuccess)
      .catch(this.widgetCreateError);
  };

  widgetCreateSuccess(response) {
    console.log({ "widgetCreateSuccess!!": response });
    toast("Success!!!");
  }

  widgetCreateError(response) {
    console.log({ "widgetCreateError...": response });
    toast("Error...");
  }
  render() {
    return (
      <div className="container p-5">
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputFirstName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.onFormFieldChanged}
                placeholder="Name"
                value={this.state.formData.Name}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputLastName" className="form-label">
                Manufacturer
              </label>
              <input
                type="text"
                className="form-control"
                name="manufacturer"
                onChange={this.onFormFieldChanged}
                placeholder="Manufacturer"
                value={this.state.formData.manufacturer}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputLastName" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={this.onFormFieldChanged}
                placeholder="Description"
                value={this.state.formData.description}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputLastName" className="form-label">
                Cost
              </label>
              <input
                type="text"
                className="form-control"
                name="cost"
                onChange={this.onFormFieldChanged}
                placeholder="Cost"
                value={this.state.formData.cost}
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.onSubmitClicked}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Widget;
