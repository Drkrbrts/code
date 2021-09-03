import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalforJobs = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <p>id: {props.content.id}</p>
          <p>pay: {props.content.pay}</p>
          <p>skills: {props.content.skills}</p>
          <p>slug: {props.content.slug}</p>
          <p>status Id: {props.content.statusId}</p>
          <p>summary: {props.content.summary}</p>
          <p>Tech Co: {props.content.techCompany}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ModalforJobs;
