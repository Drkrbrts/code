import React from "react";
import { withRouter } from "react-router-dom";
import "./compStyle.css";
import jobService from "../services/jobService";
import SingleJob from "./singeJob";
import JobsModal from "./JobsModal";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Jobs extends React.Component {
  state = {
    currentJobs: [],
    mappedJobs: [],
    totalNumberOfJobs: "",
    formData: { jobSearch: "" },
    isOpen: false,
    jobModalInfo: { title: "", content: {} },
  };

  componentDidMount() {
    jobService
      .getFirstPage()
      .then(this.onGetFirstPageSuccess)
      .catch(this.onGetFirstPageError);
  }

  onGetFirstPageSuccess = (response) => {
    // console.log(response);
    this.setState((prevState) => {
      let currentJobs = { ...prevState.currentJobs };
      let mappedJobs = { ...prevState.mappedJobs };
      let totalNumberOfJobs = { ...prevState.totalNumberOfJobs };
      currentJobs = response.data.item.pagedItems;
      mappedJobs = currentJobs.map(this.mapJob);
      totalNumberOfJobs = response.data.item.totalCount;
      return { currentJobs, mappedJobs, totalNumberOfJobs };
    });
  };

  onGetFirstPageError = (response) => {
    console.log(response);
  };

  onAddJobClick = () => {
    this.props.history.push("/jobform");
  };

  onPagChange = (currentPage, size) => {
    jobService
      .getByPagination(currentPage, size)
      .then(this.onGetByPaginationSuccess)
      .catch(this.onGetByPaginationError);
  };

  onGetByPaginationSuccess = (response) => {
    this.setState((prevState) => {
      let currentJobs = { ...prevState.currentJobs };
      let mappedJobs = { ...prevState.mappedJobs };
      currentJobs = response.data.item.pagedItems;
      mappedJobs = currentJobs.map(this.mapJob);
      return { currentJobs, mappedJobs };
    });
  };

  onGetByPaginationError = (response) => {
    console.log(response);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let isSearch = true;
      let formData = { ...prevState.formData };
      formData[inputName] = NewValue;
      return { formData, isSearch };
    });
  };

  onCancelSearchClick = (e) => {
    e.preventDefault();
    jobService
      .getFirstPage()
      .then(this.onCancelSearchGetAllSuccess)
      .catch(this.onCancelSearchGetAllError);
  };

  onCancelSearchGetAllSuccess = (response) => {
    // console.log(response.data.item.pagedItems);
    this.setState((prevState) => {
      let currentJobs = { ...prevState.currentJobs };
      let mappedJobs = { ...prevState.mappedJobs };
      currentJobs = response.data.item.pagedItems;
      mappedJobs = currentJobs.map(this.mapJob);
      let totalNumberOfJobs = response.data.item.totalCount;
      let isSearch = false;
      let formData = { ...prevState.formData };
      formData.jobSearch = "";
      return {
        currentJobs,
        mappedJobs,
        totalNumberOfJobs,
        isSearch,
        formData,
      };
    });
  };

  onCancelSearchGetAllError = (err) => {
    console.error(err);
  };

  onSearchClick = (e) => {
    e.preventDefault();
    let currentFormData = this.state.formData.jobSearch;
    let splitFormData = currentFormData.split(" ");
    let finalStringForm = splitFormData.join("%20");
    console.log(finalStringForm);
    jobService
      .getByPaginatedSearch(1, 3, finalStringForm)
      .then(this.onGetByPaginatedSearchSuccess)
      .catch(this.onGetByPaginatedSearchError);
  };

  onGetByPaginatedSearchSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let currentJobs = { ...prevState.currentJobs };
      let mappedJobs = { ...prevState.mappedJobs };
      currentJobs = response.data.item.pagedItems;
      mappedJobs = currentJobs.map(this.mapJob);
      let totalNumberOfJobs = response.data.item.totalCount;
      return { currentJobs, mappedJobs, totalNumberOfJobs };
    });
  };

  onGetByPaginatedSearchError = (response) => {
    console.log(response);
  };

  onDeleteorModalClick = (e) => {
    let event = e;
    if (typeof event === "number") {
      jobService
        .deleteById(e.id)
        .then(this.onDeleteByIdSucess)
        .catch(this.onDeleteByIdError);
    } else if (typeof event === "object") {
      console.log(event);
      this.setState((prevState) => {
        let jobModalInfo = { ...prevState.jobModalInfo };
        jobModalInfo.title = event.title;
        jobModalInfo.content = {
          id: event.id,
          pay: event.pay,
          skills: event.skills,
          slug: event.slug,
        };
      });
    }
  };

  onDeleteByIdSucess = (id) => {
    this.setState((prevState) => {
      const updatedMappedItems = prevState.mappedJobs.filter((singleJob) => {
        return singleJob.key !== `job-${id}`;
      });
      return { mappedJobs: updatedMappedItems };
    }, this.stateChanged);
    toast.success("Friend Successfully Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onDeleteByIdError = (response) => {
    console.log(response);
    toast.warn("Unable to Delete friend", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  mapJob = (oneJob) => {
    return (
      <SingleJob
        key={`job-${oneJob.id}`}
        job={oneJob}
        onClick={this.onDeleteorModalClick}
        {...this.props}
      ></SingleJob>
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Jobs
            </strong>
            <button
              className="btn btn-outline-light me-auto"
              onClick={this.onAddJobClick}
            >
              +Job
            </button>
            <form className="d-flex">
              <input
                type="text"
                className="form-control mx-2"
                id="jobSearch"
                name="jobSearch"
                placeholder="Search"
                onChange={this.onFormFieldChange}
                value={this.state.formData.jobSearch}
              />
              <button
                className="btn btn-outline-light mx-2"
                onClick={this.onSearchClick}
              >
                Search
              </button>
              {this.state.isSearch ? (
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={this.onCancelSearchClick}
                >
                  Cancel
                </button>
              ) : null}
            </form>
          </div>
        </nav>
        <div className="col-md-12 p-5">
          <Pagination
            pageSize={3}
            total={this.state.totalNumberOfJobs}
            onChange={this.onPagChange}
          />
          <JobsModal
            {...this.props}
            isOpen={this.state.isOpen}
            toggleModal={this.toggleModal}
            // title={this.state.jobModalInfo.title}
            // content={this.state.jobModalInfo.content}
          />
          <div className="row">{this.state.mappedJobs}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Jobs);
