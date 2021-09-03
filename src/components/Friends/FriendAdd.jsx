import React from "react";
import * as friendsServices from "../../services/friendsServices";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

toast.configure();
class FriendAdd extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      skills: "",
      primaryImage: "",
    },
  };
  componentDidMount(props) {
    if (this.props.location.state) {
      this.setState((prevState) => {
        let primaryImage = this.props.location.state.primaryImage.imageUrl;
        let formData = { ...this.props.location.state };
        formData.primaryImage = primaryImage;
        if (formData.skills === null) {
          formData.skills = "";
        }
        return { formData };
      });
    }
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };
  onSubmitClicked = (e) => {
    e.preventDefault();
    var formData = { ...this.state.formData };
    formData.skills = formData.skills.split(",");
    if (formData.id > 0) {
      friendsServices
        .updateFriends(this.state.formData)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    } else {
      friendsServices
        .addFriends(this.state.formData)
        .then(this.onAddSuccess)
        .catch(this.onAddError);
    }
  };

  onAddSuccess = (response) => {
    toast.success("successful");
  };
  onAddError = (err) => {
    toast.error("Fail");
  };
  onUpdateSuccess = (response) => {
    console.log(response);
  };
  onUpdateError = (error) => {
    console.log(error);
  };
  handleSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <main role="main">
        <h1 className="display-7 fw-bold text-center">Add or Edit Friend</h1>
        <div className="container border border-warning border-3">
          <div className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-lg">
              <Formik
                enableReinitialize={true}
                initialValues={this.state.formData}
                onSubmit={this.handleSubmit}
              >
                {({ values }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="title" />
                      <Field
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio" />
                      <Field
                        type="text"
                        name="bio"
                        className="form-control"
                        placeholder="Bio"
                      />
                      <ErrorMessage
                        name="bio"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="summary" />
                      <Field
                        type="text"
                        name="summary"
                        className="form-control"
                        placeholder="Summary"
                      />
                      <ErrorMessage
                        name="summary"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="headline" />
                      <Field
                        type="text"
                        name="headline"
                        className="form-control"
                        placeholder="Headline"
                      />
                      <ErrorMessage
                        name="headline"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="slug" />
                      <Field
                        type="text"
                        name="slug"
                        className="form-control"
                        placeholder="Slug"
                      />
                      <ErrorMessage
                        name="slug"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="statusId" />
                      <Field
                        type="text"
                        name="statusId"
                        className="form-control"
                        placeholder="Status"
                      />
                      <ErrorMessage
                        name="statusId"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="skills" />
                      <Field
                        type="text"
                        name="skills"
                        className="form-control"
                        placeholder="Skills"
                      />
                      <ErrorMessage
                        name="skills"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="primaryImage" />
                      <Field
                        type="text"
                        name="primaryImage"
                        className="form-control"
                        placeholder="Primary Image"
                      />
                      <ErrorMessage
                        name="primaryImage"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              {/* <form>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.title}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="bio"
                    type="text"
                    className="form-control"
                    placeholder="Bio"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.bio}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="summary"
                    type="text"
                    className="form-control"
                    placeholder="Summary"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.summary}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="headline"
                    type="text"
                    className="form-control"
                    placeholder="Headline"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.headline}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="slug"
                    type="text"
                    className="form-control"
                    placeholder="Slugg"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.slug}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="statusId"
                    type="text"
                    className="form-control"
                    placeholder="Status"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.statusId}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="skills"
                    type="text"
                    className="form-control"
                    placeholder="Skills"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.skills}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="primaryImage"
                    type="text"
                    className="form-control"
                    placeholder="Primary Image"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.primaryImage}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmitClicked}
                >
                  Submit
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default FriendAdd;
