import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TechEditModal = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>
          UPDATE COMPANY INFORMATION
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <form className="overlay">
              <div className="mb-3">
                <label className="form-label">Tech Company Name</label>
                <input
                  className="form-control"
                  placeholder="Company Name"
                  name="name"
                  onChange={props.changeFormData}
                  defaultValue={props.company.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Profile</label>
                <input
                  className="form-control"
                  placeholder="Profile"
                  name="profile"
                  onChange={props.changeFormData}
                  defaultValue={props.company.profile}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Summary</label>
                <input
                  className="form-control"
                  placeholder="Summary of Company"
                  name="summary"
                  onChange={props.changeFormData}
                  defaultValue={props.company.summary}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company headline</label>
                <input
                  className="form-control"
                  placeholder="Headline of Company"
                  name="headline"
                  onChange={props.changeFormData}
                  defaultValue={props.company.headline}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Information</label>
                <input
                  className="form-control"
                  placeholder="email address or phone number"
                  name="contactInformation"
                  onChange={props.changeFormData}
                  defaultValue={props.company.contactInformation}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Slug</label>
                <input
                  className="form-control"
                  placeholder="Unique Identifier of Company"
                  name="slug"
                  onChange={props.changeFormData}
                  defaultValue={props.company.slug}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Logo</label>
                <input
                  className="form-control image-fluid"
                  placeholder="Image URL"
                  name="images"
                  onChange={props.changeFormData}
                  defaultValue={props.company.images}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  name="statusId"
                  onChange={props.changeFormData}
                />
                <label
                  className="form-check-label"
                  htmlFor="statusId"
                  style={{ marginLeft: "7px" }}
                >
                  Click to Hibernate Company
                </label>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onUpdate}>
            Update Company
          </Button>
          <Button color="secondary" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default TechEditModal;
