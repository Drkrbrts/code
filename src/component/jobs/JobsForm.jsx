import React from "react";
import { addJobs, editJobs } from "../../services/userService";
import { toast } from "react-toastify";

class JobsForm extends React.Component {
  state = {
    job: {
      title: "",
      techCompanyId: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      skills: [],
    },
  };

  onJobChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState(() => {
      const job = { ...this.state.job };
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

  onJobSubmit = (e) => {
    e.preventDefault();
    let payload = this.state.job;
    addJobs(payload).then(this.onAddJobSuccess).catch(this.onAddJobError);
  };

  onAddJobSuccess = (job) => {
    console.log(job);
    this.setState({ job });

    toast.success("Job Added!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    console.log(this.state);
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

  onJobEdit = (e) => {
    e.preventDefault();
    let id = this.state.job.id;
    let payload = this.state.job;
    editJobs(id, payload)
      .then(this.onJobEditSuccess)
      .catch(this.onJobEditError);
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
                      {/* <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{ color: "blue" }}
                      >
                        Add a Job
                      </p> */}
                      <div>
                        <img
                          src="https://i.ibb.co/BG9y668/Daco-4238989.png"
                          className="img-fluid"
                          alt="Sample"
                        ></img>
                      </div>
                      <hr />
                      <form className="mx-1 mx-md-4 fw-bold">
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
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="title"
                              className="form-control"
                              placeholder="Job position"
                              onChange={this.onJobChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label m-1"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Tech Company
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            {/* <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="techCompanyId"
                              className="form-control"
                              placeholder="Company Name"
                              onChange={this.onJobChange}
                            /> */}
                            <select
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="techCompanyId"
                              className="form-control"
                              onChange={this.onTechCompanySelect}
                            >
                              <option>Select a Company</option>
                              <option value="28050">Grab</option>
                              <option value="28049">Kitopi</option>
                              <option value="28048">Pleo</option>
                              <option value="28047">Snackpass</option>
                              <option value="28046">Spacemaker</option>
                            </select>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Job Description
                          </label>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="description"
                              className="form-control"
                              placeholder="Description"
                              onChange={this.onJobChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Job Summary
                          </label>
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="summary"
                              className="form-control"
                              placeholder="Summary"
                              onChange={this.onJobChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Pay
                          </label>
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="pay"
                              className="form-control"
                              placeholder="Salary"
                              onChange={this.onJobChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Skills
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="skills"
                              className="form-control"
                              placeholder="Skills"
                              onChange={this.onSkillChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Slug
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="slug"
                              className="form-control"
                              placeholder="A unique identifier for this record"
                              onChange={this.onJobChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "200px" }}
                          >
                            Status
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="statusId"
                              className="form-control"
                              placeholder="Active, Deleted"
                              onChange={this.onJobChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {this.state.job.id ? (
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              onClick={this.onJobEdit}
                            >
                              Submit
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              onClick={this.onJobSubmit}
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </form>
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
