import React from "react";

function JobCard(props) {
  const job = props.job;

  let onEditClick = (e) => {
    e.preventDefault();
    props.onEditClick(job);
  };
  let onDeleteClick = (e) => {
    e.preventDefault();
    props.onDelete(job.id);
  };

  let onInfoClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card shadow-lg col-3">
      <div className="card-header">
        <img
          className="card-img-top img-responsive"
          src="https://picsum.photos/200"
          alt="photograph"
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-summary">{job.summary}</p>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-info col-5 ms-auto"
          onClick={onInfoClick}
        >
          Info
        </button>
        <button
          type="button"
          className="btn btn-warning col-5 ms-auto"
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger col-5 me-auto"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(JobCard);
