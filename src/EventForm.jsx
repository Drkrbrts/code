import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import * as eventService from "./services/eventService";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EventForm = (props) => {
  console.log(props);
  const event = props.event;
  console.log(event);

  const onSubmitBtnClick = (e) => {
    props.onSubmitBtn(event);
  };

  const onMetaData = (e) => {
    props.onMetaChange(e);
  };

  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <div className="form-group m-5">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={event.name}
              placeholder="Justin Bieber Concert"
              onChange={props.onHandleChange}
            />
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="form-control"
              name="headline"
              placeholder="Concert"
              value={event.headline}
              onChange={props.onHandleChange}
            />
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              className="form-control"
              name="summary"
              value={event.summary}
              placeholder="My mama don't like you and she likes everyone"
              onChange={props.onHandleChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={event.description}
              onChange={props.onHandleChange}
              placeholder="Cause if you like the way you look so much, oh baby you should go and love yourself. And if you think that I'm still holding on to somethin, you should go and love yourself"
            />
            <label htmlFor="slug">Image</label>
            <input
              type="url"
              className="form-control"
              name="slug"
              value={event.slug}
              placeholder=""
              onChange={props.onHandleChange}
            />
          </div>
          <div className="pt-1 m-5 px-1" style={{ justifyContent: "center" }}>
            <label htmlFor="dateStart"> Start date: </label>
            <input
              type="date"
              name="dateStart"
              min="2021-01-01"
              max="2045-12-31"
              value={event.metaData.dateStart}
              onChange={onMetaData}
            />
            <div className="pt-2 px-1">
              <label htmlFor="dateEnd"> End date: </label>
              <input
                type="date"
                name="dateEnd"
                min="2021-01-01"
                max="2045-12-31"
                value={event.metaData.dateEnd}
                onChange={onMetaData}
              />
            </div>
          </div>
          <div className="form-group m-5">
            <div className="row">
              <label htmlFor="address" className="col-md-6 col-form-label">
                Address
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={event.metaData.location.address}
                  placeholder="100 Main St"
                  onChange={onMetaData}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="zipCode" className="col-md-6 col-form-label">
                Zip Code
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="zipCode"
                  value={event.metaData.location.zipCode}
                  placeholder="90210"
                  onChange={onMetaData}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="latitude" className="col-md-6 col-form-label">
                Latitude
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="latitude"
                  value={event.metaData.location.latitude}
                  placeholder="90210"
                  onChange={onMetaData}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="longitude" className="col-md-6 col-form-label">
                Longitude
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control "
                  name="longitude"
                  value={event.metaData.location.longitude}
                  placeholder="90210"
                  onChange={onMetaData}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="statusId" className="col-md-6 col-form-label">
                Status
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control "
                  name="statusId"
                  value={event.statusId}
                  placeholder="Active"
                  onChange={props.onHandleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary form-control my-5"
              onClick={onSubmitBtnClick}
            >
              Submit
            </button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EventForm;
