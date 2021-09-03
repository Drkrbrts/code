import React from "react";
import Fade from "@material-ui/core/Fade";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as FriendService from "../services/FriendService";

const basicSchema = Yup.object({
  name: Yup.string().required("Required"),
  profile: Yup.string().required("Required"),
  summary: Yup.string().required("Required"),
  headline: Yup.string().required("Required"),
  contactInformation: Yup.string().required("Required"),
  slug: Yup.string().required("Required"),
  statusId: Yup.string().required("Required"),
  imageUrl: Yup.string().required("Required"),
  urls: Yup.string().required("Required"),
  tags: Yup.string().required("Required"),
});

class AddTechCo extends React.Component {
  state = {
    status: [
      { id: 1, name: "NotSet" },
      { id: 2, name: "Active" },
      { id: 3, name: "Deleted" },
      { id: 4, name: "Flagged" },
    ],
    formData: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: 0,
      imageTypeId: 0,
      imageUrl: "",
      urls: [],
      tags: [],
    },
  };

  componentDidMount() {
    let friendId = this.props.match.params.friendId;
    console.log("ComponentDidMount", { friendId });

    if (friendId) {
      FriendService.getById(friendId)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log({ currentPath, previousPath });

    let friendId = this.props.match.params.friendId;
    if (friendId && prevProps.match.params.friendId !== friendId) {
      FriendService.getById(friendId)
        .then(this.onGetByIdUpdateSuccess)
        .catch(this.onGetByIdUpdateError);
    }
  }

  onGetByIdUpdateSuccess = (response) => {
    console.log(response);
    this.setState({
      formData: {
        title: response.data.item.bio,
        bio: response.data.item.bio,
        summary: response.data.item.summary,
        headline: response.data.item.headline,
        slug: response.data.item.slug,
        statusId: response.data.item.statusId,
        skills: response.data.item.skills,
        primaryImage: response.data.item.primaryImage,
      },
    });
  };

  onGetByIdUpdateError = (err) => {
    console.warn(err);
  };

  handleSubmit = (values) => {
    console.log("Form data", values);
    console.log("Title: " + values.title);
    console.log("Bio: " + values.bio);
    console.log("Summary: " + values.summary);
    console.log("Headline: " + values.headline);
    console.log("Slug: " + values.slug);
    console.log("StatusId: " + values.statusId);
    console.log("Skills: " + values.skills);
    console.log("PrimaryImage: " + values.primaryImage);
    let friendId = this.props.match.params.friendId;
    console.log(values);
    if (friendId === undefined) {
      FriendService.add(values)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendError);
    } else {
      FriendService.update(friendId, values)
        .then(this.onUpdateFriendSuccess)
        .catch(this.onUpdateFriendError);
    }
  };

  onAddFriendSuccess = (response) => {
    console.log(response);
    let friendId = response.data.item;
    this.props.history.push("/friends/" + friendId);
  };

  onAddFriendError = (err) => {
    console.log(err);
  };

  onUpdateFriendSuccess = (response) => {
    console.log(response);
  };

  onUpdateFriendError = (err) => {
    console.warn(err);
  };

  onGetByIdSuccess = (response) => {
    console.log(response);
    this.setState({
      formData: {
        title: response.data.item.title,
        bio: response.data.item.bio,
        summary: response.data.item.summary,
        headline: response.data.item.headline,
        slug: response.data.item.slug,
        statusId: response.data.item.statusId,
        skills: response.data.item.skills,
        primaryImage: response.data.item.primaryImage,
      },
    });
  };

  onGetByIdError = (err) => {
    console.warn(err);
  };

  mapStatus = (status) => {
    return (
      <option value={status.id} key={`status_${status.id}`}>
        {status.name}
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
            Add a Tech Company
          </h4>
          <div className="container" style={{ width: "80%" }}>
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
              validationSchema={basicSchema}
            >
              <Form style={{ padding: "10px" }}>
                <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                  ></Field>
                  <ErrorMessage
                    name="title"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="profile">Profile: </label>
                  <Field
                    type="text"
                    name="profile"
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
                  <label htmlFor="headline">Headline:</label>
                  <Field
                    type="text"
                    name="headline"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="contactInformation">
                    Contact Information:{" "}
                  </label>
                  <Field
                    type="text"
                    name="contactInformation"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="slug">Slug:</label>
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
                    {this.state.status.map(this.mapStatus)}
                  </Field>
                </div>
                <div className="form-group">
                  <label htmlFor="imageTypeId">ImageTypeId: </label>
                  <Field
                    type="imageTypeId"
                    name="skills"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="imageUrl">Image Url: </label>
                  <Field
                    type="text"
                    name="imageUrl"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="urls">Urls: </label>
                  <Field
                    type="text"
                    name="urls"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="tags">Tags: </label>
                  <Field
                    type="text"
                    name="tags"
                    className="form-control"
                  ></Field>
                </div>
                <div className="form-group">
                  <label htmlFor="friendId">FriendId: </label>
                  <Field
                    type="text"
                    name="friendId"
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

export default AddTechCo;
