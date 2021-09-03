import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const JobView = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>Job Data</ModalHeader>
        <ModalBody>
          <div className="container">
            <form className="overlay">
              <div className="mb-3">
                <h5>
                  <strong>TECH COMPANY NAME</strong>
                </h5>
                <p>{props.job.techCompanyName}</p>
              </div>
              <div className="mb-3">
                <h5>
                  <strong>TECH COMPANY ID</strong>
                </h5>
                <p>{props.job.techCompanyId}</p>
              </div>
              <div className="mb-3">
                <h5>
                  <strong>JOB TITLE</strong>
                </h5>
                <p>{props.job.title}</p>
              </div>
              <div className="mb-3">
                <h5>
                  <strong>DESCRIPTION</strong>
                </h5>
                <p>{props.job.description}</p>
              </div>
              <div className="mb-3">
                <h5>
                  <strong>SKILLS</strong>
                </h5>
                <p>{props.job.skills}</p>
              </div>
              <div className="mb-3">
                <h5>
                  <strong>SUMMARY</strong>
                </h5>
                <p>{props.job.summary}</p>
              </div>
              <div className="mb-3">
                <h5>
                  <strong>PAY</strong>
                </h5>
                <p>{props.job.pay}</p>
              </div>
            </form>
          </div>
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

export default JobView;
