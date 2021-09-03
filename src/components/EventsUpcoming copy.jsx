import React from "react"; // , { useState }
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Row, Modal } from "reactstrap";

function EventsUpcoming(props) {
  // const [modal, setModal] = useState(false);

  const onPageChangeClicked = (newPageNumber) => {
    // console.log("onPageChangeClicked");
    props.onChange(newPageNumber);
  };

  const onAddEventClicked = (e) => {
    // console.log("onAddEventClicked firing");
    e.preventDefault();
    toggle();
  };

  const onFieldChange = (e) => {
    // console.log("onFieldChange firing", e.currentTarget.value);
    props.onFieldChangeRequested(e.currentTarget);
  };

  const onSave = (e) => {
    e.preventDefault();
    // console.log("onSave firing");
    props.onSaveRequested();
  };

  const onCancelClicked = (e) => {
    // console.log("onCancelClicked");
    e.preventDefault();
    props.onCancelRequested();
  };

  const toggle = () => {
    // console.log("toggle firing");
    props.toggleModal();
  };

  const onViewAllClicked = (e) => {
    // console.log("onViewAllClicked");
    e.preventDefault();
    props.onViewAllRequested();
  };

  return (
    <div className="container border rounded bg-light shadow p-4">
      <div className="d-flex justify-content-center border shadow bg-info mb-2 p-3">
        <h3>Upcoming Events</h3>
      </div>
      <div className="d-flex justify-content-around p-2">
        <button
          type="button"
          name="viewAll"
          className="btn btn-primary"
          onClick={onViewAllClicked}
        >
          View All
        </button>
        <button
          type="button"
          name="newEvent"
          className="btn btn-primary"
          onClick={onAddEventClicked}
        >
          New Event
        </button>
      </div>
      <div className="d-flex justify-content-center p-3">
        <Pagination
          onChange={onPageChangeClicked}
          current={props.current}
          total={props.total}
          pageSize={4}
        />
      </div>
      <div className="d-flex justify-content-center p-3">
        <div className="row">{props.events}</div>

        {/* <EventsSingle /> */}
      </div>
      <Modal
        zIndex={5000}
        centered
        size="xl"
        isOpen={props.isModalOpen}
        toggle={onAddEventClicked}
        contentClassName="border-0 p-4 p-lg-5"
      >
        <Row>
          <div className="card mb-3 pb-3 shadow" style={{ maxWidth: "1200px" }}>
            <div className="class-header d-flex justify-content-between bg-light border-bottom p-2 mb-3">
              <div className="d-flex-inline" style={{ fontSize: "20px" }}>
                {props.formData.id ? "Edit" : "Add"} Event
              </div>
              <div></div>
              <div className="d-flex-inline">
                <button
                  className="btn btn-danger"
                  type="button"
                  name="close"
                  onClick={onCancelClicked}
                >
                  X
                </button>
              </div>
            </div>

            <div className="row flex-row justify-content-center g-0">
              <div className="col-7">
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Event Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Event Name"
                      name="name"
                      value={props.formData.name}
                      onChange={onFieldChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="headline">Headline</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Headline"
                      name="headline"
                      value={props.formData.headline}
                      onChange={onFieldChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="summary">Summary</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Summary"
                      name="summary"
                      value={props.formData.summary}
                      onChange={onFieldChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      name="description"
                      value={props.formData.description}
                      onChange={onFieldChange}
                    />
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website"
                          name="slug"
                          value={props.formData.slug}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="statusId">Status</label>
                        <select
                          name="statusId"
                          className="form-control"
                          value={props.formData.statusId}
                          onChange={onFieldChange}
                        >
                          <option value="">Select Job Status</option>
                          <option value="Active">Active</option>
                          <option value="NotSet">Not Set</option>
                          <option value="Deleted">Deleted</option>
                          <option value="Flagged">Flagged</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="dateStart">Start Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Start Date"
                          name="dateStart"
                          value={props.formData.dateStart}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="dateEnd">End Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="End Date"
                          name="dateEnd"
                          value={props.formData.dateEnd}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="latitude">Latitude</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Latitude"
                          name="latitude"
                          value={props.formData.latitude}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                    <div className="col d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="longitude">Longitude</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Longitude"
                          name="longitude"
                          value={props.formData.longitude}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mb-3">
                    <div className="col-8 d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          name="address"
                          value={props.formData.address}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                    <div className="col-4 d-flex-inline">
                      <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Zip Code"
                          name="zipCode"
                          value={props.formData.zipCode}
                          onChange={onFieldChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary mt-2 mx-2"
                    type="button"
                    name="submit"
                    onClick={onSave}
                  >
                    {props.formData.id ? "Edit" : "Add"}
                  </button>
                  <button
                    className="btn btn-danger mt-2 mx-2"
                    type="button"
                    name="cancel"
                    onClick={onCancelClicked}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </Modal>
    </div>
  );
}
export default EventsUpcoming;
