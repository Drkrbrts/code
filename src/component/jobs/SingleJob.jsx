import React, { useState } from "react";
import JobModal from "./JobModal";
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function SingleJob(props) {
  const { jobs, img } = props;
  // const jobImg = props.img;
  // const toggleModal = props.onToggleModal;
  // const open = props.isClose;

  const onJobEdit = () => {
    props.history.push("/jobs/jobid=" + jobs.id + "/edit", jobs);
  };

  const onJobDelete = () => {
    props.onJobDeleteClick(jobs);
  };

  const [isOpen, toOpen] = useState(false);

  function openModal() {
    toOpen(true);
  }

  function closeModal() {
    toOpen(false);
  }

  return (
    <React.Fragment>
      <div
        className="col-lg-4 col-md-6 col-sm-12 my-3"
        key={`Job # ${jobs.id}`}
      >
        <div className="card shadow text-center p-4 h-100">
          <img
            // style={{ height: "200px" }}
            src={img}
            className="round-card-img center"
            alt="..."
          />
          <h3 className="card-title">{jobs.pay}</h3>
          <p className="card-text text-bold">{jobs.slug}</p>
          <p className="card-text">{jobs.title}</p>
          <div>
            <button
              onClick={onJobEdit}
              data-job-id={jobs.id}
              className="mx-1 col-4 my-1 btn btn-info"
            >
              Edit
            </button>
            <button
              onClick={onJobDelete}
              data-job-id={jobs.id}
              className="mx-1 col-4 my-1 btn btn-danger"
            >
              Delete
            </button>
          </div>
          <div>
            <button
              onClick={openModal}
              data-job-id={jobs.id}
              className="mx-1 col-4 my-1 btn btn-outline-secondary"
            >
              View
            </button>
            <JobModal
              isOpen={isOpen}
              // key={`Job # ${jobs.id}`}
              img={img}
              title={jobs.title}
              content={jobs.description}
              toClose={closeModal}
              // onToggleModal={props.onToggleModal}
              // isOpen={isOpen}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(SingleJob);
