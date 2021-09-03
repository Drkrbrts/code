import React from "react";
import UserNav from "../UserNav";
import * as jobsService from "../../services/jobsServices";
import Job from "./Job"

class JobDisplay extends React.Component {
/* TO do:
- map through just like friends and render jobs to DOM.
- display each tech company in individual cards with requested info. 
- have fun while doing it! :)
*/

  state = {
      show: {
    pageIndex: 0,
    pageSize: 5,
  },
}

  componentDidMount = () => {
    console.log("component did mount");

    jobsService
      .showJobs(this.state.show.pageIndex, this.state.show.pageSize)
      .then(this.onGetJobsSuccess)
      .catch(this.onGetJobsError);
  };
  onGetJobsSuccess = (response) => {
    console.log("get jobs success", response.data.item.pagedItems);
    var data = response.data.item.pagedItems
    this.setState((preState) => {
      return {
        mappedJobs: data.map(this.mapJob),
        // totalPage: this.state.pages.totalPages,
      };
    });
  };
  onGetJobsError = (response) => {
    console.warn({ error: response });
  };

  createJobBtn = () => {
    console.log("create");
    this.props.history.push("/jobs/create");
  };

  onJobClick = (job) => {
    console.log(job)
  }
  


  mapJob = (oneJob) => {
    return (
      <React.Fragment key={`Jobs- ${oneJob.id}`}>
        <Job
          job={oneJob}
          onClick={this.onJobClick}
          onDelete={this.onFriendDelete}
          onEdit={this.onFriendEdit}
        ></Job>
      </React.Fragment>
    );
  };


  render() {
    return (
      <React.Fragment>
        <UserNav />
        <div className="col-md-12 p-5">
          <h1>Jobs</h1>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.createJobBtn}
          >
            Add a Job
          </button>
          <hr />
          <div className="row">
            {/* {this.state.friends.map(this.mapFriend)} */}
            {this.state.mappedJobs}
          </div>
        </div>
        {/* <Pagination
          onChange={this.onChange}
          current={this.state.pages.current}
          total={this.state.pages.totalPages}
        /> */}
      </React.Fragment>
    );
  }
}

export default JobDisplay;
