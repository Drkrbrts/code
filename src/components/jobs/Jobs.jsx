import React from "react";
import * as jobServices from "../auth/jobServices";
import SingleJob from "./SingleJob";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Jobs extends React.Component {
  state = {
    mappedJobs: [],
    current: 1,
    jobsLength: 0,
    searchQuery: "",
  };

  stateChanged = () => {
    console.log("State Changed", this.state);
  };

  componentDidMount() {
    if (this.props.isLoggedIn === false) {
      this.props.history.push("/login");
    }
    console.log("In component did mount");
    jobServices
      .getJobs(this.state.current - 1, 4)
      .then(this.getJobsSuccess)
      .catch(this.getJobsError);
  }

  getJobsSuccess = (response) => {
    this.mapJobs(response.data.item);
  };
  getJobsError = (err) => {
    console.log({ error: err });
  };

  mapJobs = (jobs) => {
    let mappedJobs = jobs.pagedItems.map(this.mapJob);

    this.setState((prevState) => {
      return {
        ...prevState,
        mappedJobs: mappedJobs,
        jobsLength: jobs.totalCount,
      };
    }, this.stateChanged);
  };

  mapJob = (job) => {
    console.log(job);
    return (
      <React.Fragment key={`job-${job.id}`}>
        <SingleJob
          job={job}
          onEdit={this.editClick}
          onDelete={this.deleteClick}
        />
      </React.Fragment>
    );
  };

  editClick = (objId) => {
    console.log("Edit was clicked");
    this.props.history.push(`/addjob/${objId}/edit`);
  };

  deleteClick = (objId) => {
    console.log("Delete was clicked", objId);
  };

  addJobClick = () => {
    this.props.history.push("/addjob");
  };

  onSearchClick = () => {
    console.log("search was clicked", this.state.searchQuery);
    this.setState((prevState) => {
      var oldState = { ...prevState.mappedJobs };
      oldState = [];
      return { mappedJobs: oldState };
    }, this.stateChanged);
    jobServices
      .search(this.state.current - 1, 4, this.state.searchQuery)
      .then(this.onSearchSuccess)
      .catch(this.onSearchError);
  };

  onSearchSuccess = (response) => {
    console.log("Search query list", response);
    this.mapJobs(response.data.item);
  };

  onSearchError = (err) => {
    console.log({ error: err });
  };

  onChange = (e) => {
    console.log({ syntheticEvent: e });
    var target = e.target;
    var value = target.value;

    this.setState((prevState) => {
      let searchQ = { ...prevState.searchQuery };
      searchQ = value;
      return { searchQuery: searchQ };
    }, this.stateChanged);
  };

  onPageChange = (page) => {
    this.setState((prevState) => {
      var pageHolder = { ...prevState.current };
      pageHolder = page;
      return { current: pageHolder };
    });
    if (!this.state.searchQuery) {
      jobServices
        .getJobs(page - 1, 4)
        .then(this.getJobsSuccess)
        .catch(this.getJobsError);
    } else {
      jobServices
        .search(page - 1, 4, this.state.searchQuery)
        .then(this.onSearchSuccess)
        .catch(this.onSearchError);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Jobs</h1>
          <div className="col-md-4">
            <input
              type="search"
              name="searchQuery"
              id="searchQuery"
              className="form-control"
              placeholder="Search"
              onChange={this.onChange}
            />
            <button className="btn btn-primary" onClick={this.onSearchClick}>
              Search
            </button>
          </div>
          <button onClick={this.addJobClick} className="btn btn-primary my-3">
            Add Job
          </button>
          <div className="row">{this.state.mappedJobs}</div>
          <Pagination
            className="my-4"
            onChange={this.onPageChange}
            current={this.state.current}
            total={this.state.jobsLength * 2.5}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default React.memo(Jobs);
