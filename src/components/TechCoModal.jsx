import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalforTechCos = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader>
          <h3>{props.title}</h3>
        </ModalHeader>
        <ModalBody>
          <p>id: {props.content.id}</p>
          <p>contact information{props.content.contactInformation}</p>
          <p>friends: {props.content.friends}</p>
          <p>headline: {props.content.headline}</p>
          <p>images: {props.content.images}</p>
          <p>profile: {props.content.profile}</p>
          <p>slug: {props.content.slug}</p>
          <p>Status: {props.content.statusId}</p>
          <p>tags: {props.content.tags}</p>
          <p>urls: {props.content.urls}</p>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ModalforTechCos;
