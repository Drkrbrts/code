import React from "react";
import { Modal } from "reactstrap";

function TechCoModal(props) {
  const contactInformation = props.contactInformation;

  // const hideModal = function hideModal() {
  //   props.hideModal();
  // };
  const toggleModal = () => {
    props.toggleModal(contactInformation);
    // let currentProps = { ...props.isOpen };
    // currentProps = !props.isOpen;
  };
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={toggleModal}>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal}
              ></button>
            </div>
            <div className="modal-body">{contactInformation}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}
export default TechCoModal;
