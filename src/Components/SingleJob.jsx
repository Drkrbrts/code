import React from "react";
import * as jobService from "../services/jobService";

const SingleJob = (props) => {
  const onEditHandle = () => {
    console.log("edit clicked");
    let jobData = props.singleJob;
    console.log("edit friends is firing", jobData);
    props.history.push(`/addjobs/${props.singleJob.id}/edit`, {
      type: "EDIT_JOB",
      payload: jobData,
    });
  };

  const onDeleteHandle = () => {
    let id = props.singleJob.id;
    console.log(id);
    jobService.deleteJob(id).then(onDeleteJobSuccess).catch(onDeleteJobError);
  };

  const onDeleteJobSuccess = (response) => {
    console.log("job deleted", response);
    this.props.history.push("/jobs");
  };

  const onDeleteJobError = (err) => {
    console.log(err);
  };
  return (
    <>
      <div className="card">
        <img
          src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/75/original/sabio-logo-facebook-profile-picture-1-.jpg"
          className="card-img-top"
          alt="jobs"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.singleJob.pay}</h5>
          <p className="card-text">{props.singleJob.title}</p>
          <p className="card-text">{props.singleJob.slug}</p>
          <button type="button" className="btn btn-info" onClick={onEditHandle}>
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDeleteHandle}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-primary"
            // onClick={onDeleteHandle}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
