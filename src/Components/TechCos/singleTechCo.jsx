import React from "react";

function SingleTechCo(props) {
  const oneTechCo = props.techCo;

  function onDeleteJobClick(e) {
    props.onClick(oneTechCo.id);
    // console.log(e.currentTarget.dataset);
  }

  function onEditJobClick(e) {
    // props.onClick(oneTechCo);
    props.history.push(`/techCoForm/${e.currentTarget.dataset.jobId}/edit`);
    // console.log(e.currentTarget.dataset.jobId);
  }

  function onViewMoreClick(e) {
    props.onClick(oneTechCo);
    // console.log(e.currentTarget.dataset);
  }

  return (
    <div className="card shadow text-center p-4 h-100">
      <img
        className="round-card-img center"
        src={oneTechCo.images[0].imageUrl}
        alt={oneTechCo.images[0].imageTypeId}
      />
      <h3 className="card-title">{oneTechCo.name}</h3>
      <p className="card-text">{oneTechCo.summary}</p>
      <div>
        <button
          className="mx-1 col-4 my-1 btn btn-danger"
          data-j-id={oneTechCo.id}
          onClick={onDeleteJobClick}
        >
          Delete
        </button>
        <button
          className="mx-1 col-4 my-1 btn btn-secondary"
          data-job-id={oneTechCo.id}
          onClick={onEditJobClick}
        >
          Edit
        </button>
        <div className="align-item-center">
          <button
            className="mx-1 col-sm-6 col-xl-4 my-1 btn btn-primary"
            data-jb-id={oneTechCo.id}
            onClick={onViewMoreClick}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleTechCo);
