import React from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./UpdateTech.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Profile is required"),
  summary: Yup.string().required("Summary is required"),
  headline: Yup.string().required("HeadlIne is required"),
  slug: Yup.string().required("Slug is required"),
  statusId: Yup.string().required("StatusId is required"),
  // images: Yup.string().required("Images are required"),
  // urls: Yup.string().required("Urls are required"),
  // tags: Yup.string().required("Tags are required"),
});

class AddEvent extends React.Component {
  state = {
    metaData: {
      dateStart: "",
      dateEnd: "",
      location: {
        latitude: 0,
        longitude: 0,
        zipCode: "",
        address: "",
      },
    },
    name: "",
    headline: "",
    description: "",
    summary: "",
    slug: "",
    statusId: "NotSet",
  };

  doFormSubmit = (e) => {
    // e.preventDefault();
    console.log("form data", this.state);
    this.addEvent()
      .then(() => {
        toast.success("updated Successfully");
        this.props.history.push("/events");
        console.log("added an event");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  addEvent = () => {
    var config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/events",
      data: JSON.stringify({ ...this.state }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data.item);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  handleSubmit = (values) => {
    console.log(values, "form values");
    this.setState(values);
    this.doFormSubmit();
  };

  render() {
    console.log("state", this.state);

    const renderError = (message) => <p style={{ color: "red" }}>{message}</p>;

    return (
      <div>
        <div className="signup-form form-container">
          <Formik
            initialValues={this.state}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
            enableReinitialize={true}
          >
            {({ values }) => (
              <Form>
                <div>
                  <div className="form-group">
                    <label htmlFor="dateStart">Date of Event</label>
                    <Field
                      type="text"
                      name="metaData.dateStart"
                      className="form-control"
                    />

                    <ErrorMessage name="dateStart" render={renderError} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateEnd">End Date</label>
                    <Field
                      type="text"
                      name="metaData.dateEnd"
                      className="form-control"
                    />
                    <ErrorMessage name="dateEnd" render={renderError} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" className="form-control" />

                    <ErrorMessage name="name" render={renderError} />
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
                    <label htmlFor="description">Description</label>
                    <Field
                      type="text"
                      name="description"
                      className="form-control"
                    />
                    <ErrorMessage name="description" render={renderError} />
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

                <div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <Field
                      type="text"
                      name="metaData.location.zipCode"
                      className="form-control"
                    />

                    <ErrorMessage name="ZipCode" render={renderError} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Field
                      type="text"
                      name="metaData.location.address"
                      className="form-control"
                    />
                    <ErrorMessage name="address" render={renderError} />
                  </div>
                </div>

                <button
                  id="updateTech-button"
                  type="submit"
                  class="btn btn-primary "
                >
                  Add Event
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(AddEvent);
