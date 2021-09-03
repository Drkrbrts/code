import React, { Component } from "react";
import { toast } from "react-toastify";
import techCoServices from "../services/techCoServices";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const techCoSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required("Required"),
  profile: Yup.string().required("Required"),
  summary: Yup.string().min(10).max(300).required("Required"),
  headline: Yup.string().min(5).max(100).required("Required"),
  contactInformation: Yup.string().required("Required"),
  slug: Yup.string().required("Required"),
  statusId: Yup.string().required("Required"),
  images: Yup.array().of(
    Yup.object().shape({
      imageTypeId: Yup.string().required("Required"),
      imageUrl: Yup.string().required("Required"),
    })
  ),
  tags: Yup.array().of(Yup.string().min(2).required()).required("Required"),
  friendIds: Yup.array()
    .of(Yup.string().min(3).max(12).required())
    .required("Required"),
});

class TechCoForm extends Component {
  state = {
    statusIds: [
      { value: 1, label: "Active" },
      { value: 2, label: "Deleted" },
      { value: 3, label: "Flagged" },
    ],
    updateTechCo: false,
    techCoForm: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      images: [{ imageTypeId: "", imageUrl: "" }],
      urls: [""],
      tags: [""],
      friendIds: [""],
    },
  };

  componentDidMount() {}

  handleTechCoFromSubmit = (values) => {
    console.log(values);
    techCoServices
      .addTechCo(values)
      .then(this.onAddTechCoSuccess)
      .catch(this.onAddTechCoError);
  };

  onAddTechCoSuccess = (response) => {
    console.log(response);
    toast.success("Success: New Company Added!");
  };

  onAddTechCoError = (errResponse) => {
    console.log(errResponse);
    toast.error(`Error: ${errResponse.response.data.errors}!`);
  };

  mapStatus = (status) => {
    return (
      <option key={`status_${status.value}`} value={status.value}>
        {status.label}
      </option>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5 border p-4 shadow">
              <h2>Add or Update Tech Companies</h2>
              <NavLink to="/techCos">View All TechCompanies</NavLink>
              <hr className="my-4" />
              <Formik
                enableReinitialize={true}
                initialValues={this.state.techCoForm}
                onSubmit={this.handleTechCoFromSubmit}
                validationSchema={techCoSchema}
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
                      <label htmlFor="profile" className="form-group">
                        Profile
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="profile"
                      />
                      <ErrorMessage
                        name="profile"
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
                      <label
                        htmlFor="contactInformation"
                        className="form-group"
                      >
                        Contact Information
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="contactInformation"
                      />
                      <ErrorMessage
                        name="contactInformation"
                        component="div"
                        className="has-error"
                      />
                    </div>

                    <div className="col-12">
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

                    <div className="col-12 form-group">
                      <label htmlFor="statusId" className="form-group">
                        StatusId
                      </label>
                      <Field
                        component="select"
                        name="statusId"
                        className="form-control"
                      >
                        <option value="">NotSet</option>
                        {this.state.statusIds.map(this.mapStatus)}
                      </Field>
                      <ErrorMessage
                        name="statusId"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <hr className="my-4" />
                    <div className="col-12 form-group">
                      <label htmlFor="images" className="form-group">
                        Images
                      </label>

                      <FieldArray name="images">
                        {({ push, remove }) => (
                          <div>
                            <button
                              className="btn btn-outline-info my-1"
                              type="button"
                              onClick={() =>
                                push({ imageTypeId: "", imageUrl: "" })
                              }
                            >
                              Add
                            </button>
                            {values.images &&
                              values.images.map((image, index) => (
                                <div
                                  key={`img-${index}-select`}
                                  className="row"
                                >
                                  <div className=" col-4 my-1">
                                    <Field
                                      component="select"
                                      name={`images.${index}.imageTypeId`}
                                      className="form-control"
                                    >
                                      <option value="">Image Type...</option>
                                      <option value="1">SEO</option>
                                      <option value="2">Cover</option>
                                      <option value="3">Main</option>
                                      <option value="4">Other</option>
                                      <option value="5">Logo</option>
                                    </Field>
                                    <ErrorMessage
                                      name={`images.${index}.imageTypeId`}
                                      component="div"
                                      className="has-error"
                                    />
                                  </div>
                                  <div className=" col-6 my-1">
                                    <Field
                                      type="text"
                                      name={`images.${index}.imageUrl`}
                                      className="form-control"
                                      placeholder="Image Url"
                                    />
                                    <ErrorMessage
                                      name={`images.${index}.imageUrl`}
                                      component="div"
                                      className="has-error"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <button
                                      className="btn btn-outline-danger"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <hr className="my-4" />

                    <div className="col-12 form-group">
                      <label htmlFor="urls" className="form-group">
                        Urls
                      </label>
                      <FieldArray name="urls">
                        {({ push, remove }) => (
                          <div>
                            <button
                              className="btn btn-outline-info my-1"
                              type="button"
                              onClick={() => push()}
                            >
                              Add
                            </button>
                            {values.urls &&
                              values.urls.map((url, index) => (
                                <div key={`urls-${index}`} className="row">
                                  <div className=" col-10 my-1">
                                    <Field
                                      type="text"
                                      name={`urls.${index}`}
                                      className="form-control"
                                      placeholder="Url"
                                    />
                                    <ErrorMessage
                                      name={`urls.${index}`}
                                      component="div"
                                      className="has-error"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <button
                                      className="btn btn-outline-danger"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <hr className="my-4" />

                    <div className="col-12 form-group">
                      <label htmlFor="tags" className="form-group">
                        Tags
                      </label>
                      <FieldArray name="tags">
                        {({ push, remove }) => (
                          <div>
                            <button
                              className="btn btn-outline-info my-1"
                              type="button"
                              onClick={() => push()}
                            >
                              Add
                            </button>
                            {values.tags &&
                              values.tags.map((tag, index) => (
                                <div key={`tags-${index}`} className="row">
                                  <div className=" col-10 my-1">
                                    <Field
                                      type="text"
                                      name={`tags.${index}`}
                                      className="form-control"
                                      placeholder="Tag"
                                    />
                                    <ErrorMessage
                                      name={`tags.${index}`}
                                      component="div"
                                      className="has-error"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <button
                                      className="btn btn-outline-danger"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <hr className="my-4" />

                    <div className="col-12 form-group">
                      <label htmlFor="friendIds" className="form-group">
                        FriendIds
                      </label>
                      <FieldArray name="friendIds">
                        {({ push, remove }) => (
                          <div>
                            <button
                              className="btn btn-outline-info my-1"
                              type="button"
                              onClick={() => push()}
                            >
                              Add
                            </button>
                            {values.friendIds &&
                              values.friendIds.map((friendIds, index) => (
                                <div key={`friendIds-${index}`} className="row">
                                  <div className=" col-10 my-1">
                                    <Field
                                      type="text"
                                      name={`friendIds.${index}`}
                                      className="form-control"
                                      placeholder="Add Friend Ids"
                                    />
                                    <ErrorMessage
                                      name={`friendIds.${index}`}
                                      component="div"
                                      className="has-error"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <button
                                      className="btn btn-outline-danger"
                                      type="button"
                                      onClick={() => remove(index)}
                                    >
                                      X
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <hr className="my-4" />

                    <div className="mt-2 col-6">
                      <button
                        className="w-100 btn btn-primary btn"
                        type="submit"
                        // onClick={this.onJobFormClick}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TechCoForm;
