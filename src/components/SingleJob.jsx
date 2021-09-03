import React from "react";

function SingleJob(props) {
  const onJobClicked = () => {
    console.log("onJobClicked");
    props.onJobClickedFull();
  };
  const imageUrl = props.job.techCompany
    ? props.job.techCompany.images[0].imageUrl
    : "Image Unavailable";
  const coName = props.job.techCompany
    ? props.job.techCompany.name
    : "Company Name Unavailable";
  return (
    <div className="col-6">
      <div className="card mb-4 shadow" style={{ maxWidth: "540px" }}>
        <div
          className="class-header bg-light border-bottom p-2"
          style={{ fontSize: "20px" }}
        >
          {props.job.title}
        </div>
        <div className="row g-0">
          <div className="col-md-4 d-flex p-2">
            <div className="align-self-center">
              <img
                src={imageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{coName}</h5>
              <p className="card-text">{props.job.summary}</p>
              <p className="card-text">
                <small className="text-muted">Pay: {props.job.pay} p/hr</small>
              </p>
              <div className="d-flex flex-row mb-1">
                <div className="p-2 flex-fill">
                  <button
                    className="btn btn-warning"
                    type="button"
                    name="edit"
                    onClick={onJobClicked}
                  >
                    Edit
                  </button>
                </div>
                <div className="p-2 flex-fill">
                  <button
                    className="btn btn-danger"
                    type="button"
                    name="delete"
                    onClick={onJobClicked}
                  >
                    Delete
                  </button>
                </div>
                <div className="p-2 flex-fill">
                  <button
                    className="btn btn-info"
                    type="button"
                    name="view"
                    onClick={onJobClicked}
                  >
                    View
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
export default SingleJob;
