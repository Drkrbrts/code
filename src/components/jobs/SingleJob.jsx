import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function SingleJob(props) {
  var job = props.job;
  console.log("this is the object in SingleJob: ", job);

  function onEditClick() {
    props.onEdit(job.id);
  }

  function onDeleteClick() {
    props.onDelete(job.id);
  }

  function getSkills() {
    var skills = job.skills.map((x) => x.name);
    skills = skills.join(" ");
    return skills;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card col-md-3">
      <img
        src={job.techCompany.images ? job.techCompany.images[0].imageUrl : ""}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.summary}</p>
        <button
          className="btn btn-primary mx-1"
          data-job-id={job.id}
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          className="btn btn-dark"
          data-job-id={job.id}
          onClick={handleShow}
        >
          View More
        </button>
        <button
          className="btn btn-danger mx-1"
          data-job-id={job.id}
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{job.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Company: {job.techCompany.name}</Modal.Body>
        <Modal.Body>Description: {job.description}</Modal.Body>
        <Modal.Body>Summary: {job.summary}</Modal.Body>
        <Modal.Body>Pay: {job.pay}</Modal.Body>
        <Modal.Body>Skills: {getSkills()}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SingleJob;
