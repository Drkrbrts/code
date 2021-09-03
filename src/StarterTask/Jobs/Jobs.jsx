import React from "react";
import jobService from "./jobService";
import { toast } from "react-toastify";
import JobView from "./JobView";
import JobCard from "./CloneJob";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class JobsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: "",
      searchData: "",
      currentPage: 0,
      mappedJobs: [],
      searchedJobs: "",
      isOpen: false,
      currentJob: "",
    };
  }
  componentDidMount() {
    jobService
      .getAllJobs(this.state.currentPage)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  }
  onGetAllSuccess = (data) => {
    console.log(data);
    let jobsArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState,
        jobs: jobsArray,
        totalPages: data.data.item.totalPages,
        mappedJobs: jobsArray.map(this.mapJob),
      };
    });
  };
  mapJob = (job) => (
    <JobCard
      key={job.id}
      jobData={job}
      onEdit={this.onEditClick}
      onVMClick={this.fillModalData}
    />
  );
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: pageNumber,
      };
    });
    jobService
      .getAllJobs(pageNumber - 1)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  };
  onEditClick = (job) => {
    job.techCompanyName = job.techCompany.name;
    job.techCompanyId = job.techCompany.id;
    if (Array.isArray(job.skills)) {
      const skills = job.skills.map((param) => param.name);
      job.skills = skills[0];
    }
    this.props.history.push(`/jobs/${job.id}/edit`, {
      currentJob: job,
    });
  };
  fillModalData = (job) => {
    if (Array.isArray(job.skills)) {
      job.techCompanyName = job.techCompany.name;
      job.techCompanyId = job.techCompany.id;
      const skills = job.skills.map((param) => param.name);
      job.skills = skills[0];
    }
    this.setState((prevState) => {
      return { ...prevState, currentJob: job, isOpen: !prevState.isOpen };
    });
  };
  toggleModal = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };
  onSearchType = (e) => {
    let target = e.target;
    let val = target.value;
    this.setState({ searchData: val });
  };
  onSearchClick = () => {
    jobService
      .searchForJobs(this.state.searchData)
      .then(this.onSearchSuccess)
      .catch(this.onFailure);
  };
  onSearchSuccess = (data) => {
    console.log(data);
    let searchArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState.searchedJobs,
        mappedJobs: searchArray.map(this.mapSearch),
      };
    });
  };
  mapSearch = (job) => (
    <JobCard
      jobData={job}
      key={job.id}
      onEdit={this.onEditClick}
      onVMClick={this.fillModalData}
    />
  );
  onAddClick = () => {
    this.props.history.push("/jobs/new");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <JobView
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          job={this.state.currentJob}
        />
        <div className="input-group mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Here"
            aria-label="Search Here"
            aria-describedby="button-addon2"
            onChange={this.onSearchType}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSearchClick}
          >
            Search
          </button>
          <button
            className="btn btn-success"
            type="button"
            onClick={this.onAddClick}
          >
            + Add Job
          </button>
        </div>
        <div
          className="row row-cols-1 row-cols-md-2 g-4 m-3"
          id="cloneTemplate"
        >
          {this.state.mappedJobs}
          <Pagination
            className="mt-5"
            defaultCurrent
            onChange={this.handlePageChange}
            current={this.state.currentPage}
            pageSize={1}
            total={this.state.totalPages}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default JobsDisplay;
