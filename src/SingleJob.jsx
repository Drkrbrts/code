import React from "react";

const SingleJob = (props) => {
  const aJob = props.job;
  console.log(aJob);

  const onEditJobClick = (e) => {
    props.onHandleEdit(aJob);
  };

  const onDeleteJobClick = (e) => {
    props.onHandleDelete(aJob);
  };

  const onViewJobClick = (e) => {
    props.onHandleView(aJob);
  };

  return (
    <div
      className="card col-md-2 m-4"
      key={aJob.id}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <img
        src={aJob.techCompany.images[0].imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h2 className="card-title">{aJob.techCompany.name}</h2>
        <h5 className="card-subtitle">{aJob.title}</h5>
        <h6 className="card-body mb-2 text-muted">{aJob.pay}</h6>
        <p className="card-text">{aJob.description}</p>
        <button className="btn btn-primary m-2" onClick={onEditJobClick}>
          Edit
        </button>
        <button
          className="btn btn-secondary"
          key={aJob.id}
          onClick={onDeleteJobClick}
        >
          Delete
        </button>
        <div>
          <button className="btn btn-info text-center" onClick={onViewJobClick}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleJob);
