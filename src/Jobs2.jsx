import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import * as jobService from "./services/jobService";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Too short!")
    .max(50, "Too long!")
    .required("Is Required"),
  description: Yup.string()
    .min(10, "Too short!")
    .max(100, "Too long!")
    .required("Is Required"),
  summary: Yup.string()
    .min(15, "Too short!")
    .max(30, "Too long!")
    .required("Is Required"),
  pay: Yup.string().min(3, "Too short!").required("Is Required"),
  slug: Yup.string().url().min(10, "Too short!").required("Is Required"),
  statusId: Yup.string().required("Is Required"),
  techCompanyId: Yup.string().required("Is Required"),
  skills: Yup.string().required("Is Required"),
});

const Jobs2 = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    summary: "",
    pay: "",
    slug: "",
    statusId: "",
    techCompanyId: 0,
    skills: "",
  });
  const [pageTitle, setPageTitle] = useState("Add a Job");
  const [justAddedId, setJustAddedId] = useState(null);
  const formValues = useRef(null);

  useEffect(() => {
    if (props.location.state) {
      console.log("this is an edit form");
      let editJobInfo = props.location.state;

      let updateData = {
        title: editJobInfo.title,
        description: editJobInfo.description,
        summary: editJobInfo.summary,
        pay: editJobInfo.pay,
        slug: editJobInfo.slug,
        statusId: editJobInfo.statusId,
        techCompanyId: editJobInfo.techCompany.id,
        skills: editJobInfo.skills,
      };

      setFormData(updateData);
      setPageTitle("Update Job");
    }
  }, [props.location.state]);

  const onSubmitBtnClick = () => {
    let jobId = props.match.params.id;
    let jobData = formValues.current.values;
    console.log(jobData);
    jobData.skills = jobData.skills.split(", ");
    console.log(jobData.skills);

    if (jobId) {
      jobService
        .update(jobId, jobData)
        .then(onUpdateJobSuccess)
        .catch(onUpdateJobError);
    } else if (justAddedId) {
      jobService
        .update(justAddedId, jobData)
        .then(onUpdateJobSuccess)
        .catch(onUpdateJobError);
    } else {
      jobService.add(jobData).then(onAddJobSuccess).catch(onAddJobError);
    }
  };

  //-------------------------------------------------
  const onUpdateJobSuccess = (res) => {
    console.log(res);

    toast.success("Job was updated successfully :)");
  };

  const onUpdateJobError = (err) => {
    console.log({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  const onAddJobSuccess = (res) => {
    console.log(res);

    setJustAddedId(res.data.item);
    setPageTitle("Update Job");
    toast.success("Job was added successfully :)");
  };

  const onAddJobError = (err) => {
    console.log({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  return (
    <Formik
      innerRef={formValues}
      enableReinitialize={true}
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={onSubmitBtnClick}
    >
      <Form>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">{pageTitle}</h1>
                </div>
                <div className="form-group m-5">
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Web Developer"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="description">Description</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Lorem ipsum dolor."
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="summary">Summary</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="summary"
                    placeholder="Lorem ipsum dolor."
                  />
                  <ErrorMessage
                    name="summary"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="pay">Pay</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="pay"
                    placeholder="100000"
                  />
                  <ErrorMessage
                    name="pay"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="slug">Website</label>
                  <Field
                    type="url"
                    className="form-control"
                    name="slug"
                    placeholder="https://"
                  />
                  <ErrorMessage
                    name="slug"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="status">Status</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="statusId"
                    placeholder="Active"
                  />
                  <ErrorMessage
                    name="statusId"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="techCompanyId">Tech Company Id</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="techCompanyId"
                    placeholder="666"
                  />
                  <ErrorMessage
                    name="techCompanyId"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="skills">Skills</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="skills"
                    placeholder="react, .net. node.js"
                  />
                  <ErrorMessage
                    name="skills"
                    component="div"
                    className="has-error"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary form-control my-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Jobs2;
