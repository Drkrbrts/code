import React from "react";
import { toast } from "react-toastify";
import * as challengeService from "./challengeService";

class ChallengeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    challengeService
      .addEntity(this.state)
      .then(this.onAddEntitySuccess)
      .catch(this.onAddEntityError);
  };

  onAddEntitySuccess = (response) => {
    let idLog = response.data.item;
    toast.success(
      "You have successfully added new entity widget. Id = " + idLog
    );
  };

  onAddEntityError = (errResponse) => {
    console.log(errResponse);
    toast.error("Failed to add new entity widget. ");
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputManufacturer1">
                    Manufacturer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="manufacturer"
                    name="manufacturer"
                    placeholder="Manufacturer"
                    value={this.state.manufacturer}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputDescription1">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputCost1">Cost</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cost"
                    name="cost"
                    placeholder="Cost"
                    value={this.state.cost}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ChallengeWidget;
