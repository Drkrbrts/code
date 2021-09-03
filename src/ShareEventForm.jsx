import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ShareEventForm = (props) => {
  console.log(props);
  const emailData = props.emailData;

  const onHandleSendMsg = (e) => {
    props.onSendMessage(e);
  };

  const shareChange = (e) => {
    props.onShareChange(e);
  };

  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <div className="form-group m-5">
            <label htmlFor="to">To:</label>
            <input
              type="text"
              className="form-control"
              name="to"
              value={emailData.to}
              placeholder="Send to..."
              onChange={shareChange}
            />
            <label htmlFor="bcc">Bcc:</label>
            <input
              type="text"
              className="form-control"
              name="bcc"
              placeholder="Bcc"
              value={emailData.bcc}
              onChange={shareChange}
            />
            <label htmlFor="name">Subject:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={emailData.name}
              onChange={shareChange}
              placeholder=""
            />
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Text:</label>
              <textarea
                className="form-control"
                rows="10"
                name="body"
                value={emailData.body}
                placeholder=""
                onChange={shareChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary form-control my-5"
              onClick={onHandleSendMsg}
            >
              Submit
            </button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ShareEventForm;
