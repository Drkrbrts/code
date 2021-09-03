import React from "react";
import * as techCoService from "../services/techCoService";

class AddTechCo extends React.Component {
  state = {
    newTechCo: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
  };

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.payload) {
      let newTechCo = { ...this.props.location.state.payload };
      this.setState(() => {
        return { newTechCo };
      });
    }
    console.log("component mounted");
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    if (this.state.newTechCo === null) {
      this.setState(() => {
        let newState = {};
        newState[inputName] = newValue;
        return { newState };
      });
    } else {
      this.setState(() => {
        let newTechCo = this.state.newTechCo;
        newTechCo[inputName] = newValue;

        return { newTechCo };
      });
    }
  };

  submitHandle = (e) => {
    e.preventDefault();
    if (this.state.newTechCo.id) {
      techCoService
        .editTechCo(this.state.newTechCo)
        .then(this.onEditTechCoSuccess)
        .catch(this.onEditTechCoError);
    } else {
      techCoService
        .addTechCo(this.state)
        .then(this.onAddTechCoSuccess)
        .catch(this.onAddTechCoError);
    }
  };

  onAddTechCoSuccess = (response) => {
    console.log(response, "tech co added");
    this.props.history.push("/techco");
  };

  onAddTechCoError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="md-4 p-3">
            <form>
              <div className="md-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Profile</label>
                <input
                  type="text"
                  className="form-control"
                  name="profile"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.profile}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.summary}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Headline</label>
                <input
                  type="text"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.headline}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Information</label>
                <input
                  type="text"
                  className="form-control"
                  name="contactInformation"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.contactInformation.data}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.slug}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  name="statusId"
                  onChange={this.onFormFieldChanged}
                  value={this.state.newTechCo.statusId}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Primary Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="primaryImage"
                  onChange={this.onFormFieldChanged}
                  //   value={this.state.newTechCo.images}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.submitHandle}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTechCo;
