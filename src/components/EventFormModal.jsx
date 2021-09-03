import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Form, Field } from "formik";

const ModalEventForm = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isFormOpen} toggle={props.toggleFormModal}>
        <ModalHeader>
          <div className="row">
            <div className="col">
              <h3>Event</h3>
            </div>
            <div className="col">
              <Button
                type="button"
                className="float-end"
                onClick={props.toggleFormModal}
              >
                X
              </Button>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <Formik
            enableReinitialize={true}
            initialValues={props.formData}
            onSubmit={props.handleFormData}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <Field type="text" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="headline" className="col-form-label">
                  Headline
                </label>
                <Field type="text" name="headline" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="col-form-label">
                  Description
                </label>
                <Field
                  type="text"
                  name="description"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="summary" className="form-label">
                  Summary
                </label>
                <Field type="text" name="summary" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="slug" className="col-form-label">
                  Slug
                </label>
                <Field type="text" name="slug" className="form-control" />
              </div>
              <div className="row mt-2">
                <div className="col-5">
                  <div className="form-group">
                    <label htmlFor="metaData.dateStart" className="form-label">
                      Date Start
                    </label>
                    <Field
                      type="date"
                      name="metaData.dateStart"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="form-group">
                    <label htmlFor="metaData.dateEnd" className="form-label">
                      Date End
                    </label>
                    <Field
                      type="datetime-local"
                      name="metaData.dateEnd"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-2 mt-5">
                  <div className="form-group">
                    <Field type="checkbox" name="statusId" value="Active" />
                    <label className="mx-2">Active</label>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <div className="form-group">
                    <label
                      htmlFor="metaData.location.address"
                      className="form-label"
                    >
                      Address
                    </label>
                    <Field
                      type="text"
                      name="metaData.location.address"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label
                      htmlFor="metaData.location.zipcode"
                      className="form-label"
                    >
                      Zip
                    </label>
                    <Field
                      type="text"
                      name="metaData.location.zipcode"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <div className="form-group">
                    <label
                      htmlFor="metaData.location.latitude"
                      className="form-label"
                    >
                      Latitude
                    </label>
                    <Field
                      type="number"
                      name="metaData.location.latitude"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label
                      htmlFor="metaData.location.longitude"
                      className="form-label"
                    >
                      Longitude
                    </label>
                    <Field
                      type="number"
                      name="metaData.location.longitude"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <hr />

              <Button
                type="button"
                className="btn-secondary float-end mx-2"
                onClick={props.toggleFormModal}
              >
                Close
              </Button>
              <button className="btn btn-primary float-end" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ModalEventForm;
