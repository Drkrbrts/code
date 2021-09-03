import React from "react";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import * as JobService from "../services/JobService";
import JobCard from "../components/JobCard";
import ViewMoreModal from "../components/ViewMoreModal";

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        searchTerm: "",
      },
      current: 0,
      total: 0,
      pageIndex: 0,
      pageSize: 10,
      imageUrl:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092015/google_new_logo_fav_icon.png?itok=JLjdBZEh",
      isOpen: false,
      modalTitle: "",
      modalDescription: "",
      modalSummary: "",
      modalPay: "",
      modalSlug: "",
      modalStatusId: "",
    };
  }

  componentDidMount() {
    JobService.getPaginated(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetPaginatedSuccess)
      .catch(this.onGetPaginatedError);
  }

  onGetPaginatedSuccess = (response) => {
    console.log("getPaginated is executing");
    console.log(response);
    let myJobs = response.data.item.pagedItems;
    let trueTotal = response.data.item.totalCount;
    this.setState((preState) => {
      return {
        mappedJobs: myJobs.map(this.mapJobs),
        total: trueTotal,
      };
    });
  };

  onGetPaginatedError = (err) => {
    console.log(err);
  };

  onChange = (page) => {
    console.log(page);

    this.setState(
      {
        current: page,
        pageIndex: page - 1,
      },
      (preState) => {
        this.getJobPaginated();
      }
    );
  };

  getJobPaginated = () => {
    console.log("getJobPaginated is executing");
    JobService.getPaginated(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetPaginatedSuccess)
      .catch(this.onGetPaginatedError);
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    console.log({ currentTarget, newValue });

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onAddJobClicked = () => {
    console.log("onAddJob was clicked");
    this.props.history.push("/jobs/addJob");
  };

  onEditJobClicked = (oneJob) => {
    console.log("You clicked edit for JobId: " + oneJob.id);
    this.props.history.push("/addJob/" + oneJob.id);
  };

  onDeleteJobClicked = (oneJob) => {
    console.log("There is no endpoint for deleting jobs");
    console.log("You clicked the delete button for jobId: " + oneJob.id);
  };

  onSearchClicked = () => {
    let data = { ...this.state.formData };
    JobService.searchJob(
      this.state.pageIndex,
      this.state.pageSize,
      data.searchTerm
    )
      .then(this.onSearchJobSuccess)
      .catch(this.onSearchJobError);
  };

  onSearchJobSuccess = (response) => {
    console.log(response);
  };

  onSearchJobError = (err) => {
    console.log(err);
  };

  toggleModal = (oneJob) => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
        modalTitle: oneJob.title,
        modalDescription: oneJob.description,
        modalSummary: oneJob.summary,
        modalPay: oneJob.pay,
        modalSlug: oneJob.slug,
        modalStatusId: oneJob.statusId,
      };
    });
  };

  mapJobs = (oneJob) => {
    return (
      <React.Fragment key={oneJob.id}>
        <JobCard
          imageUrl={this.state.imageUrl}
          pay={oneJob.pay}
          title={oneJob.title}
          description={oneJob.description}
          edit={() => this.onEditJobClicked(oneJob)}
          delete={() => this.onDeleteJobClicked(oneJob)}
          viewMore={() => this.toggleModal(oneJob)}
        ></JobCard>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-1 bg-dark text-white">
          <div className="container p-1">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link to="/jobs/addJob">
                <button
                  type="button"
                  className="btn btn-info me-2"
                  onClick={this.onAddJobClicked}
                >
                  + Job
                </button>
              </Link>
              <form>
                <input
                  type="search"
                  name="searchTerm"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{ marginLeft: "850px", width: "25%" }}
                  onChange={this.onFormFieldChanged}
                ></input>
              </form>
              <div className="text-end">
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={this.onSearchClicked}
                  style={{ marginLeft: "65px" }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="card-container p-5">
          <div className="row card-deck" style={{ height: "675px" }}>
            <div className="col-3">{this.state.mappedJobs}</div>
          </div>
        </div>
        <ViewMoreModal
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          title={this.state.modalTitle}
          description={this.state.modalDescription}
          summary={this.state.modalSummary}
          pay={this.state.modalPay}
          slug={this.state.modalSlug}
          statusId={this.state.modalStatusId}
        />
        <Pagination
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            marginBottom: "-125px",
            marginLeft: `550px`,
          }}
          onChange={this.onChange}
          current={this.state.current}
          total={this.state.total}
        />
      </React.Fragment>
    );
  }
}

export default Jobs;
