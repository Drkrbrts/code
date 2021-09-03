import React from "react";
import { Row, Modal } from "reactstrap";
import EventsMapAll from "./EventsMapAll";

function EventsModalMapViewAll(props) {
  const onToggleMap = (e) => {
    console.log("onToggleMap");
    e.preventDefault();
    props.onViewAllRequested();
  };

  return (
    <Modal
      zIndex={5000}
      centered
      size="xl"
      isOpen={props.isMapsModalOpen}
      toggle={onToggleMap}
      contentClassName="border-0 p-4 p-lg-5"
    >
      <Row>
        <div className="card mb-3 pb-3 shadow" style={{ maxWidth: "1200px" }}>
          <div className="class-header d-flex justify-content-between bg-light border-bottom p-2 mb-3">
            <div className="d-flex-inline" style={{ fontSize: "20px" }}>
              All Events
            </div>
            <div></div>
            <div className="d-flex-inline">
              <button
                className="btn btn-danger"
                type="button"
                name="close"
                onClick={onToggleMap}
              >
                X
              </button>
            </div>
          </div>

          <div className="row flex-row justify-content-center g-0">
            <EventsMapAll events={props.events} />
          </div>
        </div>
      </Row>
    </Modal>
  );
}
export default EventsModalMapViewAll;
