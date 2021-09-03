import React from "react";
import { Formik, Form } from "formik";
import { TextField, InputLabel, MenuItem, Select } from "@material-ui/core";
import EventsFormikMap from "./EventsFormikMap";
import { addEvent } from "../services/eventsService";

/*
  
  - Put in modal
  - Clean up Events page
  - Use shouldUpdate

*/

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

  componentDidMount() {}

  // shouldComponentUpdate() {
  //   let shouldUpdate = true;
  //   console.log("shouldComponentUpdate firing");
  //   if (!this.state.center.hasLocation) {
  //     shouldUpdate = false;
  //   }

  //   return shouldUpdate;
  // }

  onAddressRequested = (location) => {
    console.log("onAddressRequested", location);
    let address = `${location.street_number} ${location.route} ${location.locality}, ${location.administrative_area_level_1}`;
    let zipCode = location.postal_code;
    let lat = location.latitude;
    let lng = location.longitude;
    console.log(address, zipCode, lat, lng);

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData.address = address;
      formData.zipCode = zipCode;
      formData.latitude = lat;
      formData.longitude = lng;
      let center = { ...prevState.center };
      center.lat = lat;
      center.lng = lng;
      center.zoom = 10;
      center.hasLocation = true;
      return { ...prevState, formData, center };
    });
  };

  handleSubmit = (values) => {
    console.log("handleSubmit firing", values);
    let formData = values;
    const shapedFormData = {
      name: formData.name,
      headline: formData.headline,
      description: formData.description,
      summary: formData.summary,
      slug: formData.slug,
      statusId: formData.statusId,
      metaData: {
        dateStart: formData.dateStart,
        dateEnd: formData.dateEnd,
        location: {
          latitude: formData.latitude,
          longitude: formData.longitude,
          address: formData.address,
          zipCode: formData.zipCode,
        },
      },
    };
    console.log("end of handleSubmit firing", shapedFormData);
    addEvent(shapedFormData).then(this.onAddSuccess).catch(this.onAddError);
  };

  onAddSuccess = (response) => {
    console.log("onAddSuccess firing", response);
  };

  onAddError = (err) => {
    console.log("onAddError firing", err);
  };

  render() {
    return (
      <div className="container my-4">
        <div className="row border-top rounded bg-dark text-white">
          <div className="col">
            <h2>Events Formik Form</h2>
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
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="col-6">
            <div className="shadow">
              <EventsFormikMap
                onAddressRequested={this.onAddressRequested}
                center={this.state.center}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EventsFormik;
