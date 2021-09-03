import React from "react";

const JobCard = (props) => {
  const handleEdit = () => {
    props.onEdit(props.jobData);
  };
  const handleViewMore = () => {
    props.onVMClick(props.jobData);
  };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", display: "inline-block" }}
        alt="..."
        id={props.jobData.id}
      >
        <img
          className="card-img-top img-fluid"
          alt="Tech Company"
          src={props.jobData.techCompany.images[0].imageUrl}
        />
        <div className="card-body">
          <h3 className="card-title">{props.jobData.title}</h3>
          <p>
            <strong>{props.jobData.pay}</strong>
          </p>
          <p className="card-text">{props.jobData.summary}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobCard;
