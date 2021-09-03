import React from "react"; // , { useState }
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Row, Modal } from "reactstrap";
import EventsFormik from "./EventsFormik";

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

            <EventsFormik />
          </div>
        </Row>
      </Modal>
    </div>
  );
}
export default EventsUpcoming;
