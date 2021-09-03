import React from "react";

function singleJob(props) {
  const oneJob = props.job;

  const onDeleteClick = function () {
    props.onClick(oneJob.id);
  };
  const onUpdateClick = function () {
    props.history.push(`/jobform/${oneJob.id}`);
  };
  const onModalClick = function () {
    props.onClick(oneJob);
  };

  return (
    <div className="card col-3 m-2 align-items-center">
      <img
        src={oneJob.techCompany.images[0].imageUrl}
        className="card-img-top m-1"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneJob.title}</h5>
        <strong>{oneJob.techCompany.name}</strong>
        <p className="card-text">{oneJob.summary}</p>
        <button
          className="btn btn-danger m-1"
          onClick={onDeleteClick}
          data-friend-id={oneJob.id}
        >
          Delete
        </button>
        <button
          className="btn btn-info m-1"
          onClick={onUpdateClick}
          data-friend-id={oneJob.id}
        >
          Update
        </button>
        <button
          className="btn btn-secondary m-1"
          data={oneJob}
          onClick={onModalClick}
        >
          Info
        </button>
      </div>
    </div>
  );
}

export default React.memo(singleJob);
