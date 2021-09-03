import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import SingleModal from "./SingleModal";
import techCoServices from "../services/techCoServices";
import SingleTechCo from "./TechCos/singleTechCo";

class TechCos extends Component {
  state = {
    mappedCos: [],
    totalCos: "",
    searchQuery: "",
    searchEnacted: false,
    isOpen: false,
    coModalInfo: { title: "", content: "" },
  };

  componentDidMount() {
    techCoServices
      .getAll(0, 6)
      .then(this.onGetCosSuccess)
      .catch(this.onGetCosError);
  }

  onGetCosSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedCos = response.data.item.pagedItems.map(this.mapTechCos);
      newState.totalCos = response.data.item.totalCount;
      newState.searchQuery = "";
      newState.searchEnacted = false;

      return newState;
    });
  };
  onGetCosError = (errResponse) => {
    console.log(errResponse);
  };

  mapTechCos = (onTechCo) => {
    console.log(onTechCo);
    return (
      <div
        key={`tcid-${onTechCo.id}`}
        className="col-lg-4 col-md-6 col-sm-12 my-3"
      >
        <SingleTechCo
          techCo={onTechCo}
          toggleModal={this.toggleModal}
          onClick={this.onJobClickFull}
          {...this.props}
        ></SingleTechCo>
      </div>
    );
  };

  onJobClickFull = (job) => {
    console.log(job);
    // if (typeof job !== "object") {
    //   let jobDeleteSuccsess = this.onDeleteSuccess(job);
    //   jobsServices
    //     .deleteJob(job)
    //     .then(jobDeleteSuccsess)
    //     .catch(this.onDeleteError);
    // } else {
    //   this.setState((prevState) => {
    //     let newModal = { ...prevState.jobModalInfo };
    //     newModal.title = <p className="fw-bold">{job.title}</p>;
    //     newModal.content = (
    //       <React.Fragment>
    //         <p>Description: {job.description}</p>
    //         <p>Summary: {job.summary}</p>
    //         <p>Pay: {job.pay}</p>
    //         <p>Status: {job.statusId}</p>
    //         <p>Skills: {job.skills.map(this.mapSkills).join(", ")}</p>
    //       </React.Fragment>
    //     );

    //     return { jobModalInfo: newModal };
    //   });

    //   this.toggleModal();
    // }
  };

  //   onDeleteSuccess = (myId) => {
  //     this.setState((prevState) => {
  //       let newJobArray = prevState.mappedJobs.filter((item) => {
  //         let result = true;

  //         if (item.key === `jid-${myId}`) {
  //           result = false;
  //         }

  //         return result;
  //       });
  //       return { mappedJobs: newJobArray };
  //     });
  //   };
  //   onDeleteError = (errResponse) => {
  //     console.log(errResponse);
  //   };

  onSearchChanged = (e) => {
    let newValue = e.currentTarget.value;
    this.setState((prevState) => {
      let newSearchQuery = { ...prevState.searchQuery };

      newSearchQuery = newValue;

      return { searchQuery: newSearchQuery };
    });
  };

  onSearchButtonClicked = (e) => {
    e.preventDefault();
    console.log(e);
    let search = this.state.searchQuery.split(" ").join("%20");
    console.log(search);
    // jobsServices
    //   .searchJobs(0, 6, search)
    //   .then(this.onSearchJobsSuccess)
    //   .catch(this.onSearchJobsError);
  };

  onSearchJobsSuccess = (response) => {
    console.log(response);
    // this.setState((prevState) => {
    //   let newState = { ...prevState };
    //   newState.mappedJobs = response.data.item.pagedItems.map(this.mapJobs);
    //   newState.totalJobs = response.data.item.totalCount;
    //   newState.searchEnacted = true;
    //   return newState;
    // });
  };

  onSearchJobsError = (errResponse) => {
    console.log(errResponse);
  };

  onClearSearch = (e) => {
    e.preventDefault();
    techCoServices
      .getAll(0, 6)
      .then(this.onGetCosSuccess)
      .catch(this.onGetCosError);
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  onPaginationClick = (current, pageSize) => {
    let start = current - 1;
    console.log(start, pageSize);
    // if (this.state.searchEnacted) {
    //   let search = this.state.searchQuery.split(" ").join("%20");
    //   console.log("search", this.state.searchEnacted);
    //   jobsServices
    //     .searchJobs(start, pageSize, search)
    //     .then(this.onSearchJobsSuccess)
    //     .catch(this.onSearchJobsError);
    //   return;
    // }
    // console.log("getAll", this.state.searchEnacted);
    // jobsServices
    //   .getAll(start, pageSize)
    //   .then(this.onGetJobsSuccess)
    //   .catch(this.onGetJobsError);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h3>
              Tech Companies
              <span className="px-3">
                <NavLink to="/techCoForm">
                  <button
                    className=" px-2 btn btn-outline-primary"
                    type="submit"
                  >
                    + TechCos
                  </button>
                </NavLink>
              </span>
            </h3>

            <form className="d-flex">
              <input
                className="form-control me-2"
                // type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onSearchChanged}
                value={this.state.searchQuery}
                onClick={this.onSearchClear}
              />
              {this.state.searchQuery && (
                <button
                  className="btn btn-outline-danger me-2"
                  type="submit"
                  onClick={this.onClearSearch}
                >
                  X
                </button>
              )}

              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={this.onSearchButtonClicked}
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="row my-3">{this.state.mappedCos}</div>
        </div>
        <div className="text-center">
          <Pagination
            pageSize={6}
            total={this.state.totalCos}
            onChange={this.onPaginationClick}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className=" col-md-12 p-5">
              <SingleModal
                {...this.props}
                isOpen={this.state.isOpen}
                toggleModal={this.toggleModal}
                title={this.state.coModalInfo.title}
                content={this.state.coModalInfo.content}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TechCos);
