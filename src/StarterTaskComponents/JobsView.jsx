import React from "react";
import * as jobsService from "../services/jobsService";
import SingleJob from "./SingleJob";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";

class JobsView extends React.Component {
  state = {
    mappedJobs: [],
    pageSize: 5,
    totalCount: 0,
    pageIndex: 1,
  };
  componentDidMount() {
    console.log("componentDidMount");

    this.getPaginate();
  }

  getPaginate = () => {
    jobsService
      .getAllJobs(this.state.pageIndex - 1, this.state.pageSize)
      .then(this.onGetAllJobsSuccess)
      .catch(this.onGetAllJobsError);
  };
  mapJobs = (job) => {
    return <SingleJob key={`job-${job.id}`} job={job}></SingleJob>;
  };

  onGetAllJobsSuccess = (response) => {
    console.log(response, "onGetAllJobsSuccess");

    let pageCount = response.data.item;

    this.setState((prevState) => {
      return {
        mappedJobs: response.data.item.pagedItems.map(this.mapJobs),
        pageSize: pageCount.pageSize,
        pageIndex: pageCount.pageIndex,
        totalCount: pageCount.totalCount,
      };
    });
  };

  onGetAllJobsError = (error) => {
    console.warn(error, "onGetAllJobsError");
  };

  changePage = (page) => {
    console.log(page);

    this.setState(
      (prevState) => {
        return {
          pageIndex: page,
        };
      },
      () => this.getPaginate()
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <h1
            className="col-3"
            style={{ padding: "15px", marginBottom: "50px" }}
          >
            Jobs
          </h1>
        </div>
        <div
          className="col-2"
          style={{ padding: "20px", position: "absolute", left: "150px" }}
        >
          <button
            className="btn btn-primary"
            type="button"
            style={{ borderRadius: "10px" }}
            onClick={this.onAddFriendsClicked}
          >
            +Jobs
          </button>
        </div>
        <div style={{ padding: "15px" }} className="row">
          {this.state.mappedJobs}
        </div>
        <Pagination
          onChange={this.changePage}
          pageSize={this.state.pageSize}
          total={this.state.totalCount}
        ></Pagination>
      </div>
    );
  }
}

export default JobsView;
