import React from "react";
import JobForm from "./JobForm";
import jobsService from "../services/jobsServices";
import JobCard from "./JobCard";
import { Route } from "react-router-dom";

class Jobspage extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: 0,
      skills: "",
    },
  };

  componentDidMount() {
    jobsService
      .getAll()
      .then(this.ongetAllSuccess)
      .catch(function (response) {
        console.log({ getallerror: response });
      });
  }
  ongetAllSuccess = (allJobs) => {
    console.log({ getAllJobsSuccess: allJobs });
    let jobsData = allJobs.data.item.pagedItems;
    console.log(jobsData);

    this.setState(() => {
      return {
        mappedJobs: jobsData.map(this.mapJob),
      };
    });
  };
  mapJob = (oneJob) => {
    return (
      <React.Fragment key={`Jobs=${oneJob.id}`}>
        <JobCard
          job={oneJob}
          imageUrl={oneJob.techCompany.images[0].imageUrl}
          onEditClick={this.onEditClick}
        ></JobCard>
      </React.Fragment>
    );
  };

  onSubmitClicked = (e) => {
    e.preventDefault();

    var updateData = this.state.formData;

    updateData.skills = this.state.formData.skills.split(",");

    if (this.props.location.search === "") {
      jobsService
        .add(updateData)
        .then(this.onAddSuccess)
        .catch(function (response) {
          console.warn(response);
        });
    } else {
      jobsService
        .updateById(updateData)
        .then(this.onupdateByIdSuccess)
        .catch(function (response) {
          console.log(response);
        });
    }
  };

  onAddSuccess = (response) => {
    console.log({ addSuccess: response });
    window.location.replace("/jobs");
  };
  onupdateByIdSuccess = (response) => {
    console.log({ updateSuccess: response });
    window.location.replace("/jobs");
  };

  onAddClick = (e) => {
    e.preventDefault();
    window.location.replace(`/jobs/form`);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onEditClick = (press) => {
    console.log(press);

    jobsService
      .getById(press.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);

    this.props.history.push(`/jobs/form?jobId=${press.id}`);
  };
  onGetByIdSuccess = (response) => {
    let jobItem = response.data.item;
    console.log(jobItem);

    const job = {
      title: jobItem.title,
      description: jobItem.description,
      summary: jobItem.summary,
      pay: jobItem.pay,
      slug: jobItem.slug,
      statusId: jobItem.statusId,
      techCompanyId: jobItem.techCompany.id,
      // skills: jobItem.skills,
      id: jobItem.id,
    };

    const skillsArray = jobItem.skills;
    const skills = [];
    for (let i = 0; skillsArray.length > i; i++) {
      const currentSkill = skillsArray[i];
      skills.push(currentSkill.name);
    }
    console.log(skills);
    job.skills = skills.join(",");
    console.log("new job", job);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData = job;
      return { formData };
    });
  };

  onGetByIdError = (Err) => {
    console.log(Err);
  };

  onSearchFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    console.log({ newValue, currentTarget });
    this.setState(() => {
      let searchData = { ...this.state.searchData };
      searchData = newValue;
      return { searchData };
    });
  };

  onSearchClicked = (e) => {
    e.preventDefault();
    let searchInput = this.state.searchData;
    console.log(searchInput);
    jobsService
      .search(searchInput)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (repsonse) => {
    console.log({ searchSuccess: repsonse });
    let searchingData = repsonse.data.item.pagedItems;

    console.log(searchingData);

    this.setState((preState) => {
      return {
        mappedJobs: searchingData.map(this.mapJob),
      };
    });
    this.props.history.push(`/jobs`);
  };
  onSearchError = (response) => {
    let errorMessage = response.response.data.errors;
    console.log(errorMessage);
  };

  render() {
    return (
      <React.Fragment>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <a
              href="/"
              className="
        d-flex
        align-items-center
        mb-3 mb-lg-0
        me-lg-auto
        text-dark text-decoration-none
      "
            >
              <svg className="bi me-2" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
              </svg>
              <button
                type="button"
                className="btn btn-primary addJobButton"
                onClick={this.onAddClick}
              >
                +Add
              </button>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control"
                id="jobsearch"
                placeholder="Search..."
                aria-label="Search"
                onChange={this.onSearchFieldChange}
              />
            </form>
            <div className="text-end">
              <a href>
                <button
                  type="button"
                  className="btn btn-danger searchButton"
                  onClick={this.onSearchClicked}
                >
                  Search
                </button>
              </a>
            </div>
          </div>
        </header>

        <div
          className={`row ${
            this.props.location.search ||
            this.props.location.pathname === "/jobs/form"
              ? "d-none"
              : {}
          }`}
        >
          {this.state.mappedJobs}
        </div>
        <div
          className={
            this.props.location.search ||
            this.props.location.pathname === "/jobs/form"
              ? {}
              : "d-none"
          }
        >
          <JobForm
            onSubmitClicked={this.onSubmitClicked}
            onFormFieldChange={this.onFormFieldChange}
            formData={this.state.formData}
          ></JobForm>
        </div>
      </React.Fragment>
    );
  }
}
export default Jobspage;
