import React from "react";
// import { toast } from "react-toastify";
import * as jobsService from "./jobsService";

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        id: 0,
        title: "",
        description: "",
        summary: "",
        pay: 0,
        statusId: "Active",
        slug: "",
        entityTypeId: 0,
        techCompany: {},
        skills: [],
      },
      structure: [],
    };
  }
  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    jobsService
      .getJobs()
      .then(this.onGetJobsSuccess)
      .catch(this.onGetJobsError);
  };

  onGetJobsSuccess = (response) => {
    console.log(response);
    var updater = (prevState) => {
      var newJobs = { ...prevState.jobs };
      newJobs = {
        info: response.data.item.pagedItems,
        structure: response.data.item.pagedItems.map(this.mapJobsCards),
      };
      return { companies: newJobs };
    };
    this.setState(updater);
  };

  mapJobsCards = (input) => {
    //in here needs to go a component from a seperate page that is a single job card
  };

  onGetJobsError = (errResponse) => {
    console.log(errResponse);
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">HOla world</div>
          </div>
        </div>
      </main>
    );
  }
}

export default Jobs;
