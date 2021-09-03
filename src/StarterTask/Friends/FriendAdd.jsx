import React from "react";
import friendService from "./friendService";
import { toast } from "react-toastify";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import formValidation from "./valSchem";
import "./friends.css";

class FriendsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: " ",
        bio: " ",
        summary: " ",
        headline: " ",
        slug: " ",
        statusId: false,
        primaryImage: " ",
      },
    };
  }
  onSubmitClick = (values) => {
    if (values.statusId === true) {
      values.statusId = "Active";
    } else if (values.statusId === false) {
      values.statusId = "NotSet";
    }
    friendService
      .addToFile(values.primaryImage)
      .then(this.onFileUpload)
      .catch(this.onFailure);
    friendService
      .addFriends(values)
      .then(this.onSubmitSuccess)
      .catch(this.onFailure);
  };
  onSubmitSuccess = (data) => {
    console.log(data);
    toast.success("Friend Added!");
    // this.props.history.push(`/friends`);
  };
  onFileUpload = (data) => {
    console.log(data);
    debugger;
  };
  onReturnClick = () => {
    this.props.history.push("/friends");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>ADD A NEW FRIEND</strong>
          </h2>
          <Formik
            enableReinitialize={true}
            onSubmit={this.onSubmitClick}
            initialValues={this.state.formData}
            validationSchema={formValidation}
          >
            {({ handleChange, handleBlur }) => (
              <Form>
                <TextField
                  name="title"
                  label="Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control mb-2"
                ></TextField>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
                <TextField
                  name="bio"
                  label="Bio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control mb-2"
                ></TextField>
                <ErrorMessage
                  name="bio"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
                <TextField
                  name="summary"
                  label="Summary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control mb-2"
                ></TextField>
                <ErrorMessage
                  name="summary"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
                <TextField
                  name="headline"
                  label="Headline"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control mb-2"
                ></TextField>
                <ErrorMessage
                  name="headline"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
                <TextField
                  name="slug"
                  label="Slug"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control mb-2"
                ></TextField>
                <ErrorMessage
                  name="slug"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
                <TextField
                  name="primaryImage"
                  label="Image Url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control mb-2 "
                ></TextField>
                <ErrorMessage
                  name="primaryImage"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
                <Field
                  type="checkbox"
                  name="statusId"
                  className="form-check-input mb-2 me-2"
                />
                <label htmlFor="statusId" className="form-check-label mb-2">
                  StatusId
                </label>
                <div>
                  <Button variant="contained" type="submit" color="primary">
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    type="button"
                    color="secondary"
                    style={{ float: "right" }}
                    onClick={this.onReturnClick}
                  >
                    Return to Friends
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsAdd;
