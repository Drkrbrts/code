import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FormModal = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>EVENT INFORMATION</ModalHeader>
        <ModalBody>
          <form className="overlay">
            <div className="mb-3">
              <label className="form-label">NAME</label>
              <input
                className="form-control"
                placeholder="Name of Event"
                name="name"
                onChange={props.changeFormData}
                defaultValue={props.event.name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">HEADLINE</label>
              <input
                className="form-control formHeadline"
                placeholder="Headlineo of event"
                name="headline"
                onChange={props.changeFormData}
                defaultValue={props.event.headline}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">DESCRIPTION</label>
              <input
                className="form-control formDescription"
                placeholder="Description of Event"
                name="description"
                onChange={props.changeFormData}
                defaultValue={props.event.description}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">PRIMARY IMAGE</label>
              <input
                className="form-control formSummary"
                placeholder="Image URL < 200 characters"
                name="summary"
                onChange={props.changeFormData}
                defaultValue={props.event.summary}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">SLUG</label>
              <input
                className="form-control formSlug"
                placeholder="Unique Identifier of Event"
                name="slug"
                onChange={props.changeFormData}
                defaultValue={props.event.slug}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">START DATE</label>
              <input
                className="form-control formStartDate"
                placeholder="All Numbers YEAR-MO-DY"
                name="dateStart"
                id="metaData"
                onChange={props.changeFormData}
                defaultValue={props.event.dateStart}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">END DATE</label>
              <input
                className="form-control formEndDate"
                placeholder="All Numbers YEAR-MO-DY"
                name="dateEnd"
                id="metaData"
                onChange={props.changeFormData}
                defaultValue={props.event.dateEnd}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">ADDRESS</label>
              <input
                className="form-control"
                placeholder="Address of Event"
                name="address"
                id="locData"
                onChange={props.changeFormData}
                defaultValue={props.event.address}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">ZIP CODE</label>
              <input
                className="form-control"
                placeholder="Zip of Event"
                name="zipCode"
                id="locData"
                onChange={props.changeFormData}
                defaultValue={props.event.zipCode}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="statusCheck"
                name="statusId"
                onChange={props.changeFormData}
              />
              <label className="form-check-label" htmlFor="statusCheck">
                {props.eventId > 0 ? "Keep Event Active?" : "Activate"}
              </label>
            </div>
          </form>

          <div></div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onSubmit}>
            {props.eventId > 0 ? "Update" : "Submit"}
          </Button>
          <Button color="secondary" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default FormModal;
