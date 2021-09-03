import React from "react";

function SingleJob(props) {
  const oneJob = props.job;

  function onDeleteJobClick(e) {
    props.onClick(oneJob.id);
    console.log(e.currentTarget.dataset);
  }

  function onEditJobClick(e) {
    // props.onClick(oneJob);
    props.history.push(`/jobsForm/${e.currentTarget.dataset.jobId}/edit`);
    console.log(e.currentTarget.dataset.jobId);
  }

  function onViewMoreClick(e) {
    props.onClick(oneJob);
    console.log(e.currentTarget.dataset);
  }

  return (
    <div className="card shadow text-center p-4 h-100">
      <img
        className="round-card-img center"
        src={oneJob.techCompany.images[0].imageUrl}
        alt="..."
      />
      <h3 className="mx-1 card-title">{oneJob.pay}</h3>
      <h3 className="card-title">{oneJob.title}</h3>
      <p className="card-text">{oneJob.summary}</p>
      <div>
        <button
          className="mx-1 col-4 my-1 btn btn-danger"
          data-j-id={oneJob.id}
          onClick={onDeleteJobClick}
        >
          Delete
        </button>
        <button
          className="mx-1 col-4 my-1 btn btn-secondary"
          data-job-id={oneJob.id}
          onClick={onEditJobClick}
        >
          Edit
        </button>
        <div className="align-item-center">
          <button
            className="mx-1 col-sm-6 col-xl-4 my-1 btn btn-primary"
            data-jb-id={oneJob.id}
            onClick={onViewMoreClick}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleJob);
