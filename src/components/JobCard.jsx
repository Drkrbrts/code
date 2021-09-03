import React from "react";

function JobCard(props) {
  const oneJob = props.job;

  const onDeleteClick = function onDeleteClick() {
    props.onDeleteClick(oneJob);
  };
  const onEditClick = function onEditClick() {
    props.onEditClick(oneJob);
  };

  return (
    <div className="col card-temp">
      <div className="card" style={{ width: "18rem" }}>
        <div className="text-center">
          <img
            src={
              (oneJob.techCompany.images &&
                oneJob.techCompany.images[0].imageUrl) ||
              "No image found"
            }
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
            data-job-id={oneJob.id}
          >
            Delete
          </button>
          <button
            onClick={onEditClick}
            className="btn btn-primary editButton"
            data-job-id={oneJob.id}
          >
            Edit
          </button>
          <div>
            <button
              type="button"
              className="btn btn-info row"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              View more
            </button>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    More info
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{oneJob.description}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(JobCard);
