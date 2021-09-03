import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import "./compStyle.css";
import * as Yup from "yup";
import techCoService from "../services/techCoService";
import friendService from "../services/friendService";
import { toast } from "react-toastify";

const basicValidationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(120).required("Company Name is Required"),
  profile: Yup.string().min(2).max(2147483647).required("Profile is Required"),
  summary: Yup.string().min(2).max(255).required("Summary is Required"),
  headline: Yup.string().min(2).max(120).required("Headline is Required"),
  contactInformation: Yup.string()
    .email("Invalid Email")
    .max(1000)
    .required("Email is Required"),
  slug: Yup.string().min(2).max(100).required("Unique Slug is Required"),
  images: Yup.array()
    .of(
      Yup.object().shape({
        imageTypeId: Yup.string().required(),
        imageUrl: Yup.string()
          .min(2)
          .max(200)
          .required("At least one image Url is required"),
      })
    )
    .required("adding images is required")
    .min(1),
  urls: Yup.array()
    .of(Yup.string().min(2).max(200))
    .required("adding Urls is required")
    .min(1),
  tags: Yup.array().of(Yup.string()).required("adding Tags is required").min(1),
  friendIds: Yup.array().of(Yup.number().nullable(true)),
});

class TechCoForm extends React.Component {
  state = {
    formData: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      images: [{ imageTypeId: "", imageUrl: "" }],
      urls: [""],
      tags: [""],
      friendIds: [0],
    },
    statusOptions: [
      { id: "NotSet", name: "Not Set" },
      { id: "Active", name: "Active" },
      { id: "Deleted", name: "Deleted" },
      { id: "Flagged", name: "Flagged" },
    ],
    imageTypes: [
      { id: 1, name: "Seo" },
      { id: 2, name: "Cover" },
      { id: 3, name: "Main" },
      { id: 4, name: "Other" },
      { id: 5, name: "Logo" },
    ],
    friendsArray: [{ id: "", name: "" }],
    isUpdate: false,
  };

  componentDidMount = () => {
    friendService
      .getAllFriends()
      .then(this.onGetAllFriendsSuccess)
      .catch(this.onGetAllFriendsError);
    if (this.props.match.params.techCoId) {
      techCoService
        .getById(this.props.match.params.techCoId)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  };

  onGetByIdSuccess = (response) => {
    let updateData = response.data.item;
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      let isUpdate = { ...prevState.isUpdate };
      formData.name = updateData.name;
      formData.profile = updateData.profile;
      formData.summary = updateData.summary;
      formData.headline = updateData.headline;
      formData.contactInformation = updateData.contactInformation.data;
      formData.slug = updateData.slug;
      formData.statusId = updateData.statusId;
      formData.images = updateData.images;
      formData.urls = updateData.urls.map(this.mapUrls);
      formData.tags = updateData.tags.map(this.mapTags);
      formData.friendIds = updateData.friends.map(this.mapUpdateDataFriend);
      isUpdate = true;
      return { formData, isUpdate };
    });
  };

  mapUrls = (urlObj) => {
    return `${urlObj.url}`;
  };

  mapTags = (tagObj) => {
    return `${tagObj.tagName}`;
  };

  mapUpdateDataFriend = (friendObj) => {
    let result = friendObj.id;
    return result;
  };

  onGetByIdError = (response) => {
    console.log(response.response.data);
  };

  onGetAllFriendsSuccess = (response) => {
    this.setState((prevState) => {
      let friendsArray = { ...prevState.friendsArray };
      friendsArray = response.data.item.pagedItems.map(this.mapFriend);
      return { friendsArray };
    });
  };

  mapFriend = (friendObj) => {
    let result = {};
    result.id = friendObj.id;
    result.name = friendObj.title;
    return result;
  };

  onGetAllFriendsError = (response) => {
    console.log(response);
  };

  mapStatus = (status) => (
    <option value={status.id} key={`status_${status.id}`}>
      {status.name}
    </option>
  );

  mapImg = (imgType) => (
    <option value={imgType.name} key={`imgType_${imgType.id}`}>
      {imgType.name}
    </option>
  );

  mapFriendById = (friend) => {
    return (
      <option value={friend.id} key={`friendFromArray_${friend.id}`}>
        {friend.name}
      </option>
    );
  };

  handleSubmit = (values) => {
    if (values.friendIds[0] !== 0) {
      values.friendIds = values.friendIds.map(this.mapFriendIdValue);
    }
    if (this.state.isUpdate === true) {
      techCoService
        .update(this.props.match.params.techCoId, values)
        .then(this.onUpdateTechCoSuccess)
        .catch(this.onUpdateTechCoError);
    } else {
      techCoService
        .add(values)
        .then(this.onAddCoSuccess)
        .catch(this.onAddCoError);
    }
  };

  mapFriendIdValue = (mapFriendIdValue) => {
    let result = parseInt(mapFriendIdValue);
    return result;
  };

  onUpdateTechCoSuccess = (response) => {
    console.log(response);
    toast.success("Tech Co Successfully Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/techco");
  };

  onUpdateTechCoError = (response) => {
    console.log(response);
    toast.error(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onAddCoSuccess = (response) => {
    console.log(response);
    toast.success("Tech Co Successfully Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/techco");
  };
  onAddCoError = (response) => {
    console.log({ response });
    toast.error(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Add or Update Tech Company
            </strong>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-6 p-5">
              <div className="card">
                <Formik
                  enableReinitialize={true}
                  initialValues={this.state.formData}
                  onSubmit={this.handleSubmit}
                  validationSchema={basicValidationSchema}
                >
                  {({ values }) => (
                    <Form className="p-4">
                      <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="has-error"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="profile" className="form-label">
                          Profile
                        </label>
                        <Field
                          type="text"
                          name="profile"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="profile"
                          component="div"
                          className="has-error"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="summary" className="form-label">
                          Summary
                        </label>
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
                      <div className="form-group mb-3">
                        <label htmlFor="headline" className="form-label">
                          Headline
                        </label>
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
                      <div className="form-group mb-3">
                        <label
                          htmlFor="contactInformation"
                          className="form-label"
                        >
                          Contact Information
                        </label>
                        <Field
                          type="email"
                          name="contactInformation"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="contactInformation"
                          component="div"
                          className="has-error"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="slug" className="form-label">
                          Slug
                        </label>
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
                      <div className="form-group mb-3">
                        <label htmlFor="statusId" className="form-label">
                          Status
                        </label>
                        <Field
                          component="select"
                          name="statusId"
                          className="form-control"
                        >
                          {this.state.statusOptions.map(this.mapStatus)}
                        </Field>
                      </div>
                      <div className="form-group">
                        <FieldArray name="images">
                          {({ push, remove }) => (
                            <div>
                              <button
                                type="button"
                                className="btn btn-info my-2"
                                onClick={() =>
                                  push({ imageTypeId: "", imageUrl: "" })
                                }
                              >
                                Add Image
                              </button>
                              {values.images &&
                                values.images.map((image, index) => (
                                  <div
                                    className="row gx-0"
                                    key={`imageForm_${index}`}
                                  >
                                    <div className="my-1 col-2">
                                      <Field
                                        component="select"
                                        name={`images.${index}.imageTypeId`}
                                        className="form-control"
                                      >
                                        <option value="">Type</option>
                                        {this.state.imageTypes.map(this.mapImg)}
                                      </Field>
                                    </div>
                                    <div className="my-1 col-9">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`images.${index}.imageUrl`}
                                        placeholder="Image Url"
                                      />
                                    </div>
                                    <div className="my-1 col-1">
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => remove(index)}
                                      >
                                        X
                                      </button>
                                    </div>
                                    <ErrorMessage
                                      name={`images.${index}.imageTypeId`}
                                      type="int"
                                      component="div"
                                      className="has-error my-1"
                                    />
                                    <ErrorMessage
                                      name={`images.${index}.imageUrl`}
                                      component="div"
                                      className="has-error my-1"
                                    />
                                  </div>
                                ))}
                            </div>
                          )}
                        </FieldArray>
                      </div>
                      <div className="form-group">
                        <FieldArray name="urls">
                          {({ push, remove }) => (
                            <div>
                              <button
                                type="button"
                                className="btn btn-info my-2"
                                onClick={() => push("")}
                              >
                                Add Url
                              </button>
                              {values.urls &&
                                values.urls.map((url, index) => (
                                  <div
                                    className="row gx-0"
                                    key={`urlForm_${index}`}
                                  >
                                    <div className="my-1 col-11">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`urls.${index}`}
                                        placeholder="WebSite Url"
                                      />
                                    </div>
                                    <div className="my-1 col-1">
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => remove(index)}
                                      >
                                        X
                                      </button>
                                    </div>
                                    <ErrorMessage
                                      name={`urls.${index}`}
                                      component="div"
                                      className="has-error my-1"
                                    />
                                  </div>
                                ))}
                            </div>
                          )}
                        </FieldArray>
                      </div>
                      <div className="form-group">
                        <FieldArray name="tags">
                          {({ push, remove }) => (
                            <div>
                              <button
                                type="button"
                                className="btn btn-info my-2"
                                onClick={() => push("")}
                              >
                                Add Tag
                              </button>
                              {values.tags &&
                                values.tags.map((tag, index) => (
                                  <div
                                    className="row gx-0"
                                    key={`tagForm_${index}`}
                                  >
                                    <div className="my-1 col-11">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        name={`tags.${index}`}
                                        placeholder="Tag"
                                      />
                                    </div>
                                    <div className="my-1 col-1">
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => remove(index)}
                                      >
                                        X
                                      </button>
                                    </div>
                                    <ErrorMessage
                                      name={`tags.${index}`}
                                      component="div"
                                      className="has-error my-1"
                                    />
                                  </div>
                                ))}
                            </div>
                          )}
                        </FieldArray>
                      </div>
                      <div className="form-group">
                        <FieldArray name="friendIds">
                          {({ push, remove }) => (
                            <div>
                              <button
                                type="button"
                                className="btn btn-info my-2"
                                onClick={() => push()}
                              >
                                Add Friend
                              </button>
                              {values.friendIds &&
                                values.friendIds.map((friendId, index) => (
                                  <div
                                    className="row gx-0"
                                    key={`friendIdForm_${index}`}
                                  >
                                    <div className="my-1 col-11">
                                      <Field
                                        component="select"
                                        name={`friendIds.${index}`}
                                        className="form-control"
                                      >
                                        <option value="0">none</option>
                                        {this.state.friendsArray.map(
                                          this.mapFriendById
                                        )}
                                      </Field>
                                    </div>
                                    <div className="my-1 col-1">
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => remove(index)}
                                      >
                                        X
                                      </button>
                                    </div>
                                    <ErrorMessage
                                      name={`friendIds.${index}`}
                                      component="div"
                                      className="has-error my-1"
                                    />
                                  </div>
                                ))}
                            </div>
                          )}
                        </FieldArray>
                      </div>

                      <button type="submit" className="btn btn-primary mt-3">
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TechCoForm);
