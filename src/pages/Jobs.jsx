import React from "react";
import { withRouter } from "react-router-dom";
import jobsService from "../services/jobs";
import SingleJob from "../SingleJob";

class Jobs extends React.Component {
  state = {
    jobs: [],
    search: "",
  };

  componentDidMount() {
    jobsService.showAll().then(this.showSuccess).catch(this.showErrorr);
  }

  showSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    this.setState({ jobs: response.data.item.pagedItems });
  };

  showErrorr = (response) => {
    console.error(response);
  };

  addBtnClicked = () => {
    this.props.history.push("/jobs/new");
  };

  mapJobs = (job) => {
    return (
      <React.Fragment key={`Jobs-${job.id}`}>
        <SingleJob job={job} onClick={this.onEditBtnClick} />
      </React.Fragment>
    );
  };

  onEditBtnClick = (jobId, jobData) => {
    console.log(jobId, jobData);
    this.props.history.push("/jobs/" + jobId + "/edit", {
      type: "ADD_TO_JOBFORM",
      payload: jobData,
    });
  };

  onFormFieldChange = (e) => {
    let keyword = e.currentTarget;
    let kwValue = keyword.value;

    this.setState(() => {
      let search = { ...this.state.search };
      search = kwValue;

      return { search };
    });
  };

  onSearchBtnClick = () => {
    let searchTerm = this.state.search;

    this.props.history.push("/jobs/search/" + searchTerm);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            Jobs{" "}
            <button className="btn btn-success" onClick={this.addBtnClicked}>
              Add
            </button>
            {"     "}
            <input
              type="text"
              className="text-end mr-sm-2"
              id="search"
              name="search"
              onChange={this.onFormFieldChange}
              value={this.state.search}
            />
            <button className="btn btn-primary" onClick={this.onSearchBtnClick}>
              Search
            </button>
          </h1>
        </div>
        <div className="row">{this.state.jobs.map(this.mapJobs)}</div>
      </React.Fragment>
    );
  }
}

export default withRouter(Jobs);
