import React, { useState } from "react";
import { Row, Modal } from "reactstrap";

function JobsSingle(props) {
  const [modal, setModal] = useState(false);
  const onJobClicked = (e) => {
    // console.log("onJobClicked");
    e.preventDefault();
    let target = e.target;
    let clickAction = target.attributes.name.value;
    props.actionRequested(props.job, clickAction);
  };

  const toggle = () => setModal(!modal);

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
                    onClick={toggle}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        zIndex={5000}
        centered
        size="xl"
        isOpen={modal}
        toggle={toggle}
        contentClassName="border-0 p-4 p-lg-5"
      >
        <Row>
          <div className="card mb-5 shadow" style={{ maxWidth: "1200px" }}>
            <div className="class-header d-flex justify-content-between bg-light border-bottom p-2">
              <div className="d-flex-inline" style={{ fontSize: "20px" }}>
                {props.job.title}
              </div>
              <div></div>
              <div className="d-flex-inline">
                <button
                  className="btn btn-danger"
                  type="button"
                  name="close"
                  onClick={toggle}
                >
                  X
                </button>
              </div>
            </div>

            <div className="row g-0">
              <div className="col-md-4 d-flex p-2">
                <div className="align-self-start">
                  <img
                    src={imageUrl}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "30px" }}>
                    {coName}
                  </h5>
                  <p className="card-text">{props.job.summary}</p>
                  <p className="card-text">
                    Company Website:{" "}
                    <a href={`http://www.${props.job.techCompany.slug}`}>
                      {props.job.techCompany.slug}
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Pay: {props.job.pay} p/hr
                    </small>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    <u>Job Description</u>
                  </p>
                  <p>{props.job.description}</p>
                  <p style={{ fontSize: "20px" }}>
                    <u>Company Profile</u>
                  </p>
                  <p className="mb-5">{props.job.techCompany.profile}</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Modal>
    </div>
  );
}
export default JobsSingle;
