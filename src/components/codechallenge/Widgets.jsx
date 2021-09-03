import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEntity } from "../../services/entityService";
import { getEntity } from "../../services/entityService";
toast.configure();

class Widgets extends React.Component {
  state = {
    name: "",
    manufacturer: "",
    description: "",
    cost: "",
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

  addEntitySuccess = (response) => {
    console.log(response);
  };
  addEntityError = (err) => {
    console.error(err);
  };

  getEntitySuccess = (response) => {
    toast.success("🦄 Entity Created!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response.data.items[0].id);
    this.setState((prevstate) => {
      return {
        currentWidget: response.data.items[0].id,
      };
    });
  };
  getEntityError = (err) => {
    toast.error("🦄 Error! ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Name </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={this.state.name}
            onChange={this.onFormFieldChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Manufacturer </label>
          <input
            type="text"
            name="manufacturer"
            className="form-control"
            id="manufacturer"
            onChange={this.onFormFieldChanged}
            value={this.state.manufacturer}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Description </label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            onChange={this.onFormFieldChanged}
            value={this.state.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Cost </label>
          <input
            type="number"
            name="cost"
            className="form-control"
            id="cost"
            placeholder=""
            onChange={this.onFormFieldChanged}
            value={this.state.cost}
          />{" "}
        </div>
        <div>
          <input
            type="button"
            onClick={() =>
              addEntity(this.state, "widgets")
                .then(this.addEntitySuccess)
                .then(getEntity)
                .then(this.getEntitySuccess)
                .catch(this.addEntityError)
                .catch(this.getEntityError)
            }
            className="btn btn-primary "
            value="Submit"
          />
        </div>
        <h1>Here is your newest widget's ID: {this.state.currentWidget}</h1>
      </form>
    );
  }
}

export default Widgets;
