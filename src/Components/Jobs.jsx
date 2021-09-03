import React from "react";
import * as jobService from "../services/jobService";
import SingleJob from "./SingleJob";
import JobsNav from "./JobsNav";

class Jobs extends React.Component {
  state = {
    mappedJobs: [],
  };

  componentDidMount() {
    jobService.getJobs().then(this.onGetJobsSuccess).catch(this.onGetJobsError);
  }

  onGetJobsSuccess = (response) => {
    console.log(response.data.item.pagedItems);

    this.setState(() => {
      return {
        mappedJobs: response.data.item.pagedItems.map(this.mapJob),
      };
    });
  };

  mapJob = (job) => <SingleJob {...this.props} singleJob={job} key={job.id} />;

  onGetJobsError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <div>
        <JobsNav></JobsNav>
        <div className="container">
          <div className="row row-cols-3 row-cols-md-4 rows-cols-lg-3 g-4">
            {this.state.mappedJobs}
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
