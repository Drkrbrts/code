import React from "react";
import { useState } from "react";
import jobsService from "./services/jobs";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

function SingleJob(props) {
  const job = props.job;
  const id = job.id;
  function print(item) {
    return item.name + " ";
  }
  const payload = {
    title: job.title,
    pay: job.pay,
    description: job.description,
    summary: job.summary,
    slug: job.slug,
    techCompanyId: job.techCompany.id,
    skills: job.skills.map(print),
  };

  const onEditBtnClick = function () {
    props.onClick(id, payload);
  };

  const onDeleteBtnClick = function () {
    jobsService.delete(id).then(deleteSuccess).catch(deleteError);
  };

  const deleteSuccess = () => {
    toast.success("The job has been defeated");
  };

  const deleteError = (response) => {
    console.error(response);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card col-md-3">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5ZwXBB_A9RvEC_CZ_x0OqAHaHa%26pid%3DApi&f=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{job.pay}</h5>
        <p className="card-text">{job.title}</p>

        <button className="btn btn-secondary" onClick={handleShow}>
          View More
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{job.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{job.summary}</Modal.Body>
          <Modal.Body>{job.description}</Modal.Body>
          <Modal.Body>{job.techCompany.name}</Modal.Body>
          <Modal.Body>{job.skills.map(print)}</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <footer>
          <button
            date-friend-id={job.id}
            className="btn btn-primary"
            onClick={onEditBtnClick}
          >
            Edit
          </button>
          <button
            date-friend-id={job.id}
            className="btn btn-danger"
            onClick={onDeleteBtnClick}
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  );
}

export default React.memo(SingleJob);
