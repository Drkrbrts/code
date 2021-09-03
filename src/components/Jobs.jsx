import React from "react";
import * as jobsService from "../services/jobsService";
import JobForm from "./JobForm";
import JobCard from "./JobCard";

export default class Jobs extends React.Component {
  state = {
    formData: null,
  };
  componentDidMount() {
    jobsService.getPaginated().then(this.onGetSuccess).catch(this.onGetError);
  }
  onGetSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return {
        mappedJobs: response.data.item.pagedItems.map(this.mapJob),
      };
    });
  };
  onGetError = (error) => {
    console.log(error);
  };
  onAddJobClick = (e) => {
    e.preventDefault();
    this.setState(() => {
      return { formData: {} };
    });
  };
  onCancelRequest = () => {
    this.setState(() => {
      return { formData: null };
    });
  };
  onSaveRequest = (job) => {
    console.log(job);
    const payload = {};
    jobsService.add(payload).then(this.onAddSuccess).catch(this.onAddError);
  };
  onEditSuccess = (response) => {
    console.log(response);
  };
  onEditError = (error) => {
    console.log(error);
  };
  onAddSuccess = (response) => {
    console.log(response);
  };
  onAddError = (error) => {
    console.log(error);
  };
  onJobEditClick = (job) => {
    console.log(job);
  };
  onJobInfoClick = () => {};

  mapJob = (job) => {
    return (
      <JobCard
        key={job.id}
        job={job}
        onInfo={this.onJobInfoClick}
        onEdit={this.onJobEditCLick}
        onDelete={this.onDeleteRequest}
      />
    );
  };

  render() {
    return (
      <>
        <h3>Jobs</h3>
        <hr />
        {this.state.formData === null && (
          <>
            <button onClick={this.onAddJobClick}>Add Job</button>
            <div className="row">{this.state.mappedJobs}</div>
          </>
        )}
        {this.state.formData && <JobForm onCancel={this.onCancelRequest} />}
      </>
    );
  }
}
