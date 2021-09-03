import React from "react";
import defaultExport from "./CCService";
import { toast } from "react-toastify";

class EntityEndpoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        manufacturer: "",
        description: "",
        cost: "",
      },
    };
  }
  onChangeInputData = (e) => {
    let target = e.target;
    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: [val] };
      return { formData: formData };
    });
  };
  onSubmitClick = () => {
    defaultExport
      .createWidget(this.state.formData)
      .then(this.onSuccess)
      .catch(this.onFailure);
  };
  onSuccess = (data) => {
    console.log(data);
    toast.success("Entity/Widget created successfully!");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="m-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              placeholder="Name of Widget"
              onChange={this.onChangeInputData}
              name="name"
            />
          </div>
          <div className="m-3">
            <label htmlFor="manufacturer" className="form-label">
              Manufacturer{" "}
            </label>
            <input
              className="form-control"
              id="manufacturer"
              placeholder="Manufacturer of Widget"
              onChange={this.onChangeInputData}
              name="manufacturer"
            />
          </div>
          <div className="m-3">
            <label htmlFor="description" className="form-label">
              Description{" "}
            </label>
            <input
              className="form-control"
              id="description"
              placeholder="Description of Widget"
              onChange={this.onChangeInputData}
              name="description"
            />
          </div>
          <div className="m-3">
            <label htmlFor="cost" className="form-label">
              Cost
            </label>
            <input
              className="form-control"
              id="cost"
              placeholder="Cost of Widget (Number value only)"
              onChange={this.onChangeInputData}
              name="cost"
              type="number"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary m-3"
            onClick={this.onSubmitClick}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default EntityEndpoint;
