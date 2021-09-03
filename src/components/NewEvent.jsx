import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";

function NewEvent(props) {
  const [lgShow, setLgShow, value, setValue] = useState(false);

  function newEventClicked() {
    console.log("New Event was clicked");
    setLgShow(true);
  }
  function onStartDateChosen(date) {
    console.log("Start Date", date);
  }

  function onEndDateChose(date) {
    console.log("End Date", date);
  }

  return (
    <div className="container">
      <button className="btn btn-success" onClick={newEventClicked}>
        New Event
      </button>
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="lgModal">Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group row mb-2">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="headline" className="col-sm-2 col-form-label">
                Headline
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="headline"
                  name="headline"
                  placeholder="Headline"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="desc" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  name="description"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="summary" className="col-sm-2 col-form-label">
                Summary
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="summary"
                  name="summary"
                  placeholder="Summary"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="slug" className="col-sm-2 col-form-label">
                Slug
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  name="slug"
                  placeholder="Slug"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="statusId" className="col-sm-2 col-form-label">
                Status Id
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="statusId"
                  name="statusId"
                  placeholder="Status Id"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="address" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="zipcode" className="col-sm-2 col-form-label">
                Zipcode
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Zipcode"
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="longitude" className="col-sm-2 col-form-label">
                Longitude
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  name="longitude"
                  placeholder="Longitude"
                />
              </div>
              <label
                htmlFor="latitude"
                className="col-sm-2 col-form-label my-2"
              >
                Latitude
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control my-2"
                  id="latitude"
                  name="latitude"
                  placeholder="Latitude"
                />
              </div>
            </div>
            <div className="row aling-items-center">
              <div className="col-sm-5">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    name="startDate"
                    label="Start Date"
                    value={value}
                    onChange={onStartDateChosen}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-sm-5">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="End Date"
                    value={value}
                    onChange={onEndDateChose}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewEvent;
