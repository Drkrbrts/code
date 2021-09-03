import React from "react";
import * as friendService from "./services/friendService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Is Required"),
  bio: Yup.string()
    .min(10, "Too short!")
    .max(100, "Too Long!")
    .required("Is Required"),
  summary: Yup.string()
    .min(10, "Too short!")
    .max(200, "Too Long!")
    .required("Is Required"),
  headline: Yup.string()
    .min(5, "Too short!")
    .max(50, "Too Long!")
    .required("Is Required"),
  slug: Yup.string()
    .url()
    .min(10, "Too short!")
    .max(150)
    .required("Is Required"),
  statusId: Yup.string()
    .min(5, "Too short!")
    .max(15, "Too Long!")
    .required("Is Required"),
  primaryImage: Yup.string()
    .url()
    .min(5, "Too short!")
    .max(150)
    .required("Is Required"),
});

class Friends2 extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
    pageTitle: "Add A Friend",
  };

  componentDidMount() {
    if (this.props.location.state) {
      let editFriendData = this.props.location.state;

      let formData = {
        title: editFriendData.title,
        bio: editFriendData.bio,
        summary: editFriendData.summary,
        headline: editFriendData.headline,
        slug: editFriendData.slug,
        statusId: editFriendData.statusId,
        primaryImage: editFriendData.primaryImage.imageUrl,
      };

      this.setState(() => {
        return { formData, pageTitle: "Edit a Friend" };
      });
    } else if (this.props.match.params.id) {
      let id = parseInt(this.props.match.params.id);
      friendService
        .getById(id)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  onSubmitBtnClick = () => {
    let id = this.props.match.params.id;

    if (id) {
      friendService
        .update(id, this.state.formData)
        .then(this.onUpdateFriendSuccess)
        .catch(this.onUpdateFriendError);
    } else {
      friendService
        .add(this.state.formData)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendSuccess);
    }
  };
  //-----------------------------------

  onGetByIdSuccess = (res) => {
    console.log(res);
    let friendInfo = res.data.item;

    let formData = {
      title: friendInfo.title,
      bio: friendInfo.bio,
      summary: friendInfo.summary,
      headline: friendInfo.headline,
      slug: friendInfo.slug,
      statusId: friendInfo.statusId,
      primaryImage: friendInfo.primaryImage.imageUrl,
    };

    this.setState(() => {
      return { formData, pageTitle: "Edit A Friend" };
    });
  };

  onGetByIdError = (err) => {
    console.error({ error: err });
  };

  onUpdateFriendSuccess = (res) => {
    console.log(res);
    toast.success("Friend was updated successfully :)");
  };

  onUpdateFriendError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onAddFriendSuccess = (res) => {
    console.log(res);
    toast.success("Friend was added successfully :)");
  };

  onAddFriendError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  //------------------------------------
  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">{this.state.pageTitle}</h1>
              </div>
              <Formik
                enableReinitialize={true}
                initialValues={this.state.formData}
                validationSchema={validationSchema}
                onSubmit={this.onSubmitBtnClick}
              >
                <Form className="m-5">
                  <label htmlFor="friendName">Name:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="John Doe"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="friendBio">Bio:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="bio"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing…in fermentum posuere urna nec tincidunt praesent."
                  />
                  <ErrorMessage
                    name="bio"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="friendSummary">Summary:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="summary"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing…mpor incididunt ut labore et dolore magna aliqua."
                  />
                  <ErrorMessage
                    name="summary"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="friendHeadline">Headline:</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="headline"
                    placeholder="nec feugiat in fermentum posuere"
                  />
                  <ErrorMessage
                    name="headline"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="friendUrl">Website:</label>
                  <Field
                    type="url"
                    className="form-control"
                    name="slug"
                    placeholder="http://"
                  />
                  <ErrorMessage
                    name="slug"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="friendStatus">Status:</label>
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
                  <label htmlFor="imageUrl">Image Url:</label>
                  <Field
                    type="url"
                    className="form-control"
                    name="primaryImage"
                    placeholder=""
                  />
                  <ErrorMessage
                    name="primaryImage"
                    component="div"
                    className="has-error"
                  />
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends2;
