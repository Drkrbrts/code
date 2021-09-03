import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function SingleTechCo(props) {
  const techCo = props.techCo;
  const id = techCo.id;

  const payload = {
    name: techCo.name,
    profile: techCo.profile,
    headline: techCo.headline,
    summary: techCo.summary,
    slug: techCo.slug,
  };

  const editBtnClick = function () {
    props.onClick(id, payload);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card col-md-3">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5ZwXBB_A9RvEC_CZ_x0OqAHaHa%26pid%3DApi&f=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{techCo.name}</h5>
        <p className="card-text">{techCo.headline}</p>

        <button className="btn btn-secondary" onClick={handleShow}>
          View More
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{techCo.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{techCo.summary}</Modal.Body>
          <Modal.Body>{techCo.profile}</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <footer>
          <button
            data-techco-id={techCo.id}
            className="btn btn-primary"
            onClick={editBtnClick}
          >
            Edit
          </button>
        </footer>
      </div>
    </div>
  );
}

export default React.memo(SingleTechCo);
