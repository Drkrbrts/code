import React from "react";
import defaultExport from "./techService";
import { toast } from "react-toastify";

class TechAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: " ",
        profile: " ",
        headline: " ",
        summary: " ",
        contactInformation: " ",
        slug: " ",
        statusId: " ",
        images: " ",
      },
    };
  }
  changeFormData = (e) => {
    let target = e.target;

    if (target.type === "checkbox") {
      if (target.checked === true) {
        target.value = "Active";
      } else if (target.checked === false) {
        target.value = "NotSet";
      }
    }

    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: val };
      return { formData: formData };
    });
  };
  onSubmitClick = () => {
    if (!Array.isArray(this.state.formData.images)) {
      const baseData = this.state.formData;
      const img = baseData.images;
      baseData.images = [{ imageTypeId: 2, imageUrl: img }];
      defaultExport
        .addCompany(baseData)
        .then(this.onSubmitSuccess)
        .catch(this.onFailure);
    } else {
      defaultExport
        .addCompany(this.state.formData)
        .then(this.onSubmitSuccess)
        .catch(this.onFailure);
    }
  };
  onSubmitSuccess = (data) => {
    console.log(data);
    toast.success("Company Added!");
    this.props.history.push("/techcompanies");
  };
  onReturnClick = () => {
    this.props.history.push("/techCompanies");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="overlay">
            <div className="mb-3">
              <label className="form-label">Tech Company Name</label>
              <input
                className="form-control"
                placeholder="Company Name"
                name="name"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Company Profile</label>
              <input
                className="form-control"
                placeholder="Profile"
                name="profile"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Company Summary</label>
              <input
                className="form-control"
                placeholder="Summary of Company"
                name="summary"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Company headline</label>
              <input
                className="form-control"
                placeholder="Headline of Company"
                name="headline"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Information</label>
              <input
                className="form-control"
                placeholder="email address or phone number"
                name="contactInformation"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Company Slug</label>
              <input
                className="form-control"
                placeholder="Unique Identifier of Company"
                name="slug"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Company Logo</label>
              <input
                className="form-control image-fluid"
                placeholder="Image URL"
                name="images"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                name="statusId"
                onChange={this.changeFormData}
              />
              <label
                className="form-check-label"
                htmlFor="statusId"
                style={{ marginLeft: "7px" }}
              >
                Active Status
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onSubmitClick}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ float: "right" }}
                onClick={this.onReturnClick}
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TechAdd;
