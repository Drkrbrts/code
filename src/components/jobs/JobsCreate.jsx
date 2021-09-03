import React from "react";
import { toast } from "react-toastify";
import * as jobsService from "./jobsService";

class JobsCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        description: "",
        summary: "",
        pay: "",
        slug: "",
        statusId: "Active",
        techCompanyId: 0,
        skills: [""],
      },
      companies: [],
      lastId: 0,
    };
  }

  componentDidMount() {
    this.getTechCompanies();
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    var updater = (prevState) => {
      var newFormData = { ...prevState.formData };
      if (name === "skills") {
        const valueArray = value.split(" ");
        newFormData[name] = valueArray;
      } else if (name === "techCompanyId") {
        const valueNumber = Number(value);
        newFormData[name] = valueNumber;
      } else {
        newFormData[name] = value;
      }
      return { formData: newFormData };
    };
    this.setState(updater);
  };

  handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    if (this.state.lastId === 0) {
      jobsService
        .addJob(this.state.formData)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    } else {
      jobsService
        .editJob(this.state.lastId, this.state.formData)
        .then(this.onEditJobSuccess)
        .catch(this.onEditJobError);
    }
  };

  handleReset = (e) => {
    e.preventDefault();
    var updater = (prevState) => {
      var newId = { ...prevState.lastId };
      newId = 0;

      return { lastId: newId };
    };
    this.setState(updater);
  };

  handleDone = (e) => {
    e.preventDefault();
    this.props.history.push("/jobs");
  };

  onAddJobSuccess = (response) => {
    console.log(response.data.item);
    var updater = (prevState) => {
      var newId = { ...prevState.lastId };
      newId = response.data.item;
      return { lastId: newId };
    };
    this.setState(updater);
    toast.success("You have added a job successfully.");
  };

  onAddJobError = (errResponse) => {
    console.log(errResponse);
    toast.error("Failed to add job");
  };

  onEditJobSuccess = (id) => {
    toast.success("Updated job " + id + " successfully.");
  };

  onEditJobError = (errResponse) => {
    console.log(errResponse);
    toast.error("Failed to edit job");
  };

  getTechCompanies = () => {
    jobsService
      .getCompanies()
      .then(this.onGetCompaniesSuccess)
      .catch(this.onGetCompaniesError);
  };

  onGetCompaniesSuccess = (response) => {
    var updater = (prevState) => {
      var newCompanies = { ...prevState.companies };
      newCompanies = {
        info: response.data.item.pagedItems,
        form: response.data.item.pagedItems.map(this.mapCompanies),
      };
      return { companies: newCompanies };
    };
    this.setState(updater);
  };

  onGetCompaniesError = (errResponse) => {
    console.log(errResponse);
    toast.error("Failed to get companies");
  };

  mapCompanies = (input) => {
    return (
      <React.Fragment key={`companies-${input.id}`}>
        <option value={input.id}>{input.name}</option>
      </React.Fragment>
    );
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputTitle1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputCompanies1">Tech Companies</label>
                  <select
                    className="form-control"
                    id="techCompanyId"
                    name="techCompanyId"
                    value={this.state.techCompanyId}
                    onChange={this.handleChange}
                  >
                    <option value="error">Select a company</option>
                    {this.state.companies.form}
                  </select>
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
                  <label htmlFor="exampleInputSummary1">Summary</label>
                  <input
                    type="text"
                    className="form-control"
                    id="summary"
                    name="summary"
                    placeholder="Summary"
                    value={this.state.summary}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPay1">Pay</label>
                  <input
                    type="number"
                    className="form-control"
                    id="pay"
                    name="pay"
                    placeholder="Pay"
                    value={this.state.pay}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputSlug1">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    placeholder="Slug"
                    value={this.state.slug}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputSkills1">
                    Skills (Seperate by spaces)
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    id="skills"
                    name="skills"
                    placeholder="Skills"
                    value={this.state.skills}
                    onChange={this.handleChange}
                  ></input>
                  <div className="form-group">
                    <label htmlFor="exampleInputId1">Id</label>
                    <input
                      type="number"
                      className="form-control"
                      id="id"
                      name="id"
                      readOnly
                      value={this.state.lastId}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleReset}
                  >
                    New Company
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={this.handleDone}
                  >
                    Done
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

export default JobsCreate;
