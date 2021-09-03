import React from "react";
import Fade from "@material-ui/core/Fade";
import * as JobService from "../services/JobService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const basicSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  summary: Yup.string().required("Required"),
  pay: Yup.string().required("Required"),
  slug: Yup.string().required("Required"),
  statusId: Yup.string().required("Required"),
  techCompanyId: Yup.string().required("Required"),
  skills: Yup.string().required("Required"),
});

class AddJob extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: 0,
      techCompanyId: 0,
      skills: [""],
    },
    status: [
      { id: 1, name: "NotSet" },
      { id: 2, name: "Active" },
      { id: 3, name: "Deleted" },
      { id: 4, name: "Flagged" },
    ],
    techCompany: [
      { id: 1, name: "Google" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Facebook" },
      { id: 4, name: "Microsoft" },
    ],
  };

  componentDidMount() {
    let jobId = this.props.match.params.jobId;
    console.log("ComponentDidMount", { jobId });

    if (jobId) {
      JobService.getById(jobId)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log({ currentPath, previousPath });

    let jobId = this.props.match.params.jobId;
    if (jobId && prevProps.match.params.friendId !== jobId) {
      this.componentDidMount();
    }
  }

  onGetByIdSuccess = (response) => {
    console.log(response);
    this.setState({
      buttonClassName: "btn btn-warning mr-3 m-3 mb-1",
      buttonLabel: "Update",
      buttonOnClick: "this.onUpdateClicked",
      formData: {
        title: response.data.item.title,
        description: response.data.item.description,
        summary: response.data.item.summary,
        pay: response.data.item.pay,
        slug: response.data.item.slug,
        statusId: response.data.item.statusId,
        techCompanyId: response.data.item.techCompanyId,
        skills: response.data.item.skills,
      },
    });
  };

  onGetByIdError = (err) => {
    console.warn(err);
  };

  handleSubmit = (values) => {
    let jobId = this.props.match.params.jobId;
    console.log(values);
    if (jobId) {
      JobService.update(jobId, values)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    } else {
      JobService.addJob(values)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    }
  };

  onAddJobSuccess = (response) => {
    console.log(response);
    let jId = response.data.item;
    this.props.history.push("/jobs/" + jId);
  };

  onAddJobError = (err) => {
    console.log(err);
  };

  onUpdateSuccess = (response) => {
    console.log(response);
  };

  onUpdateError = (err) => {
    console.log(err);
  };

  mapSelect = (select) => {
    return (
      <option value={select.id} key={`status_${select.id}`}>
        {select.name}
      </option>
    );
  };

  render() {
    return (
      <Fade in={true} style={{ transitionDelay: "250ms" }}>
        <div className="p-2 mb-4 bg-light rounded-3">
          <h4
            style={{
              textAlign: "center",
            }}
          >
            Add Job
          </h4>
          <div className="container" style={{ width: "80%" }}>
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
              validationSchema={basicSchema}
            >
              <Form style={{ padding: "50px" }}>
                <div className="form-group">
                  <label htmlFor="title">Title: </label>
                  <Field
                    type="text"
                    name="title"
                    className="form-control"
                  ></Field>
                  <ErrorMessage
                    name="title"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description: </label>
                  <Field
                    type="text"
                    name="description"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="summary">Summary: </label>
                  <Field
                    type="text"
                    name="summary"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="pay">Pay:</label>
                  <Field
                    type="text"
                    name="pay"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="slug">Slug: </label>
                  <Field
                    type="text"
                    name="slug"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="statusId">StatusId: </label>
                  <Field
                    component="select"
                    name="statusId"
                    className="form-control"
                  >
                    <option value="">Select Status</option>
                    {this.state.status.map(this.mapSelect)}
                  </Field>
                </div>
                <div className="form-group">
                  <label htmlFor="techCompanyId">TechCompanyId: </label>
                  <Field
                    component="select"
                    name="techCompanyId"
                    className="form-control"
                  >
                    <option value="">Select Status</option>
                    {this.state.techCompany.map(this.mapSelect)}
                  </Field>
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Skills: </label>
                  <Field
                    type="text"
                    name="skills"
                    className="form-control"
                  ></Field>
                </div>
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="btn btn-primary mr-3 m-3 mb-1"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </Fade>
    );
  }
}

export default AddJob;
