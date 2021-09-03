import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const JobModal = (props) => {
  const job = props.job;
  console.log(job);
  //const skills = job.skills.map((s) => s.name).join(", ");
  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{job.title}</ModalHeader>
        <ModalBody>
          <img
            src={job.techCompany && job.techCompany.images[0].imageUrl}
            alt="..."
          />
          <p>
            <strong>Company: </strong>
            {job.techCompany && job.techCompany.name}
          </p>
          <p>
            <strong>Pay: </strong>
            {job.pay}
          </p>
          <p>
            <strong>Webpage: </strong>
            {job.slug}
          </p>
          <p>
            <strong>Summary: </strong>
            {job.summary}
          </p>
          <p>
            <strong>Description: </strong>
            {job.description}
          </p>
          <p>
            <strong>Skills: </strong>
            {job.skills}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default JobModal;
