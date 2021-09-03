import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import JobCard from "./JobCard";
import Pagination from "rc-pagination";
import Button from "react-bootstrap/Button";
import "./Jobs.css";
//import "bootstrap/dist/css/bootstrap.min.css";

const PAGE_SIZE = 8;

class Jobs extends Component {
  state = {
    searchTerm: "",
    totalCount: 0,
    totalPages: 1,
    currentPageIndex: 0,
    techCompany: [],
    jobs: [],
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onSearchClick = () => {
    this.searchJobs();
  };

  searchJobs = () => {
    let apiUrl = "";

    if (!!this.state.searchTerm) {
      apiUrl = `https://api.remotebootcamp.dev/api/jobs/search?pageIndex=${this.state.currentPageIndex}&pageSize=${PAGE_SIZE}&searchTerm=${this.state.searchTerm}`;
    } else {
      apiUrl = `https://api.remotebootcamp.dev/api/jobs?pageIndex=${this.state.currentPageIndex}&pageSize=${PAGE_SIZE}`;
    }
    const config = {
      method: "GET",
      url: apiUrl,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("newest data", response.data.item.pagedItems);
        this.setState({
          totalCount: response.data.item.totalCount,
          currentPageIndex: response.data.item.pageIndex,
          totalPages: response.data.item.totalPages,
          jobs: response.data.item.pagedItems,
        });
      })
      .catch((response) => {
        console.warn(response);
        this.setState({
          jobs: [],
        });
      });
  };

  onPaginationChange = (current, pageSize) => {
    this.setState({ currentPageIndex: current - 1 }, () => {
      this.searchJobs();
    });
  };

  // deleteJob = (id) => {
  //   console.log(id);
  //   var config = {
  //     method: "DELETE",
  //     url: "https://api.remotebootcamp.dev/api/jobs/" + id,
  //     crossdomain: true,
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   axios(config)
  //     .then((response) => {
  //       console.log("data", response.data);
  //     })
  //     .catch((response) => {
  //       console.warn(response);
  //     })
  //     .finally(() => {
  //       this.searchJobs();
  //     });
  // };

  componentDidMount() {
    this.searchJobs();
  }

  render() {
    return (
      // function makeItem(skill, index) {
      //   return <li key={index}> {skill.name} </li>;
      // }
      // const items = job.skills.map(makeItem);

      <div className="container">
        <div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="d-flex">
              <input
                type="search"
                className="form-control form-control-dark search-box"
                name="searchQuery"
                placeholder="Search for Jobs"
                aria-label="Search"
                value={this.state.searchTerm}
                onChange={this.handleSearchChange}
              />
              &nbsp;
              <button
                class="btn btn-secondary btn-md"
                onClick={this.onSearchClick}
                type="button"
              >
                Search
              </button>
              <div className="ml-auto">
                <NavLink to="/AddJob">
                  <Button> Add Job </Button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          {this.state.jobs.map((job) => (
            <JobCard key={job.id} job={job} /> //deleteJob={this.deleteJob}//
          ))}

          {/* {this.state.techCompany.map((techCo, techindex) => (
            <JobCard key={techindex} techCo={techCo} /> //deleteJob={this.deleteJob}//
          ))} */}

          <div style={{ height: 100, marginVertical: 20, paddingTop: 25 }}>
            <Pagination
              total={this.state.totalCount}
              current={this.state.currentPageIndex + 1}
              pageSize={PAGE_SIZE}
              onChange={this.onPaginationChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Jobs);
