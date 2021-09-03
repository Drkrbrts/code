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
  description: Yup.string().required("Profile is required"),
  summary: Yup.string().required("Summary is required"),
  headline: Yup.string().required("HeadlIne is required"),
  slug: Yup.string().required("Slug is required"),
  statusId: Yup.string().required("StatusId is required"),
  // images: Yup.string().required("Images are required"),
  // urls: Yup.string().required("Urls are required"),
  // tags: Yup.string().required("Tags are required"),
});

class UpdateEvent extends React.Component {
  state = {
    form: {
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
      id: "",
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "",
    },
  };

  doFormSubmit = (e) => {
    // e.preventDefault();
    console.log("form data", this.state.form);

    this.updateEvent()
      .then(() => {
        toast.success("updated Successfully");
        this.props.history.push("/events");
        console.log("event was updated");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  updateEvent = () => {
    console.log(JSON.stringify({ ...this.state }));
    var config = {
      method: "PUT",
      url: `https://api.remotebootcamp.dev/api/events/${this.state.form.id}`,
      data: JSON.stringify({ ...this.state }),
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

  fetchEventBySlug = () => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/events/${this.props.slug}`,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log(" event data new", response.data);
        const eventData = response.data.item;
        const form = {
          id: eventData.id,
          name: eventData.name,
          description: eventData.description,
          summary: eventData.summary,
          headline: eventData.headline,
          contactInformation: eventData.contactInformation.id,
          slug: eventData.slug,
          statusId: eventData.statusId,
          dateStart: eventData.metaData.dateStart,
          dateEnd: eventData.metaData.dateEnd,
          zipCode: eventData.metaData.location.zipCode,
          address: eventData.metaData.location.address,
        };
        this.setState({ form });

        console.log(this.state.form, "event data id");
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  componentDidMount() {
    // fetch the particular friend
    // const eventSlug = this.props.match.params.slug;
    this.fetchEventBySlug();
    //  set the data of that in the state
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
        <div className="signup-form form-container">
          <Formik
            initialValues={this.state.form}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
            enableReinitialize={true}
          >
            {({ values }) => (
              <Form>
                <div>
                  <div className="form-group">
                    <label htmlFor="id">Event Id</label>
                    <Field type="text" name="id" className="form-control" />

                    <ErrorMessage name="id" render={renderError} />
                  </div>
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
export default withRouter(UpdateEvent);
