import React from "react";
import { Formik, Form } from "formik";
import { TextField, InputLabel, MenuItem, Select } from "@material-ui/core";
import EventsFormikMap from "./EventsFormikMap";
import { add, edit, getBy } from "../../services/genericsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EventsFormik extends React.Component {
  state = {
    formData: {
      dateStart: "",
      dateEnd: "",
      latitude: 0,
      longitude: 0,
      zipCode: "",
      address: "",
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "",
    },
    center: {
      lat: 38.685,
      lng: -100.234,
      zoom: 3.5,
      hasLocation: false,
    },
  };

  componentDidMount() {
    //make ajax call if there is an event ID
    if (this.props.match.path === "/events/formik") {
      return;
    } else {
      let eventSlug = this.props.match.params.eventSlug;

      getBy("events", eventSlug)
        .then(this.onGetEventBySlugSuccess)
        .catch(this.onGetEventBySlugError);
    }
  }

  onGetEventBySlugSuccess = (response) => {
    let event = response.data.item;
    // console.log("onGetEventBySlugSuccess firing", event);
    this.setState((prevState) => {
      let center = { ...prevState.center };
      center.lat = event.metaData.location.latitude;
      center.lng = event.metaData.location.longitude;
      center.zoom = 10;
      center.hasLocation = true;
      let formData = { ...prevState.formData };
      formData.name = event.name;
      formData.headline = event.headline;
      formData.description = event.description;
      formData.summary = event.summary;
      formData.slug = event.slug;
      formData.statusId = event.statusId;
      formData.dateStart = event.metaData.dateStart;
      formData.dateEnd = event.metaData.dateEnd;
      formData.latitude = event.metaData.location.latitude;
      formData.longitude = event.metaData.location.longitude;
      formData.address = event.metaData.location.address;
      formData.zipCode = event.metaData.location.zipCode;
      formData.id = event.id;
      return { ...prevState, formData, center };
    });
  };

  onGetEventBySlugError = (err) => {
    console.log("onGetEventBySlugError firing", err);
  };

  onAddressRequested = (formData) => {
    // console.log("onAddressRequested", location);

    // console.log(address, zipCode, lat, lng);

    this.setState((prevState) => {
      let center = { ...prevState.center };
      center.lat = formData.latitude;
      center.lng = formData.longitude;
      center.zoom = 10;
      center.hasLocation = true;
      debugger;
      return { ...prevState, formData, center };
    });
  };

  handleSubmit = (values) => {
    // console.log("handleSubmit firing", values);
    const shapedFormData = {
      name: values.name,
      headline: values.headline,
      description: values.description,
      summary: values.summary,
      slug: values.slug,
      statusId: values.statusId,
      metaData: {
        dateStart: values.dateStart,
        dateEnd: values.dateEnd,
        location: {
          latitude: values.latitude,
          longitude: values.longitude,
          address: values.address,
          zipCode: values.zipCode,
        },
      },
    };

    if (values.id) {
      shapedFormData.id = values.id;
      edit("events", shapedFormData)
        .then(this.onAddEditSuccess)
        .catch(this.onAddEditError);
    } else {
      add("events", shapedFormData)
        .then(this.onAddEditSuccess)
        .catch(this.onAddEditError);
    }
    // console.log("shapedData", shapedFormData);
  };

  onAddEditSuccess = (response) => {
    console.log("onAddEditSuccess firing", response);
    let message = "";

    if (response.data.item) {
      console.log("Event Successfully Added");
      message = "Event Successfully Added";
    } else {
      console.log("Event Successfully Edited");
      message = "Event Sucessfuly Edited";
    }
    let notify = () =>
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    notify();
    this.props.history.push("/events");
  };

  onAddEditError = (err) => {
    console.log("onAddEditError firing", err);
    let notify = () =>
      toast.error("There was an error saving your event. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  onCancelClicked = (e) => {
    e.preventDefault();
    console.log("onCancelClicked firing");
    this.props.history.push("/events");
  };

  render() {
    return (
      <div className="container my-4">
        <div className="row border-top rounded bg-dark text-white">
          <div className="col">
            <h2>{this.state.formData.id ? "Edit" : "Add"} Event</h2>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-6">
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
            >
              {({ values, handleChange }) => (
                <Form>
                  <div className="row d-flex mb-3">
                    <div className="my-2">
                      <h5>Use the map to enter the event address</h5>
                    </div>
                    <div className="col-8 d-flex-inline">
                      <div className="form-group">
                        <TextField
                          fullWidth
                          disabled
                          name="address"
                          label="Address"
                          value={values.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-4 d-flex-inline">
                      <div className="form-group">
                        <TextField
                          fullWidth
                          disabled
                          name="zipCode"
                          label="Zip Code"
                          value={values.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <TextField
                          fullWidth
                          disabled
                          name="latitude"
                          label="Latitude"
                          value={values.latitude}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <TextField
                          fullWidth
                          disabled
                          name="longitude"
                          label="Longitude"
                          value={values.longitude}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group my-3">
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <TextField
                      fullWidth
                      name="headline"
                      label="Headline"
                      value={values.headline}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <TextField
                      fullWidth
                      name="summary"
                      label="Summary"
                      value={values.summary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <TextField
                      fullWidth
                      multiline
                      name="description"
                      label="Description"
                      value={values.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <TextField
                          fullWidth
                          name="slug"
                          label="Website"
                          value={values.slug}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <InputLabel id="statusId">Status</InputLabel>
                        <Select
                          labelId="statusId"
                          fullWidth
                          id="statusId"
                          name="statusId"
                          value={values.statusId}
                          onChange={handleChange}
                        >
                          <MenuItem value={"Active"}>Active</MenuItem>
                          <MenuItem value={"NotSet"}>Not Set</MenuItem>
                          <MenuItem value={"Deleted"}>Deleted</MenuItem>
                          <MenuItem value={"Flagged"}>Flagged</MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col-6 d-flex-inline">
                      <div className="form-group">
                        <TextField
                          id="datetime-local"
                          name="dateStart"
                          label="Event Start"
                          type="datetime-local"
                          value={values.dateStart}
                          onChange={handleChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-4 d-flex-inline">
                      <div className="form-group">
                        <div className="form-group">
                          <TextField
                            id="datetime-local"
                            name="dateEnd"
                            label="Event End"
                            type="datetime-local"
                            value={values.dateEnd}
                            onChange={handleChange}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary mt-3" type="submit">
                    Save
                  </button>
                  <button
                    className="btn btn-danger mt-3 mx-3"
                    type="button"
                    onClick={this.onCancelClicked}
                  >
                    Cancel
                  </button>
                  <div className="col-6">
                    <div className="shadow">
                      <EventsFormikMap
                        currentValues={values}
                        onAddressRequested={this.onAddressRequested}
                        center={this.state.center}
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
export default EventsFormik;
