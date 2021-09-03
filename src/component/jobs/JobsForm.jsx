import React from "react";
import { addJobs, editJobs } from "../../services/jobService";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { toast } from "react-toastify";

class JobsForm extends React.Component {
  state = {
    job: {
      title: "",
      techCompanyId: 0,
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      skills: [{}],
    },
    techCompany: [
      { id: 1, name: "The Lost Co" },
      { id: 2, name: "The Unbreathable" },
      { id: 3, name: "Slam Dunk" },
    ],
  };

  componentDidMount() {
    let { state } = this.props.location;
    if (state) {
      let formData = state;
      formData.techCompanyId = state.techCompanyId;
      // formData.skills = state.skills.map((item) => item.name).join(". ");
      this.setFormData(formData);
    }
  }

  setFormData = (formData) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        job: formData,
      };
    });
  };

  mapCompanies = (techCompany) => (
    <option value={techCompany.id} key={`company_${techCompany.id}`}>
      {techCompany.name}
    </option>
  );

  onJobChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState((prevState) => {
      const job = { ...prevState.job };
      job[name] = value;

      return { job };
    });
  };

  onSkillChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState((prevState) => {
      const job = { ...prevState.job };

      job[name] = value.split(". ");

      return { job };
    });
  };

  onTechCompanySelect = (e) => {
    console.log(e.target.value);
    const targetComp = parseInt(e.target.value);
    let name = e.target.name;
    this.setState((prevState) => {
      let job = { ...prevState.job };
      job[name] = targetComp;
      return { job };
    });
  };

  onJobSubmit = (payload) => {
    let id = this.state.job.id;
    if (id) {
      editJobs(id, payload)
        .then(this.onJobEditSuccess)
        .catch(this.onJobEditError);
    } else {
      addJobs(payload).then(this.onAddJobSuccess).catch(this.onAddJobError);
    }
  };

  onAddJobSuccess = (job) => {
    console.log(job);

    toast.success("Job Added!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  onAddJobError = (error) => {
    console.warn(error);
    toast.error(<strong>Error</strong>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  onJobEditSuccess = (response) => {
    console.log(response);
    toast.success("Edit Successful!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  onJobEditError = (error) => {
    console.warn(error);
    toast.error(<strong>Error</strong>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  render() {
    return (
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div>
                        <img
                          src="https://i.ibb.co/BG9y668/Daco-4238989.png"
                          className="img-fluid"
                          alt="Sample"
                        ></img>
                      </div>
                      <hr />
                      <Formik
                        enableReinitialize={true}
                        initialValues={this.state.job}
                        onClick={this.onJobSubmit}
                      >
                        {({ values }) => (
                          <Form className="mx-1 mx-md-4 fw-bold">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label m-1"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Role
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  type="text"
                                  name="title"
                                  className="form-control"
                                  placeholder="Job position"
                                  // onChange={this.onJobChange}
                                  // value={this.state.job.title}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label m-1"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Tech Company
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  component="select"
                                  name="techCompanyId"
                                  className="form-control"
                                >
                                  <option value="">Select a Company</option>
                                  {this.state.techCompany.map(
                                    this.mapCompanies
                                  )}
                                </Field>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Job Description
                              </label>
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  type="text"
                                  name="description"
                                  className="form-control"
                                  placeholder="Description"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Job Summary
                              </label>
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  type="text"
                                  name="summary"
                                  className="form-control"
                                  placeholder="Summary"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Pay
                              </label>
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  type="text"
                                  name="pay"
                                  className="form-control"
                                  placeholder="Salary"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Skills
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <FieldArray name="skills">
                                  {({ push, remove }) => (
                                    <div>
                                      <button
                                        className="btn btn-info"
                                        type="button"
                                        onClick={() =>
                                          push({ id: "", skillName: "" })
                                        }
                                      >
                                        Add Skills
                                      </button>
                                      {values.skills &&
                                        values.skills.map((skill, index) => (
                                          <div className="row">
                                            <div className="col-10">
                                              <Field
                                                type="text"
                                                name={`skills.${index}.skillName`}
                                              />
                                            </div>
                                            <div className="col-2">
                                              <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={() => remove(index)}
                                              >
                                                Remove
                                              </button>
                                            </div>
                                            <ErrorMessage
                                              name={`skills.${index}.skillName`}
                                              component="div"
                                              className="has-error"
                                            />
                                          </div>
                                        ))}
                                    </div>
                                  )}
                                  {/* <Field
                                    style={{
                                      display: "inline-block",
                                      width: "300px",
                                    }}
                                    type="text"
                                    name="skills"
                                    className="form-control"
                                    placeholder="Skills"
                                  /> */}
                                </FieldArray>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Location
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  type="text"
                                  name="slug"
                                  className="form-control"
                                  placeholder="Job Location"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "200px",
                                }}
                              >
                                Status
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  style={{
                                    display: "inline-block",
                                    width: "300px",
                                  }}
                                  type="text"
                                  name="statusId"
                                  className="form-control"
                                  placeholder="Active, Deleted"
                                />
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                Submit
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                        className="img-fluid"
                        alt="Sample"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JobsForm;
