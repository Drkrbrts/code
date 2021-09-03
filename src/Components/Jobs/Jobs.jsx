import React, { Component } from "react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";

export default class Jobs extends Component {
  state = {
    jobs: [],
    paginationControls: {
      totalCount: null,
      totalPages: null,
      pageSize: 4,
      pageIndex: 0,
      currentPage: 1,
    },
  };

  paginationChange = (page) => {
    this.setState((prevState) => {
      const paginationControls = { ...prevState.paginationControls };
      paginationControls.currentPage = page;
      paginationControls.pageIndex = page - 1;
      return { paginationControls };
    });
  };

  render() {
    const { jobs, paginationControls } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-2">
            <div className="col">
              <button
                onClick={this.addFriendClicked}
                className=" m-3 btn btn-dark"
              >
                + Job
              </button>
            </div>
            <div className="col-md-3 me-1">
              <input
                onChange={this.updateSearch}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-md-1">
              <button
                onClick={this.onSearchButtonClicked}
                className="btn btn-light"
              >
                Search
              </button>
            </div>
          </div>
          <div className="container-fluid mt-5 shadow">
            <div className="card-group">
              <div className="row">
                {/* {filteredFriends.length > 0
                  ? filteredFriends.map(this.mapFriend)
                  : friends.map(this.mapFriend)} */}

                {/* {this.state.mappedFriends} */}
              </div>
              <div className="m-3">
                <Pagination
                  onChange={this.paginationChange}
                  current={paginationControls.currentPage}
                  total={paginationControls.totalCount} //update from axios first
                  pageSize={paginationControls.pageSize}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
