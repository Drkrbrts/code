import React from "react";
import { withRouter } from "react-router-dom";
import "./compStyle.css";
import jobService from "../services/jobService";
import SingleJob from "./singeJob";
import JobsModal from "./JobsModal";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/es/locale/en_US";
import "rc-pagination/assets/index.css";
import debug from "sabio-debug";
const _logger = debug.extend("App");

class Jobs extends React.Component {
  state = {
    mappedJobs: [],
    formData: { jobSearch: "" },
    isOpen: false,
    jobModalTitle: "",
    jobModalContent: {},
    currentPage: 1,
    pageSize: 3,
    totalNumberOfJobs: 0,
    isSearch: false,
    searchQuery: "",
  };

  componentDidMount() {
    jobService
      .getByPagination(this.state.currentPage, this.state.pageSize)
      .then(this.onGetByPaginationSuccess)
      .catch(this.onGetByPaginationError);
  }

  onPagChange = (currentPage, size) => {
    this.setState(
      (prevState) => {
        return { ...prevState, currentPage };
      },
      () => {
        this.state.isSearch
          ? jobService
              .getByPaginatedSearch(currentPage, size, this.state.searchQuery)
              .then(this.onGetByPaginationSuccess)
              .catch(this.onGetByPaginationError)
          : jobService
              .getByPagination(currentPage, size)
              .then(this.onGetByPaginationSuccess)
              .catch(this.onGetByPaginationError);
      }
    );
  };

  onGetByPaginationSuccess = (response) => {
    let { item } = response.data;
    this.setState((prevState) => {
      let mappedJobs = { ...prevState.mappedJobs };
      let currentJobs = item.pagedItems;
      mappedJobs = currentJobs.map(this.mapJob);
      let totalNumberOfJobs = { ...prevState.totalNumberOfJobs };
      totalNumberOfJobs = item.totalCount;
      return { mappedJobs, totalNumberOfJobs };
    });
  };

  onGetByPaginationError = (response) => {
    _logger({ response });
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = NewValue;
      return { formData };
    });
  };

  onSearchClick = () => {
    let currentFormData = this.state.formData.jobSearch;
    let splitFormData = currentFormData.split(" ");
    let finalStringForm = splitFormData.join("%20");
    this.setState((prevState) => {
      let isSearch = { ...prevState.isSearch };
      let searchQuery = { ...prevState.searchQuery };
      let currentPage = { ...prevState.currentPage };
      isSearch = true;
      searchQuery = finalStringForm;
      currentPage = 1;
      return { isSearch, searchQuery, currentPage };
    });
    jobService
      .getByPaginatedSearch(
        this.state.currentPage,
        this.state.pageSize,
        finalStringForm
      )
      .then(this.onGetByPaginationSuccess)
      .catch(this.onGetByPaginationError);
  };

  onCancelSearchClick = () => {
    jobService
      .getByPagination(this.state.currentPage, this.state.pageSize)
      .then(this.onCancelSearchGetAllSuccess)
      .catch(this.onGetByPaginationError);
  };

  onCancelSearchGetAllSuccess = (response) => {
    let { item } = response.data;
    this.setState((prevState) => {
      let mappedJobs = { ...prevState.mappedJobs };
      let isSearch = { ...prevState.isSearch };
      let searchQuery = { ...prevState.searchQuery };
      let totalNumberOfJobs = { ...prevState.totalNumberOfJobs };
      let currentJobs = item.pagedItems;
      mappedJobs = currentJobs.map(this.mapJob);
      totalNumberOfJobs = item.totalCount;
      isSearch = false;
      searchQuery = "";
      let formData = { ...prevState.formData };
      formData.jobSearch = "";
      return {
        mappedJobs,
        totalNumberOfJobs,
        isSearch,
        formData,
        searchQuery,
      };
    });
  };

  onAddJobClick = () => {
    this.props.history.push("/jobform");
  };

  onDeleteClick = (id) => {
    _logger(id);
    jobService
      .deleteById(id)
      .then(this.onDeleteByIdSucess)
      .catch(this.onDeleteByIdError);
  };

  onDeleteByIdSucess = (id) => {
    this.setState((prevState) => {
      const indexOfJob = prevState.mappedJobs.findIndex(
        (singleJob) => singleJob.key === `job_${id}`
      );

      const updatedJobs = [...prevState.mappedJobs];

      if (indexOfJob >= 0) {
        updatedJobs.splice(indexOfJob, 1);
      }
      return { mappedJobs: updatedJobs };
    }, this.stateChanged);
    toast.success("Friend Successfully Deleted");
  };

  onDeleteByIdError = (response) => {
    _logger({ response });
    toast.warn("Unable to Delete friend");
  };

  onModalClick = (e) => {
    let event = e;
    let skillMapped = event.skills.map(this.mapSkill);
    let skillString = skillMapped.toString();

    this.setState((prevState) => {
      let jobModalTitle = { ...prevState.jobModalTitle };
      let jobModalContent = { ...prevState.jobModalContent };
      jobModalTitle = event.title;
      jobModalContent = {
        id: event.id,
        pay: event.pay,
        skills: skillString,
        slug: event.slug,
        statusId: event.statusId,
        summary: event.summary,
        techCompany: event.techCompany.name,
      };
      return { isOpen: !prevState.isOpen, jobModalTitle, jobModalContent };
    });
  };

  mapSkill = (skill) => {
    return ` ${skill.name}`;
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
        key={`job_${oneJob.id}`}
        job={oneJob}
        onDeleteClick={this.onDeleteClick}
        onModalClick={this.onModalClick}
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
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={this.onSearchClick}
              >
                Search
              </button>
              {this.state.isSearch ? (
                <button
                  type="button"
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
            pageSize={this.state.pageSize}
            total={this.state.totalNumberOfJobs}
            onChange={this.onPagChange}
            locale={localeInfo}
            current={this.state.currentPage}
          />
          <JobsModal
            {...this.props}
            isOpen={this.state.isOpen}
            toggleModal={this.toggleModal}
            title={this.state.jobModalTitle}
            content={this.state.jobModalContent}
          />
          <div className="row">{this.state.mappedJobs}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Jobs);
