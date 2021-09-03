
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


class FormChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      EntityName: "",
      Manufacturer: "",
      Description: "",
      Cost: [0],
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  entityHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://api.remotebootcamp.dev/api/entities/Printers", this.state)
      .then((response) => {
        toast.success("Successfully Added Entity", this.state.props)
        console.log("User Entity Successfully Logged", response.data, this.state);
      })
      .catch((error) => {
        toast.error("Unable to post entity..")
        console.log(error, error.data, this.state);
      });
  };

  render() {
    let { EntityName, Manufacturer, Description, Cost } = this.state;
    return (
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <form onSubmit={this.entityHandler}>
                <div className="mb-3">
                  <label className="form-label">Entity Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="EntityName"
                    value={EntityName}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Manufacturer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Manufacturer"
                    value={Manufacturer}
                    onChange={this.changeHandler}
                  />
                </div>
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="Description"
                  value={Description}
                  onChange={this.changeHandler}
                />
                <label className="form-label">Cost</label>
                <input
                  type="text"
                  className="form-control"
                  name="Cost"
                  value={Cost}
                  onChange={this.changeHandler}
                />
                <br/>
                <div className="col-12">
                  <button className="btn  btn-primary" type="submit">
                  
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

export default FormChallenge;
