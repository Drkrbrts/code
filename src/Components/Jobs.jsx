import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import jobsServices from "../services/jobsServices";
import SingleJob from "./SingleJob";
import SingleModal from "./SingleModal";

class Jobs extends Component {
  state = {
    mappedJobs: [],
    totalJobs: "",
    searchQuery: "",
    searchEnacted: false,
    isOpen: false,
    jobModalInfo: { title: "", content: "" },
  };

  componentDidMount() {
    jobsServices
      .getAll(0, 6)
      .then(this.onGetJobsSuccess)
      .catch(this.onGetJobsError);
  }

  onGetJobsSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedJobs = response.data.item.pagedItems.map(this.mapJobs);
      newState.totalJobs = response.data.item.totalCount;
      newState.searchQuery = "";
      newState.searchEnacted = false;

      return newState;
    });
  };
  onGetJobsError = (errResponse) => {
    console.log(errResponse);
  };

  mapJobs = (oneJob) => {
    return (
      <div
        key={`jid-${oneJob.id}`}
        className="col-lg-4 col-md-6 col-sm-12 my-3"
      >
        <SingleJob
          job={oneJob}
          toggleModal={this.toggleModal}
          onClick={this.onJobClickFull}
          {...this.props}
        ></SingleJob>
      </div>
    );
  };

  mapSkills = (skills) => {
    return skills.name;
  };

  onJobClickFull = (job) => {
    console.log(job);
    if (typeof job !== "object") {
      let jobDeleteSuccsess = this.onDeleteSuccess(job);
      jobsServices
        .deleteJob(job)
        .then(jobDeleteSuccsess)
        .catch(this.onDeleteError);
    } else {
      this.setState((prevState) => {
        let newModal = { ...prevState.jobModalInfo };
        newModal.title = <p className="fw-bold">{job.title}</p>;
        newModal.content = (
          <React.Fragment>
            <p>Description: {job.description}</p>
            <p>Summary: {job.summary}</p>
            <p>Pay: {job.pay}</p>
            <p>Status: {job.statusId}</p>
            <p>Skills: {job.skills.map(this.mapSkills).join(", ")}</p>
          </React.Fragment>
        );

        return { jobModalInfo: newModal };
      });

      this.toggleModal();
    }
  };

  onDeleteSuccess = (myId) => {
    this.setState((prevState) => {
      let newJobArray = prevState.mappedJobs.filter((item) => {
        let result = true;

        if (item.key === `jid-${myId}`) {
          result = false;
        }

        return result;
      });
      return { mappedJobs: newJobArray };
    });
  };
  onDeleteError = (errResponse) => {
    console.log(errResponse);
  };

  onSearchChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;

    this.setState((prevState) => {
      let newSearchQuery = { ...prevState.searchQuery };

      newSearchQuery = newValue;

      return { searchQuery: newSearchQuery };
    });
  };

  onSearchButtonClicked = (e) => {
    e.preventDefault();
    console.log(e);
    let search = this.state.searchQuery.split(" ").join("%20");

    jobsServices
      .searchJobs(0, 6, search)
      .then(this.onSearchJobsSuccess)
      .catch(this.onSearchJobsError);
  };

  onSearchJobsSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedJobs = response.data.item.pagedItems.map(this.mapJobs);
      newState.totalJobs = response.data.item.totalCount;
      newState.searchEnacted = true;
      return newState;
    });
  };

  onSearchJobsError = (errResponse) => {
    console.log(errResponse);
  };

  onClearSearch = (e) => {
    e.preventDefault();
    jobsServices
      .getAll(0, 6)
      .then(this.onGetJobsSuccess)
      .catch(this.onGetJobsError);
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  onPaginationClick = (current, pageSize) => {
    let start = current - 1;
    if (this.state.searchEnacted) {
      let search = this.state.searchQuery.split(" ").join("%20");
      console.log("search", this.state.searchEnacted);
      jobsServices
        .searchJobs(start, pageSize, search)
        .then(this.onSearchJobsSuccess)
        .catch(this.onSearchJobsError);
      return;
    }
    console.log("getAll", this.state.searchEnacted);
    jobsServices
      .getAll(start, pageSize)
      .then(this.onGetJobsSuccess)
      .catch(this.onGetJobsError);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h3>
              Jobs
              <span className="px-3">
                <NavLink to="/jobsForm">
                  <button
                    className=" px-2 btn btn-outline-primary"
                    type="submit"
                  >
                    + Jobs
                  </button>
                </NavLink>
              </span>
            </h3>

            <form className="d-flex">
              <input
                className="form-control me-2"
                // type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onSearchChanged}
                value={this.state.searchQuery}
                onClick={this.onSearchClear}
              />
              {this.state.searchQuery && (
                <button
                  className="btn btn-outline-danger me-2"
                  type="submit"
                  onClick={this.onClearSearch}
                >
                  X
                </button>
              )}

              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={this.onSearchButtonClicked}
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="row my-3">{this.state.mappedJobs}</div>
        </div>
        <div className="text-center">
          <Pagination
            pageSize={6}
            total={this.state.totalJobs}
            onChange={this.onPaginationClick}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className=" col-md-12 p-5">
              <SingleModal
                {...this.props}
                isOpen={this.state.isOpen}
                toggleModal={this.toggleModal}
                title={this.state.jobModalInfo.title}
                content={this.state.jobModalInfo.content}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Jobs);
