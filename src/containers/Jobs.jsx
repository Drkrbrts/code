import React from "react";
import SingleJob from "../components/SingleJob";
import { getPaginatedJobs, searchJobs } from "../services/jobsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import SearchForm from "../components/SearchForm";
import { search } from "../services/friendsService";

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
    },
    search: "",
  };

  componentDidMount() {
    console.log("componentDidMount firing");
    this.getPaginated();
    // this.getTechCos();
  }

  getPaginated = (nextPage) => {
    console.log("getPaginated firing");
    let isSearchEmptyString = this.state.search === "";

    if (isSearchEmptyString) {
      if (this.state.jobs.totalCount === 0) {
        getPaginatedJobs(0, 6)
          .then(this.mapSuccessResponse)
          .catch(this.onGetPaginateError);
      } else if (isSearchEmptyString && isNaN(nextPage)) {
        this.setState((prevState) => {
          let jobs = { ...prevState.jobs };
          jobs.currentPage = 1;
          return { jobs };
        }, this.searchResetGetPaginate());
      } else {
        getPaginatedJobs(nextPage - 1, 6)
          .then(this.mapSuccessResponse)
          .catch(this.onGetPaginateError);
      }
    }
  };

  searchResetGetPaginate = () => {
    getPaginatedJobs(0, 6)
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

  mapJobs = (oneJob) => {
    return (
      <SingleJob
        key={`job-${oneJob.id}`}
        job={oneJob}
        onClick={this.onJobClickedFull}
      />
    );
  };

  onJobClickedFull = (job) => {
    console.log("onJobClickedFull firing", job);
  };

  onAddJobClicked = (e) => {
    e.preventDefault();
    console.log("onAddJobClicked firing");
    this.props.history.push("/jobs/form");
  };

  onPageChange = (newPageNumber) => {
    console.log("onPageChange firing", newPageNumber);
    this.setState((prevState) => {
      let jobs = { ...prevState.jobs };
      jobs.currentPage = newPageNumber;
      return { jobs };
    });
    if (this.state.search === null || this.state.search === "") {
      this.getPaginated(newPageNumber);
    } else {
      this.searchFriends(newPageNumber);
    }
  };

  onSearchFieldChange = (target) => {
    console.log("onSearchFieldChange firing", target.value);
    let newValue = target.value;
    let inputName = target.name;
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState[inputName] = newValue;
      return newState;
    });
  };

  onSearchRequested = () => {
    this.searchFriends();
  };

  searchFriends = (page) => {
    let searchEmptyString = this.state.search === "";

    if (!searchEmptyString) {
      if (page === undefined) {
        searchJobs(0, 6, this.state.search)
          .then(this.mapSuccessResponse)
          .catch(this.onSearchJobsError);
      } else {
        search(page - 1, 6, this.state.search)
          .then(this.mapSuccessResponse)
          .catch(this.onSearchJobsError);
      }
    } else {
      this.getPaginated();
    }
  };

  onSearchJobsError = (err) => {
    console.log("onSearchJobsError", err);
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
              onSearch={this.onSearchRequested}
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
