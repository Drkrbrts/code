import React from "react";

function JobCard(props) {
  const oneJob = props.job;
  const imageUrl = props.imageUrl;

  const onDeleteClick = function onDeleteClick() {
    props.onDeleteClick(oneJob);
  };
  const onEditClick = function onEditClick() {
    props.onEditClick(oneJob);
  };
  const onViewMoreClick = function onViewMoreClick() {
    props.onViewMoreClick(oneJob);
  };

  return (
    <div className="col card-temp">
      <div className="card" style={{ width: "18rem" }}>
        <div className="text-center">
          <img
            src={imageUrl}
            className="card-img-top circular-landscape align-items-center"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-pay">{oneJob.pay}</h5>
          <p className="card-title">{oneJob.title}</p>
          <p className="card-text">{oneJob.summary}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={onDeleteClick}
            className="btn btn-danger deleteButton"
            data-friend-id={oneJob.id}
          >
            Delete
          </button>
          <button
            onClick={onEditClick}
            className="btn btn-primary editButton"
            data-friend-id={oneJob.id}
          >
            Edit
          </button>
          <button className="col btn-light" onClick={onViewMoreClick}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobCard);
