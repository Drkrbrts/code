import React from "react";

function SingleJob(props) {
  var job = props.job;

  function onEditClick() {
    props.onEdit(job.id);
  }

  function onDeleteClick() {
    props.onDelete(job.id);
  }

  return (
    <div className="card col-md-3">
      <img
        src={job.techCompany.images[0].imageUrl}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.summary}</p>
        <button
          className="btn btn-primary mx-1"
          data-job-id={job.id}
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mx-1"
          data-job-id={job.id}
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleJob;
