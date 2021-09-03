import React from "react";

class Friends extends React.Component {
  state = {
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    status: "",
    skills: "",
    primaryImage: "",
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
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{ color: "red" }}
                      >
                        Add or Edit Friend
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label m-1"
                            style={{ textAlign: "right" }}
                          >
                            Title
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                              }}
                              name="title"
                              className="form-control"
                              placeholder="Title"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label m-1"
                            style={{ textAlign: "left" }}
                          >
                            Bio
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                              }}
                              name="bio"
                              className="form-control"
                              placeholder="Bio here"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ textAlign: "right" }}
                          >
                            Summary
                          </label>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                              }}
                              name="summary"
                              className="form-control"
                              placeholder="Summary of Bio"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ textAlign: "right" }}
                          >
                            Headline
                          </label>
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                              }}
                              name="headline"
                              className="form-control"
                              placeholder="Headline here"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ textAlign: "right" }}
                          >
                            Slug
                          </label>
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                              }}
                              name="slug"
                              className="form-control"
                              placeholder="Based on the title of Headline"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ textAlign: "right" }}
                          >
                            Status
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                              }}
                              name="statusId"
                              className="form-control"
                              placeholder="Active , Disabled, Flagged, NotSet"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ textAlign: "right" }}
                          >
                            Skills
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                alignSelf: "center",
                              }}
                              name="skills"
                              className="form-control"
                              placeholder="Skills here"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ textAlign: "right" }}
                          >
                            Primary Image
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                alignContent: "center",
                              }}
                              name="primaryImage"
                              className="form-control"
                              placeholder="Image URL"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={this.onSubmit}
                            //   onClick={this.notify}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
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

export default Friends;
