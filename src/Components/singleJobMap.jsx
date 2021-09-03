import React from "react";

const SingleJob = (props) => {
  const job = props.job;

  const onEditClicked = function () {
    props.onHandleEdit(job.id);
  };

  const viewMoreInfo = function () {
    props.onHandleViewMore();
  };

  return (
    <div className="col-lg-3 col-md-4 newJob">
      <div className="card p-2 shadow">
        <div className="text-center mt-2 p-3">
          <img
            className="companyLogo"
            src={job.img}
            alt="companyImg"
            width="60"
          />
          <span className="d-block font-weight-bold payInfo">{job.pay}</span>
          <hr />
          <span className="jobTitle">{job.title}</span>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <small className="ml-1 jobLocation">{job.location}</small>
          </div>
          <div className="justify-content-between mt-1">
            <button
              type="button"
              className="btn btn-sm btn-info me-1"
              id="moreInfo"
              onClick={viewMoreInfo}
            >
              View Job
            </button>
            <button
              className="btn btn-sm btn-warning editJob"
              onClick={onEditClicked}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
