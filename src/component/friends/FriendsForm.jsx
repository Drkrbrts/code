import React from "react";
import { addFriends, editFriends } from "../../services/friendService";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { formValidationSchema } from "./ValidationSchema";
import { toast } from "react-toastify";

class FriendsForm extends React.Component {
  state = {
    friend: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImageId: "",
      image: { imageTypeId: "", imageUrl: "" },
      skills: [{ id: "", name: "" }],
    },
  };

  componentDidMount() {
    let { state } = this.props.location;
    if (state) {
      let formData = state;
      formData.image.imageUrl = state.image.imageUrl;
      this.setFormData(formData);
    }
  }

  setFormData = (formData) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        friend: formData,
      };
    });
  };

  onChange = (e) => {
    const target = e.target;

    const value = target.value;

    const name = target.name;

    this.setState((prevState) => {
      const updatedFormData = { ...prevState.friend };

      updatedFormData[name] = value;

      return { friend: updatedFormData };
    });
  };

  onSubmitClick = (payload) => {
    console.log(payload);

    if (this.state.friend.id) {
      this.onEditFriend(payload);
    } else {
      this.onAddFriend(payload);
    }
  };

  onAddFriend = (payload) => {
    addFriends(payload)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
  };

  onAddFriendSuccess = (payload) => {
    console.log(payload);
    toast.success("Success!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

    this.props.history.push("/friends");
  };

  onAddFriendError = (error) => {
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

  onEditFriend = (payload) => {
    let id = this.state.friend.id;
    editFriends(id, payload)
      .then(this.onAddFriendSuccess)
      .catch(this.onEditError);
  };

  onEditSuccess = (response) => {
    console.log(response);
    toast.success("Edit Success!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  onEditError = (error) => {
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
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{ color: "blue" }}
                      >
                        Add or Edit Friend
                      </p>

                      <Formik
                        enableReinitialize={true}
                        initialValues={this.state.friend}
                        onSubmit={this.onSubmitClick}
                        validationSchema={formValidationSchema}
                      >
                        {({ values }) => (
                          <Form>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label m-1"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Title
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="title"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="title"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label m-1"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Bio
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="bio"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="bio"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Summary
                              </label>
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="summary"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="summary"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Headline
                              </label>
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="headline"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="headline"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Slug
                              </label>
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="slug"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="slug"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Status
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="statusId"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="statusId"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            {/* <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              > */}
                            {/* Primary Image
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="image.id"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="image.id"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div> */}

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Image Type Id
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="image.imageTypeId"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
                                }}
                              >
                                Image Url
                              </label>
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="image.imageUrl"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="image.imageUrl"
                                  component="div"
                                  className="has-error"
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <label
                                className="form-label"
                                style={{
                                  display: "inline-block",
                                  width: "100px",
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
                                          push({ id: "", name: "" })
                                        }
                                      >
                                        Add Skill
                                      </button>
                                      {values.skills &&
                                        values.skills.map((skill, index) => (
                                          <div className="row">
                                            <div className="col-10">
                                              <Field
                                                type="text"
                                                name={`skills.${index}.id`}
                                                className="form-control"
                                                placeholder="Skill Id"
                                              />
                                              <Field
                                                type="text"
                                                name={`skills.${index}.name`}
                                                className="form-control"
                                                placeholder="Skill Name"
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
                                              name={`skills.${index}.name`}
                                              component="div"
                                              className="has-error"
                                            />
                                          </div>
                                        ))}
                                    </div>
                                  )}
                                </FieldArray>

                                {/* <Field
                                type="text"
                                name="skills"
                                className="form-control"
                              /> */}
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

                      {/* <form className="mx-1 mx-md-4 fw-bold">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label m-1"
                            style={{
                              display: "inline-block",
                              width: "100px",
                            }}
                          >
                            Title
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
                              placeholder="Title"
                              onChange={this.onChange}
                              value={this.state.friend.title}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label m-1"
                            style={{ display: "inline-block", width: "100px" }}
                          >
                            Bio
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="bio"
                              className="form-control"
                              placeholder="Bio here"
                              onChange={this.onChange}
                              value={this.state.friend.bio}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "100px" }}
                          >
                            Summary
                          </label>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="summary"
                              className="form-control"
                              placeholder="Summary of Bio"
                              onChange={this.onChange}
                              value={this.state.friend.summary}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "100px" }}
                          >
                            Headline
                          </label>
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="headline"
                              className="form-control"
                              placeholder="Headline here"
                              onChange={this.onChange}
                              value={this.state.friend.headline}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "100px" }}
                          >
                            Slug
                          </label>
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="slug"
                              className="form-control"
                              placeholder="Based on the title of Headline"
                              onChange={this.onChange}
                              value={this.state.friend.slug}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "100px" }}
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
                              placeholder="Active , Disabled, Flagged, NotSet"
                              onChange={this.onChange}
                              value={this.state.friend.statusId}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "100px" }}
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
                              placeholder="Skills here"
                              onChange={this.onChange}
                              value={this.state.friend.skills}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <label
                            className="form-label"
                            style={{ display: "inline-block", width: "100px" }}
                          >
                            Primary Image
                          </label>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              style={{
                                display: "inline-block",
                                width: "300px",
                              }}
                              name="primaryImage"
                              className="form-control"
                              placeholder="Image URL"
                              onChange={this.onChange}
                              value={this.state.friend.primaryImage}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={this.onSubmitClick}
                            //   onClick={this.notify}
                          >
                            Submit
                          </button>
                        </div> */}
                      {/* </form> */}
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

export default FriendsForm;
