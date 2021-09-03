import React from "react";
import jobsService from "../services/jobsServices";
import JobCard from "./JobCard";
import Pagination from "rc-pagination";

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
    current: 1,
    pageSize: 2,
    total: 0,
  };

  componentDidMount() {
    jobsService
      .getAll(this.state.current - 1, this.state.pageSize)
      .then(this.ongetAllSuccess)
      .catch(this.ongetAllError);
  }
  ongetAllSuccess = (allJobs) => {
    console.log({ getAllJobsSuccess: allJobs });
    let jobsData = allJobs.data.item.pagedItems;
    console.log(jobsData);

    this.setState(() => {
      return {
        total: allJobs.data.item.totalCount,
        mappedJobs: jobsData.map(this.mapJob),
      };
    });
  };
  mapJob = (oneJob) => {
    return (
      <React.Fragment key={`Jobs=${oneJob.id}`}>
        <JobCard job={oneJob} onEditClick={this.onEditClick}></JobCard>
      </React.Fragment>
    );
  };

  ongetAllError = (response) => {
    console.log({ getallerror: response });
  };

  onEditClick = (press) => {
    console.log(press);

    this.props.history.push(`/jobs/form?jobId=${press.id}`, {
      type: "EDIT_JOB",
      id: press.id,
    });
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

  onSearchSuccess = (response) => {
    console.log({ searchSuccess: response });
    let searchingData = response.data.item.pagedItems;

    console.log(searchingData);

    this.setState((preState) => {
      return {
        total: response.data.item.totalCount,
        mappedJobs: searchingData.map(this.mapJob),
      };
    });
    this.props.history.push(`/jobs`);
  };
  onSearchError = (response) => {
    let errorMessage = response.response.data.errors;
    console.log(errorMessage);
  };

  onAddClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/jobs/add`);
  };
  onChange = (page) => {
    console.log(page);
    this.setState({ current: page }, () =>
      jobsService
        .getAll(page - 1, this.state.pageSize)
        .then(this.ongetAllSuccess)
        .catch(this.ongetAllError)
    );
  };

  render() {
    return (
      <React.Fragment>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <div
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
            </div>
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
              <button
                type="button"
                className="btn btn-danger searchButton"
                onClick={this.onSearchClicked}
              >
                Search
              </button>
            </div>
          </div>
        </header>

        <div className="row">{this.state.mappedJobs}</div>
        <Pagination
          pageSize={this.state.pageSize}
          onChange={this.onChange}
          current={this.state.current}
          total={this.state.total}
        />
      </React.Fragment>
    );
  }
}
export default Jobspage;
