import React, { Component } from "react";
import * as jobService from "./services/jobService";
import SingleJob from "./SingleJob";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import JobModal from "./JobModal";
import { toast, ToastContainer } from "react-toastify";
import Jobs2 from "./Jobs2";

class Jobs extends Component {
  state = {
    currentJob: {},
    jobInfo: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompany: {
        id: "",
        name: "",
        images: [
          {
            imageUrl: "",
          },
        ],
      },
      skills: [],
    },
    searchQuery: "",
    pageIndex: 0,
    pageSize: 5,
    total: 0,
    isOpen: false,
  };

  componentDidMount() {
    jobService
      .getPage(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetAllJobsSuccess)
      .catch(this.onGetAllJobsError);
  }

  mapJob = (aJob) => {
    aJob.skills = aJob.skills.map((s) => s.name).join(", ");

    return (
      <SingleJob
        job={aJob}
        key={aJob.id}
        onHandleEdit={this.onHandleEdit}
        onHandleDelete={this.onHandleDelete}
        onHandleView={this.onHandleViewMore}
      />
    );
  };

  onAddJobClick = () => {
    this.props.history.push("jobs2/new");
  };

  onHandleEdit = (aJob) => {
    console.log(aJob);
    this.props.history.push(`jobs2/${aJob.id}/edit`, aJob);
  };

  onHandleDelete = (aJob) => {
    console.log(aJob);
    //change the status of statusId of Enumfrom active to deleted;
    let deletedJob = { ...aJob };
    deletedJob.statusId = "Deleted";
    deletedJob.skills = deletedJob.skills.map((skill) => skill.name);
    deletedJob.techCompanyId = deletedJob.techCompany.id;
    console.log(deletedJob.techCompany);

    jobService
      .update(deletedJob.id, deletedJob)
      .then(this.onDeleteJobSuccess)
      .catch(this.onDeleteJobError);
  };

  onHandleViewMore = (aJob) => {
    console.log(aJob);
    this.setState(() => {
      return { currentJob: aJob, isOpen: true };
    });
  };

  onHandleToggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpen: !prevState.isOpen,
      };
    });
  };

  //---------------------------
  onGetAllJobsSuccess = (res) => {
    console.log(res);
    let jobs = res.data.item.pagedItems;
    console.log(jobs);

    this.setState((prevState) => {
      return {
        ...prevState,
        total: res.data.item.totalCount,
        mappedJobs: jobs.map(this.mapJob),
      };
    });
  };

  onGetAllJobsError = (err) => {
    console.log({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onUpdateJobSuccess = (res) => {
    console.log(res);
    toast.success("Job was updated successfully :)");
  };

  onUpdateJobError = (err) => {
    console.log({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onDeleteJobSuccess = (res) => {
    console.log(res);
    toast.success("Job Deleted Successfully :)");
  };

  onDeleteJobError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  //PAGINATION

  onPageChanged = (currentPage) => {
    console.log(currentPage);

    this.setState((prevState) => {
      let index = currentPage - 1;
      if (this.state.searchQuery) {
        jobService
          .search(index, this.state.pageSize, this.state.searchQuery)
          .then(this.onGetAllJobsSuccess)
          .catch(this.onGetAllJobsError);
      } else {
        jobService
          .getPage(index, this.state.pageSize)
          .then(this.onGetAllJobsSuccess)
          .catch(this.onGetAllJobsError);
      }
      return { ...prevState, pageIndex: index };
    });
  };

  //SEARCH BAR
  onSearchQuery = (e) => {
    let target = e.target;
    let newValue = target.value;

    this.setState(
      (prevState) => {
        let searchQuery = newValue;
        return { ...prevState, searchQuery };
      },
      () => {
        jobService
          .search(
            this.state.pageIndex,
            this.state.pageSize,
            this.state.searchQuery
          )
          .then(this.onGetAllJobsSuccess)
          .catch(this.onGetAllJobsError);
      }
    );
  };

  //-------------------------------------
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <JobModal
          isOpen={this.state.isOpen}
          toggle={this.onHandleToggle}
          job={this.state.currentJob}
        />
        <div className="col-md-12 p-5 text-center">
          <h1>Jobs</h1>
          <button className="btn btn-primary" onClick={this.onAddJobClick}>
            Add A Job
          </button>

          <form className="form-inline my-2 my-lg-0 p-4">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={this.state.searchQuery}
              name="searchQuery"
              placeholder="Search.."
              aria-label="Search"
              onChange={this.onSearchQuery}
            />
          </form>
          <div className="row">{this.state.mappedJobs}</div>

          <Pagination
            pageSize={this.state.pageSize}
            onChange={this.onPageChanged}
            current={this.state.pageIndex + 1}
            total={this.state.total}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
