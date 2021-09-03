import React from "react";
import { getJobs } from "../../services/userService";
import SingleJob from "./SingleJob";
// import Pagination from "rc-pagination";

class Jobs extends React.Component {
  state = { job: [], mappedJobs: [], current: 1, pageSize: 3 };

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
        totalJobs: response.data.item.totalCount,
        pageSize: response.data.item.pageSize,
        pageIndex: response.data.item.pageIndex,
      };
    });
    console.log(this.state);
  };

  onGetJobError = (error) => {
    console.log(error);
  };

  mapJob = (job) => {
    console.log(job);
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     mappedCompanyImage: job.techCompany.images.map()
    //   }
    // })
    return <SingleJob key={`Job # ${job.id}`} jobs={job} />;
  };

  onAddJobClick = () => {
    this.props.history.push("/jobsform");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid px-4">
            <h2>
              Jobs
              <span className="px-3">
                <button
                  onClick={this.onAddJobClick}
                  className="add-button btn btn-outline-primary"
                  type="submit"
                >
                  + Job
                </button>
              </span>
            </h2>

            <form className="d-flex">
              <input
                // onChange={(e) => this.onSearchChange(e)}
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
                // onClick={this.onSearchClick}
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
            {/* {!this.state.searchItem ? (
                <Pagination
                //   onChange={this.onChange}
                //   current={this.state.current}
                //   total={this.state.total}
                //   pageSize={3}
                />
              ) : null} */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
