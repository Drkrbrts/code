import React from "react";
import * as jobServices from "./auth/jobServices";
import SingleJob from "./SingleJob";

class Jobs extends React.Component {
  state = {
    mappedJobs: [],
    jobsArray: [],
  };

  stateChanged = () => {
    console.log(this.state.mappedJobs);
  };

  componentDidMount() {
    jobServices
      .getJobs(0, 20)
      .then(this.getJobsSuccess)
      .catch(this.getJobsError);
  }

  getJobsSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    this.mapJobs(response.data.item.pagedItems);
  };
  getJobsError = (err) => {
    console.log({ error: err });
  };

  mapJobs = (jobs) => {
    let mappedJobs = jobs.map(this.mapJob);
    this.setState((state) => {
      return { mappedJobs };
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
  editClick = () => {
    console.log("Edit was clicked");
  };

  deleteClick = () => {
    console.log("Delete was clicked");
  };

  addJobClick = () => {
    this.props.history.push("/addjob");
  };

  render() {
    return (
      <div className="container">
        <h1>Jobs</h1>
        <button onClick={this.addJobClick} className="btn btn-primary my-3">
          Add Job
        </button>
        <div className="row">{this.state.mappedJobs}</div>
      </div>
    );
  }
}

export default Jobs;
