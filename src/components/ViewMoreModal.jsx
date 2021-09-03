import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ViewMoreModal = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>
          Title: {props.title}
        </ModalHeader>
        <ModalBody>Description: {props.description}</ModalBody>
        <ModalBody>Summary: {props.summary}</ModalBody>
        <ModalBody>Pay: {props.pay}</ModalBody>
        <ModalBody>Slug: {props.slug}</ModalBody>
        <ModalBody>Id Status: {props.statusId}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ViewMoreModal;
