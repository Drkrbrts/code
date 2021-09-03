import React, { Component } from "react";
import { getJobs, searchJobs, deleteJobs } from "../../services/jobService";
import SingleJob from "./SingleJob";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";

class Jobs extends Component {
  state = {
    job: [],
    mappedJobs: [],
    jobIdToDelete: [],
    current: 1,
    pageSize: 3,
    searchItem: "",
    totalCount: "",
    isSearching: false,
  };

  componentDidMount() {
    this.onGetJobs(this.state.current, this.state.pageSize);
  }

  onGetJobs = (pageIndex, pageSize) => {
    getJobs(pageIndex - 1, pageSize)
      .then(this.onGetJobSuccess)
      .catch(this.onGetJobError);
  };

  onGetJobSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedJobs: response.data.item.pagedItems.map(this.mapJob),
        totalCount: response.data.item.totalCount,
        pageSize: response.data.item.pageSize,
        pageIndex: response.data.item.pageIndex,
      };
    });
    console.log(this.state);
  };

  onGetJobError = (error) => {
    console.log(error);
  };

  onPaginationClick = (current) => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          current,
        };
      },
      () => this.onGetJobs(this.state.current, this.state.pageSize)
    );
  };

  mapJob = (job) => {
    console.log(job);

    //const imgUrl = job.techCompany.images.map((item) => item.imageUrl);

    return (
      <SingleJob
        key={`Job # ${job.id}`}
        jobs={job}
        img={"https://media.glassdoor.com/l/ee/57/f4/37/front-desk.jpg"}
        onJobDeleteClick={this.onJobDelete}
        {...this.props}
      />
    );
  };

  onJobDelete = (jobToDelete) => {
    console.log(jobToDelete);
    let jobId = jobToDelete.id;

    this.setState((prevState) => {
      return {
        jobIdToDelete: [...prevState.jobIdToDelete, jobId],
      };
    });
    console.log(this.state);

    deleteJobs(jobId, jobToDelete)
      .then(this.onDeleteJobSuccess)
      .catch(this.onJobDeleteError);
  };

  onDeleteJobSuccess = (id) => {
    console.log(id);

    this.setState((prevState) => {
      const indexOfJob = prevState.mappedJobs.findIndex(
        (singleJob) => singleJob.props.jobs.id === id
      );

      const updatedJobs = [...prevState.mappedJobs];

      if (indexOfJob >= 0) {
        updatedJobs.splice(indexOfJob, 1);
      }
      return { mappedJobs: updatedJobs };
    });
  };

  onJobDeleteError = (error) => {
    console.warn(error);
  };

  onAddJobClick = () => {
    this.props.history.push("/jobsform");
  };

  onSearchJobChange = (e) => {
    console.log(e.target);
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState((prevState) => {
      let searchItem = { ...prevState.searchItem };

      searchItem[name] = value;

      return {
        ...prevState,
        searchItem,
      };
    });
  };

  onSearchJobClick = (e) => {
    e.preventDefault();
    let pageIndex = this.state.pageIndex;
    let pageSize = this.state.pageSize;
    let searchTerm = this.state.searchItem.search;

    searchJobs(searchTerm, pageIndex, pageSize)
      .then(this.onSearchJobSuccess)
      .catch(this.onSearchJobError);
  };

  onSearchJobSuccess = (jobResult) => {
    console.log(jobResult);
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedJobs: jobResult.data.item.pagedItems.map(this.mapJob),
        totalCount: jobResult.data.item.totalCount,
        isSearching: true,
      };
    });
  };

  onSearchJobError = (error) => {
    console.warn(error);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h1 className="display-3">
              Jobs
              <span className="px-3">
                <button
                  onClick={this.onAddJobClick}
                  className="add-button btn btn-success text-dark btn-sm"
                  type="submit"
                >
                  + Job
                </button>
              </span>
            </h1>

            <form className="d-flex">
              <input
                onChange={(e) => this.onSearchJobChange(e)}
                name="search"
                style={{
                  display: "inline-block",
                  width: "250px",
                }}
                type="search"
                className="form-control me-2"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                onClick={this.onSearchJobClick}
                className="m-1 btn btn-outline-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <hr />
        <div className="container">
          <div className="row my-3">{this.state.mappedJobs}</div>
          <div className="text-center">
            <Pagination
              onChange={this.onPaginationClick}
              current={this.state.current}
              total={this.state.totalCount}
              pageSize={this.state.pageSize}
              //locale={locale}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
