import React from "react";
import * as jobsService from "../services/jobsService";
import SingleJob from "./SingleJob";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import JobsSearch from "./JobsSearchBar";
import ModalView from "./ModalView";
import AltSiteNav from "../AltSiteNav";

class JobsView extends React.Component {
  state = {
    mappedJobs: [],
    selectedJob: null,
    pageSize: 5,
    totalCount: 0,
    pageIndex: 1,
    isOpen: false,
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

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen, //here we flip the bool value of the previous state.
      };
    });
  };

  onAddJobsClicked = () => {
    this.props.history.push("/jobs/new");
  };

  onEditClicked = () => {
    console.log("edit clicked");

    this.props.history.push(`/jobs/${this.state.selectedJob.id}/edit`, {
      type: "TO_UPDATE",
      payload: this.state.selectedJob,
    });
  };

  onSelectedJobChange = (job, event) => {
    this.setState(() => {
      console.log(this.state, "onSelectedJobChange");
      return { selectedJob: job };
    }, this.stateChanged);
  };

  mapJobs = (job) => {
    return (
      <React.Fragment key={`job-${job.id}`}>
        <SingleJob
          job={job}
          onClick={(e) => this.onSelectedJobChange(job, e)}
        ></SingleJob>
      </React.Fragment>
    );
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
      <React.Fragment>
        <AltSiteNav></AltSiteNav>
        <JobsSearch
          pageIndex={this.state.pageIndex}
          pageSize={this.state.pageSize}
          onSuccessSearch={this.onGetAllJobsSuccess}
        ></JobsSearch>
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
              className="btn"
              type="button"
              style={{
                borderRadius: "10px",
                backgroundColor: "rgb(131, 104, 143)",
                color: "white",
                height: "40px",
              }}
              onClick={this.onAddJobsClicked}
            >
              +Jobs
            </button>
          </div>
          <div style={{ padding: "15px" }} className="row">
            {this.state.mappedJobs}
          </div>
        </div>
        <div>
          {this.state.selectedJob && (
            <React.Fragment key={this.state.selectedJob.id}>
              <div
                className="row"
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  className="card"
                  style={{
                    width: "30%",
                    margin: " 0 0 0 10px",
                    padding: "10px",
                    position: "absolute",
                    top: "235px",
                    right: "130px",
                    boxShadow: "0 20px 20px -2px gray",
                  }}
                >
                  <img
                    src={this.state.selectedJob.techCompany.images.imageUrl}
                    className="card-img-top"
                    alt="job"
                    style={{ height: "300px" }}
                  />
                  <div className="card-body">
                    <h3 className="pay">${this.state.selectedJob.pay}</h3>
                    <p className="position" style={{ fontSize: "25px" }}>
                      {this.state.selectedJob.title}
                    </p>

                    <div>
                      <button
                        onClick={this.onEditClicked}
                        className="primary"
                        style={{
                          borderRadius: "10px",
                          width: "30%",
                          height: "40px",
                          marginRight: "20px",
                          color: "white",
                          backgroundColor: `rgb(0, 170, 204)`,
                          border: "1px solid transparent",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="primary"
                        style={{
                          width: "30%",
                          height: "40px",
                          borderRadius: "10px",
                          color: "white",
                          backgroundColor: `rgb(178,132,190)`,
                          border: "1px solid transparent",
                        }}
                        onClick={this.toggleModal}
                      >
                        View More
                      </button>
                      <ModalView
                        isOpen={this.state.isOpen}
                        toggleModal={this.toggleModal}
                        title={this.state.selectedJob.title}
                        pay={this.state.selectedJob.pay}
                        description={this.state.selectedJob.description}
                        summary={this.state.selectedJob.summary}
                        contact={
                          this.state.selectedJob.techCompany.contactInformation
                            .data
                        }
                        slogan={this.state.selectedJob.techCompany.headline}
                        company={this.state.selectedJob.techCompany.name}
                        skills={this.state.selectedJob.skills.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <Pagination
          onChange={this.changePage}
          pageSize={this.state.pageSize}
          total={this.state.totalCount}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default JobsView;
