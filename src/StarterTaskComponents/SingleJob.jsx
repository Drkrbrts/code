import React from "react";

function SingleJob(props) {
  const job = props.job;

  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", margin: " 0 0 0 10px", padding: "10px" }}
      >
        <img
          src={job.techCompany.images.imageUrl}
          className="card-img-top"
          alt="job"
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="pay">${job.pay}</h5>
          <p className="position">{job.title}</p>
          <p className="contact">{job.techCompany.contactInformation.data}</p>
          <div>
            <button
              //   onClick={onDeleteClicked}
              className="btn btn-danger mx-2"
              style={{ borderRadius: "10px" }}
            >
              Delete
            </button>
            <button
              //   onClick={onEditClicked}
              className="btn btn-primary"
              style={{ borderRadius: "10px" }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleJob;
