import React from "react";
import * as techService from "../auth/techService";
import { toast } from "react-toastify";

class AddCompany extends React.Component {
  state = {
    company: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
    },
    coId: 0,
    updateCo: false,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      techService
        .getCompany(this.props.match.params.id)
        .then(this.onGetCoSuccess)
        .catch(this.onGetCoError);
    }
  }

  onGetCoSuccess = (response) => {
    console.log(response);
    var temporaryCoHolder = response.data.item;
    this.setState((prevState) => {
      var company = { ...prevState.company };
      company.name = temporaryCoHolder.name;
      company.profile = temporaryCoHolder.profile;
      company.summary = temporaryCoHolder.summary;
      company.headline = temporaryCoHolder.headline;
      company.contactInformation = temporaryCoHolder.contactInformation.data;
      company.slug = temporaryCoHolder.slug;
      company.statusId = temporaryCoHolder.statusId;
      return { company: company, updateCo: true, coId: temporaryCoHolder.id };
    }, this.stateChanged);
  };

  onGetCoError = (err) => {
    console.log({ error: err });
  };

  onChange = (e) => {
    console.log({ syntheticEvent: e });
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState((prevState) => {
      var company = { ...prevState.company };
      company[name] = value;
      return { company };
    }, this.stateChanged);
  };

  stateChanged = () => {
    console.log(this.state);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form was clicked");
    if (this.state.updateCo === false) {
      techService
        .createTechCo(this.state.company)
        .then(this.onCreateSuccess)
        .catch(this.onCreateError);
    } else {
      console.log("before Updating, obj Id:", this.state.coId);
      techService
        .updateCo(this.state.company, this.state.coId)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    }
  };

  onUpdateSuccess = (response) => {
    console.log(response);
    toast.success("Company Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/techco");
  };

  onUpdateError = (err) => {
    console.log({ error: err });
    toast.error("Error Updating Company!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onCreateSuccess = (response) => {
    console.log(response);
    toast.success("Company Created!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/techco");
  };

  onCreateError = (err) => {
    console.log({ error: err });
    toast.error("Error Creating Company!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Add Company</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={this.onChange}
              value={this.state.company.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile">Profile</label>
            <input
              type="text"
              className="form-control"
              id="profile"
              name="profile"
              placeholder="Pofile"
              onChange={this.onChange}
              value={this.state.company.profile}
            />
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              className="form-control"
              id="summary"
              name="summary"
              placeholder="Summary"
              onChange={this.onChange}
              value={this.state.company.summary}
            />
          </div>
          <div className="form-group">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="form-control"
              id="headline"
              name="headline"
              placeholder="headline"
              onChange={this.onChange}
              value={this.state.company.headline}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactInformation">Contact Information</label>
            <input
              type="text"
              className="form-control"
              id="contactInformation"
              name="contactInformation"
              placeholder="Contact Information"
              onChange={this.onChange}
              value={this.state.company.contactInformation.data}
            />
          </div>
          <div className="form-group">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              placeholder="Slug"
              onChange={this.onChange}
              value={this.state.company.slug}
            />
          </div>
          <div className="form-group">
            <label htmlFor="statusId">Status Id</label>
            <input
              type="text"
              className="form-control"
              id="statusId"
              name="statusId"
              placeholder="Status Id"
              onChange={this.onChange}
              value={this.state.company.statusId}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddCompany;
