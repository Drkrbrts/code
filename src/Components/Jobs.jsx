import React, { Component } from "react";
import { toast } from "react-toastify";
import * as jobService from "../services/jobsService";
import SingleJob from "./singleJobMap";
import ModalExample from "./ModalTest";

class Jobs extends Component {
  state = {
    search: {
      searchBar: "",
    },
    isOpen: false,
  };

  componentDidMount() {
    jobService.getAll().then(this.onGetAllSuccess).catch(this.onGetAllError);
  }
  // Modal
  onHandleViewMore = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  mapJobForCards = (job) => {
    return (
      <React.Fragment key={job.id}>
        <SingleJob
          job={job}
          onHandleEdit={this.onHandleEdit}
          onDeleteRequested={this.onDeleteRequested}
          onHandleViewMore={this.onHandleViewMore}
        ></SingleJob>
      </React.Fragment>
    );
  };
  mapImg = (oldImg) => {
    var imgUrl = oldImg.imageUrl;
    return imgUrl;
  };
  mapJobSkills = (oldSkills) => {
    let newSkills = oldSkills.name;
    return newSkills;
  };
  mapJobData = (job) => {
    var techCoImg = job.techCompany.images.map(this.mapImg);
    let newSkills = job.skills.map(this.mapJobSkills);
    let jobData = {
      id: job.id,
      pay: job.pay,
      skills: newSkills.toString(),
      statusId: job.statusId,
      summary: job.summary,
      img: techCoImg.toString(),
      title: job.title,
      location: job.description,
      companySummary: job.techCompany.summary,
    };
    return jobData;
  };
  onGetAllSuccess = (response) => {
    console.log(response);
    let jobsArr = response.data.item.pagedItems;
    let mappedJobData = jobsArr.map(this.mapJobData);

    this.setState((prevState) => {
      return {
        mappedJobs: mappedJobData.map(this.mapJobForCards),
        jobData: mappedJobData,
      };
    });
  };
  onGetAllError = (err) => {
    console.error(err);
  };
  onHandleEdit = (jobId) => {
    this.props.history.push(`addOrEditJobs/${jobId}`);
  };
  onAddNewJob = () => {
    this.props.history.push(`/addOrEditJobs/add`);
  };
  searchBarData = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let search = { ...this.state.search };
      search[inputName] = newValue;
      return { search };
    });
  };
  searchJobs = () => {
    let searchJobs = this.state.search.searchBar;

    jobService
      .searchReq(searchJobs)
      .then(this.onGetAllSuccess)
      .catch(this.searchErr);
  };
  searchErr = (err) => {
    console.error(err);
    toast.error("No Results, please try again.");
  };
  showAll = () => {
    jobService.getAll().then(this.onGetAllSuccess).catch(this.onGetAllError);
  };

  render() {
    return (
      <React.Fragment>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="jumbotron-heading">Jobs</h1>
              <p className="lead text-muted">
                Find jobs created by your friends or create a job for your
                friends to see.
              </p>
              <p>
                <button
                  id="addNewJob"
                  type="button"
                  className="btn btn-dark my-2"
                  onClick={this.onAddNewJob}
                >
                  Add a job
                </button>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-dark">
          <div className="container">
            <form className="d-flex">
              <input
                id="searchBar"
                className="form-control me-2"
                type="search"
                placeholder="Search Jobs"
                aria-label="Search"
                name="searchBar"
                value={this.state.search.searchBar}
                onChange={this.searchBarData}
              />
              <button
                id="searchJobsBtn"
                className="btn btn-outline-light"
                type="button"
                onClick={this.searchJobs}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="album py-5 mb-5 bg-light">
          <div className="container mt-5">
            <div className="d-flex justify-content-between">
              <h4>Recommended Jobs</h4>
              <button
                id="allJobs"
                className="btn btn-sm btn-outline-dark"
                onClick={this.showAll}
              >
                Show all
              </button>
            </div>
            <div className="row mt-2 g-1 jobCard-Container">
              <ModalExample
                {...this.state.jobData}
                isOpen={this.state.isOpen}
                toggleModal={this.onHandleViewMore}
                title={"Title goes here."}
                content={"Content for Modal goes here."}
              />
              {this.state.mappedJobs}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
