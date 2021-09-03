import React from "react";
import * as seperate from "./seperate";
import { toast } from "react-toastify";

const CustomToast = () => {
  return <div>entity was created</div>;
};
toast.configure();
class Widget extends React.Component {
  state = {
    formData: {
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

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };
  onButtonClicked = (e) => {
    e.preventDefault();
    console.log("I was clicked");

    seperate
      .addEntity(this.state.formData)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log(response.data.item);

    toast.success(<CustomToast />);
  };

  onActionError = (err) => {
    console.log(err);
    toast.error("entity was not created");
  };

  render() {
    return (
      <main role="main">
        <div className="container border border-secondary border-3">
          <div className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-lg">
              <form>
                <h1 className="display-7 fw-bold text-center">Information</h1>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder=" Name"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.name}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    name="manufacturer"
                    className="form-control"
                    placeholder="Manufacturer"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.manufacturer}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.description}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="number"
                    name="cost"
                    className="form-control"
                    placeholder="cost"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.cost}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onButtonClicked}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Widget;
