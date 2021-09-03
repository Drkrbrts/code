import React from "react";
import SingleJob from "../components/SingleJob";
import {
  getPaginatedJobs,
  searchJobs,
  deleteJob,
} from "../services/jobsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import SearchForm from "../components/SearchForm";

/*
  Steps
  Render Cards
    -Get Card Template
    -Create bootstrap container
    -import services
    -call services
    -create mapping function
  
  Create Pagination
    -import
    -add component
    -add page change function
  
*/

class Jobs extends React.Component {
  state = {
    jobs: {
      totalCount: 0,
      currentPage: 1,
      pageSize: 6,
      pagedItems: [],
      mappedJobs: [],
    },
    search: "",
  };

  componentDidMount() {
    console.log("componentDidMount firing");
    this.getPaginated(this.state.jobs.currentPage);
  }

  getPaginated = (nextPage) => {
    getPaginatedJobs(nextPage - 1, this.state.jobs.pageSize)
      .then(this.mapSuccessResponse)
      .catch(this.onGetPaginateError);
  };

  mapSuccessResponse = (response) => {
    console.log(response);
    let paginateInfo = response.data.item;
    let newJobs = paginateInfo.pagedItems;
    let totalCount = paginateInfo.totalCount;

    this.setState((prevState) => {
      let jobs = { ...prevState.jobs };
      jobs.pagedItems = newJobs;
      jobs.totalCount = totalCount;
      jobs.mappedJobs = newJobs.map(this.mapJobs);
      return { jobs };
    });
  };

  onDeleteSuccess = (deletedJobId) => {
    console.log("onDeleteSuccess firing", deletedJobId);
    this.setState((prevState) => {
      const indexOfPagedItem = prevState.jobs.pagedItems.findIndex(
        (pagedItem) => pagedItem.id === deletedJobId
      );

      const updatedJobs = { ...prevState.jobs };
      if (indexOfPagedItem >= 0) {
        updatedJobs.pagedItems.splice(indexOfPagedItem, 1);
      }
      updatedJobs.mappedJobs = updatedJobs.pagedItems.map(this.mapJobs);

      return { jobs: updatedJobs };
    });

    let notify = () =>
      toast.success("Job post successful deleted", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  mapJobs = (oneJob) => {
    return (
      <SingleJob
        key={`job-${oneJob.id}`}
        job={oneJob}
        actionRequested={this.actionRequested}
      />
    );
  };

  actionRequested = (job, action) => {
    console.log("onJobClickedFull firing", job);
    action === "delete" ? this.onDeleteJob(job.id) : this.onEditJob(job);
  };

  onAddJobClicked = (e) => {
    e.preventDefault();
    console.log("onAddJobClicked firing");
    this.props.history.push("/jobs/form");
  };

  onDeleteJob = (jobId) => {
    console.log("onDeleteFriend firing", jobId);
    deleteJob(jobId).then(this.onDeleteSuccess).catch(this.onDeleteError);
  };

  onGetPaginateError = (err) => {
    console.log(err);
    let notify = () =>
      toast.error(
        "There was an error retrieving the job posts.  Please refresh the page.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  onDeleteFriendError = (err) => {
    console.log(err);
    let notify = () =>
      toast.error("There was an error deleting your job post.  Try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  onSearchJobsError = (err) => {
    console.log("onSearchJobsError", err);
    let notify = () =>
      toast.error("Now job posts were found matching your search query", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  onEditJob = (job) => {
    console.log("onEditJob firing", job);
    this.props.history.push(`/jobs/form?jobId=${job.id}`);
  };

  onPageChange = (newPageNumber) => {
    console.log("onPageChange firing", newPageNumber);
    this.setState(
      (prevState) => {
        let jobs = { ...prevState.jobs };
        jobs.currentPage = newPageNumber;
        return { ...prevState, jobs };
      },
      () => {
        if (!this.state.search) {
          this.getPaginated(newPageNumber);
        } else {
          this.searchJobs(newPageNumber);
        }
      }
    );
  };

  // onSearchRequested = () => {
  //   this.searchJobs();
  // };

  searchJobs = (page) => {
    searchJobs(page - 1, this.state.jobs.pageSize, this.state.search)
      .then(this.mapSuccessResponse)
      .catch(this.onSearchJobsError);
  };

  onSearchFieldChange = (target) => {
    console.log("onSearchFieldChange firing", target.value);
    let newValue = target.value;
    let inputName = target.name;
    this.setState(
      (prevState) => {
        let newState = { ...prevState };
        newState[inputName] = newValue;
        return newState;
      },
      () => {
        this.searchJobs(1);
      }
    );
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-around border-bottom bg-light">
          <div className="d-flex align-items-center">
            <span className="pb-1" style={{ fontSize: "40px" }}>
              Jobs
            </span>
            <button
              className="btn btn-primary mx-3"
              type="button"
              onClick={this.onAddJobClicked}
            >
              + Job
            </button>
          </div>
          <div className="d-flex align-items-center">
            <SearchForm
              search={this.state.search}
              // onSearch={this.onSearchRequested}
              onChangeRequested={this.onSearchFieldChange}
            />
          </div>
        </div>
        <div className="row p-3 mx-2">
          <Pagination
            current={this.state.jobs.currentPage}
            total={this.state.jobs.totalCount}
            onChange={this.onPageChange}
            defaultPageSize={6}
          />
        </div>
        <div className="container">
          <div className="row">
            {this.state.jobs.mappedJobs && this.state.jobs.mappedJobs}
          </div>
        </div>
      </>
    );
  }
}
export default Jobs;
