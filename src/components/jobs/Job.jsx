import React from "react";

function SingleJob(props) {
  const oneJob = props.job;

  const onJobClickFull = function () {
    props.onClick(oneJob);
  };
  const onJobEditFull = function () {
    props.onEdit(oneJob);
  };
  const onJobDeleteFull = function () {
    props.onDelete(oneJob);
  };

  return (
    <div className="card col-md-3">
      <img
        src={oneJob.images[0].imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneJob.name}</h5>
        <p className="card-text">
          <strong>{oneJob.summary}</strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={onJobClickFull}
          data-friend-id={oneJob.id}
        >
          Info
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={onJobEditFull}
          data-friend-id={oneJob.id}
        >
          Edit
        </button>
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={onJobDeleteFull}
          data-friend-id={oneJob.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleJob);
