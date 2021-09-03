import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  headline: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  summary: Yup.string().required("Required"),
  slug: Yup.string().required("Required"),
  statusId: Yup.string().required("Required"),
  metaData: Yup.object().shape({
    dateStart: Yup.string().required("Required"),
    dateEnd: Yup.string().required("Required"),
    location: Yup.object().shape({
      latitude: Yup.string().required("Required"),
      longitude: Yup.string().required("Required"),
      zipCode: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
  }),
});

const EventFormModal = (props) => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <div className="container">
            <Formik
              enableReinitialize={true}
              initialValues={props.formData}
              onSubmit={props.handleFormData}
              validationSchema={formSchema}
            >
              {({ values }) => (
                <Form>
                  <div className="col-12">
                    <label htmlFor="name" className="form-group">
                      Name
                    </label>
                    <Field type="text" className="form-control" name="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="has-error"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="headline" className="form-group">
                      Headline
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="headline"
                    />
                    <ErrorMessage
                      name="headline"
                      component="div"
                      className="has-error"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="description" className="form-group">
                      Description
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="description"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="has-error"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="summary" className="form-group">
                      Summary
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="summary"
                    />
                    <ErrorMessage
                      name="summary"
                      component="div"
                      className="has-error"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="slug" className="form-group">
                        Slug
                      </label>
                      <Field type="text" className="form-control" name="slug" />
                      <ErrorMessage
                        name="slug"
                        component="div"
                        className="has-error"
                      />
                    </div>

                    <div className="col-6 form-group">
                      <label htmlFor="statusId" className="form-group">
                        StatusId
                      </label>
                      <Field
                        component="select"
                        name="statusId"
                        className="form-control"
                      >
                        <option value="">NotSet</option>
                        <option value="Active">Active</option>
                        <option value="Deleted">Deleted</option>
                        <option value="Flagged">Flagged</option>
                      </Field>
                      <ErrorMessage
                        name="statusId"
                        component="div"
                        className="has-error"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="dateStart" className="form-group">
                        Start
                      </label>
                      <Field
                        type="datetime-local"
                        className="form-control"
                        name="metaData.dateStart"
                      />
                      <ErrorMessage
                        name="metaData.dateStart"
                        component="div"
                        className="has-error"
                      />
                    </div>

                    <div className="col-6">
                      <label htmlFor="dateEnd" className="form-group">
                        Start
                      </label>
                      <Field
                        type="datetime-local"
                        className="form-control"
                        name="metaData.dateEnd"
                      />
                      <ErrorMessage
                        name="metaData.dateEnd"
                        component="div"
                        className="has-error"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="latitude" className="form-group">
                        Latitude
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="metaData.location.latitude"
                      />
                      <ErrorMessage
                        name="metaData.location.latitude"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="longitude" className="form-group">
                        Longitude
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="metaData.location.longitude"
                      />
                      <ErrorMessage
                        name="metaData.location.longitude"
                        component="div"
                        className="has-error"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-group">
                      Address
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="metaData.location.address"
                    />
                    <ErrorMessage
                      name="metaData.location.address"
                      component="div"
                      className="has-error"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="zipCode" className="form-group">
                      Zipcode
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="metaData.location.zipCode"
                    />
                    <ErrorMessage
                      name="metaData.location.zipCode"
                      component="div"
                      className="has-error"
                    />
                  </div>
                  <div className="row justify-content-end mt-3">
                    <Button
                      className="col-4"
                      color="secondary"
                      onClick={props.toggleModal}
                    >
                      Close
                    </Button>
                    <button
                      color="primary"
                      className="btn btn-primary col-4 mx-2 "
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </ModalBody>
        <ModalFooter />
      </Modal>
    </React.Fragment>
  );
};

export default EventFormModal;
