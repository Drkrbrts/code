import React from "react";
import { Formik, Form, FastField } from "formik";
import { add, edit, getBy } from "../../services/genericsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FriendsFormFormik extends React.Component {
  state = {
    formData: {
      title: "",
      headline: "",
      summary: "",
      slug: "",
      statusId: "",
      bio: "",
      primaryImage: "",
    },
    statusId: ["Active", "Not Set", "Deleted", "Flagged"],
  };

  componentDidMount() {
    // console.log("componentDidMount firing");
    let route = this.props.match.path;
    if (route === "/friends/formik") {
      // console.log("if firing");
      return;
    } else {
      // console.log("else firing", this.props.match.params.friendId);
      getBy("friends", this.props.match.params.friendId)
        .then(this.onGetFriendSuccess)
        .catch(this.onGetFriendError);
    }
  }

  mapStatusId = (statusId) => (
    <option value={statusId} key={`statusId-${statusId}`}>
      {statusId}
    </option>
  );

  onCancel = (e) => {
    e.preventDefault();
    // console.log("onCancel firing");
    this.props.history.push("/friends");
  };

  onSave = (values) => {
    // console.log("handleSubmit firing", values);

    if (values.id) {
      // console.log("if firing");
      edit("friends", values).then(this.onSaveSuccess).catch(this.onSaveError);
    } else {
      console.log("else firing");
      add("friends", values).then(this.onSaveSuccess).catch(this.onSaveError);
    }
  };

  onSaveSuccess = (response) => {
    // console.log("onSaveSuccess firing", response);
    this.message("success", "Your friend was successfully saved");
    this.props.history.push("/friends");
  };

  onGetFriendSuccess = (response) => {
    // console.log("onGetFriendSuccess firing", response);
    let friend = response.data.item;
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData.id = friend.id;
      formData.title = friend.title;
      formData.headline = friend.headline;
      formData.summary = friend.summary;
      formData.slug = friend.slug;
      formData.statusId = friend.statusId;
      formData.bio = friend.bio;
      formData.primaryImage = friend.primaryImage.imageUrl;
      return { ...prevState, formData };
    });
  };

  onSaveError = (err) => {
    // console.log("onSaveError", err);
    this.message("error", "There was an error saving your friend. Try again.");
  };

  onGetFriendError = (err) => {
    // console.log("onGetFriendError", err);
    this.message(
      "error",
      "There was an error retrieving your friend.  Try again."
    );
  };

  message = (type, message) => {
    console.log("message firing");

    if (type === "success") {
      let notify = () =>
        toast.success(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      notify();
    } else {
      let notify = () =>
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      notify();
    }
  };

  render() {
    return (
      <>
        <div className="row px-3 py-2 border-bottom bg-light">
          <div className="col">
            <h2>{this.state.formData.id ? "Edit" : "Add"} Friend</h2>
          </div>
        </div>
        <div className="container">
          <div className="row flex-row justify-content-center">
            <div className="col-4">
              <Formik
                enableReinitialize={true}
                initialValues={this.state.formData}
                onSubmit={this.onSave}
              >
                <Form>
                  <div className="form-group my-3">
                    <label htmlFor="title">Full Name</label>
                    <FastField
                      component="input"
                      name="title"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="headline">Headline</label>
                    <FastField
                      component="input"
                      name="headline"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="summary">Summary</label>
                    <FastField
                      component="input"
                      name="summary"
                      className="form-control"
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <FastField
                          component="input"
                          name="slug"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="statusId">Friend Status</label>
                      <FastField
                        component="select"
                        name="statusId"
                        className="form-control"
                      >
                        <option value="">Select Status</option>
                        {this.state.statusId.map(this.mapStatusId)}
                      </FastField>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="primaryImage">Avatar Url</label>
                    <FastField
                      component="input"
                      name="primaryImage"
                      className="form-control"
                      placeholder="http://www.example.com/image.jpg"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="bio">Biography</label>
                    <FastField
                      component="textarea"
                      name="bio"
                      className="form-control"
                      cols="30"
                      rows="5"
                    />
                  </div>
                  <div className="d-flex justify-content-end flex-row px-3">
                    <div className="mx-2">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                    <div className="mx-2">
                      <button
                        className="btn btn-danger"
                        type="button"
                        name="cancel"
                        onClick={this.onCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FriendsFormFormik;
