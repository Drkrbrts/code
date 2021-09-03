import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const JobModal = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toClose}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <div className="card shadow text-center p-4 h-100">
            {/* <img
              src={props.img}
              className="round-card-img center"
              alt="..."
            /> */}
            <h3 className="card-title">{props.content}</h3>
            <p className="card-text text-bold">{props.slug}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default JobModal;
