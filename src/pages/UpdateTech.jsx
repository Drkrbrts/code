import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./UpdateTech.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  profile: Yup.string().required("Profile is required"),
  summary: Yup.string().required("Summary is required"),
  headline: Yup.string().required("HeadlIne is required"),
  slug: Yup.string().required("Slug is required"),
  statusId: Yup.string().required("StatusId is required"),
  imageName: Yup.string().required("Images are required"),
  urls: Yup.string().required("Urls are required"),
  tags: Yup.string().required("Tags are required"),
  friendIds: Yup.string().required("Tags are required"),
});

class UpdateTech extends React.Component {
  state = {
    form: {
      id: "",
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      images: [],
      urls: [],
      tags: [],
      friendIds: [],
    },
    stepOne: true,
    stepTwo: false,
    imageClick: false,
  };

  doFormSubmit = (e) => {
    // e.preventDefault();
    console.log("form data", this.state.form);
    this.updateTech()
      .then(() => {
        toast.success("updated Successfully");
        this.props.history.push("/tech");
        console.log("techco was updated");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  updateTech = () => {
    console.log(JSON.stringify({ ...this.state.form }), this.state.form);
    var config = {
      method: "PUT",
      url: `https://api.remotebootcamp.dev/api/techcompanies/${this.state.form.id}`,
      data: JSON.stringify({ ...this.state.form }),
      // data: this.state.form,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  fetchTechById = (id) => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/techcompanies/${id}`,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log(" tech data", response.data.item);
        const techData = response.data.item;
        const form = {
          id: techData.id,
          name: techData.name,
          profile: techData.profile,
          summary: techData.summary,
          headline: techData.headline,
          contactInformation: techData.contactInformation.id,
          slug: techData.slug,
          statusId: techData.statusId,
          images: techData.imageNames,
          urls: techData.urlNames,
          tags: techData.Names,
          friendIds: techData.friendIdNames,
        };
        this.setState({ form });
        console.log(this.state.form, "formdata");
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  componentDidMount() {
    // fetch the particular friend
    const TechId = this.props.match.params.id;
    this.fetchTechById(TechId);

    // set the data of that in the state
  }

  handleSubmit = (values) => {
    console.log(values, "updateForm");
    this.setState({ form: values });
    this.doFormSubmit();
  };

  render() {
    console.log("state", this.state);

    const renderError = (message) => <p style={{ color: "red" }}>{message}</p>;

    return (
      <div>
        <div class="signup-form form-container">
          <span>
            <button
              onClick={() => this.setState({ stepOne: true, stepTwo: false })}
            >
              Step 1
            </button>
          </span>

          <span>
            <button
              onClick={() => this.setState({ stepTwo: true, stepOne: false })}
            >
              Step 2
            </button>
          </span>

          <Formik
            initialValues={this.state.form}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
            enableReinitialize={true}
          >
            {({ values }) => (
              <Form>
                {this.state.stepOne && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field type="text" name="name" className="form-control" />

                      <ErrorMessage name="name" render={renderError} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profile">Profile</label>
                      <Field
                        type="text"
                        name="profile"
                        className="form-control"
                      />
                      <ErrorMessage name="profile" render={renderError} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="summary">Summary</label>
                      <Field
                        type="text"
                        name="summary"
                        className="form-control"
                      />
                      <ErrorMessage name="summary" render={renderError} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="headline">Headline</label>
                      <Field
                        type="text"
                        name="headline"
                        className="form-control"
                      />

                      <ErrorMessage name="headline" render={renderError} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="slug">Slug</label>
                      <Field type="text" name="slug" className="form-control" />

                      <ErrorMessage name="slug" render={renderError} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="statusId">Add Status</label>
                      <Field
                        type="text"
                        name="statusId"
                        className="form-control"
                      />

                      <ErrorMessage name="statusId" render={renderError} />
                    </div>
                  </div>
                )}

                {this.state.stepTwo && (
                  <div>
                    <div className="form-group">
                      <FieldArray name="images">
                        {({ push, remove }) => (
                          <div>
                            <ol>
                              {values.images &&
                                values.images.map((image, index) => (
                                  <li key={Math.random()}>
                                    {" "}
                                    {image.imageUrl}{" "}
                                  </li>
                                ))}
                            </ol>
                            <label htmlFor="imageName">Image</label>
                            <Field
                              type="text"
                              name="imageName"
                              className="form-control"
                            />
                            <button
                              type="button"
                              className="btn btn-info"
                              disabled={this.state.imageClick}
                              onClick={() => {
                                this.setState({ imageClick: true });
                                push({
                                  imageUrl: values.imageName,
                                  imageTypeId: 0,
                                });
                              }}
                            >
                              Add Image
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>

                    <div className="form-group">
                      <FieldArray name="urls">
                        {({ push, remove }) => (
                          <div>
                            <ol>
                              {values.urls &&
                                values.urls.map((url, index) => (
                                  <li key={Math.random()}> {url} </li>
                                ))}
                            </ol>
                            <label htmlFor="url">Url</label>
                            <Field
                              type="text"
                              name="url"
                              className="form-control"
                            />
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                push(values.url);
                              }}
                            >
                              Add Url
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>

                    <div className="form-group">
                      <FieldArray name="tags">
                        {({ push, remove }) => (
                          <div>
                            <ol>
                              {values.tags &&
                                values.tags.map((tag, index) => (
                                  <li key={Math.random()}>{tag} </li>
                                ))}
                            </ol>
                            <label htmlFor="url">Tag</label>
                            <Field
                              type="text"
                              name="tag"
                              className="form-control"
                            />
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={() => {
                                push(values.tag);
                              }}
                            >
                              Add Tag
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>

                    <div className="form-group">
                      <FieldArray name="friendIds">
                        {({ push, remove }) => (
                          <div>
                            <ul>
                              {values.friendIds &&
                                values.friendIds.map((friend, index) => (
                                  <li key={Math.random()}> {friend} </li>
                                ))}
                            </ul>
                            <label htmlFor="friend">Friend</label>
                            <Field
                              type="text"
                              name="friend"
                              className="form-control"
                            />
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                push(values.friend);
                              }}
                            >
                              Add Friend
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                )}

                {this.state.stepTwo && (
                  <button
                    id="updateTech-button"
                    type="submit"
                    class="btn btn-primary "
                  >
                    Update Tech
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(UpdateTech);
