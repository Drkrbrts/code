import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>HELLO</ModalHeader>
        <ModalBody>HELLOOO</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ModalExample;
