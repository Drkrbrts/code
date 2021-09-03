import React from "react";
import defaultExport from "./friendService";
import { toast } from "react-toastify";
import { Formik, Form, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";
import formValidation from "./valSchem";
import "./friends.css";

class FriendEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
  }
  onSubmitClick = (values) => {
    console.log("update clicked" + values);
    defaultExport
      .changeFriends(values, values.id)
      .then(this.onUpdateSuccess)
      .catch(this.onFailure);
  };
  onUpdateSuccess = (data) => {
    console.log(data);
    toast.success("Friend Updated Successfully!");
    this.props.history.push(`/friends`);
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
            <strong>UPDATE FRIEND DATA</strong>
          </h2>
          <img
            src={this.state.currFriend.primaryImage}
            align="middle"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            alt="..."
            className="img-fluid center"
          />
          <Formik
            enableReinitialize={true}
            onSubmit={this.onSubmitClick}
            initialValues={this.state.currFriend}
            validationSchema={formValidation}
          >
            {({ values, handleChange }) => (
              <Form>
                <TextField
                  name="title"
                  label="Title"
                  onChange={handleChange}
                  defaultValue={values.title}
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
                  defaultValue={values.bio}
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
                  defaultValue={values.summary}
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
                  defaultValue={values.headline}
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
                  defaultValue={values.slug}
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
                  defaultValue={values.primaryImage}
                  className="form-control mb-2 "
                ></TextField>
                <ErrorMessage
                  name="primaryImage"
                  component="div"
                  className="has-error"
                ></ErrorMessage>
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

export default FriendEdit;
