import React from "react";

function TechCoCard(props) {
  const techCo = props.techCo;

  return (
    <div className="card shadow-lg col-3">
      <div className="card-header">
        <img
          className="card-img-top img-responsive"
          src={techCo.images[0].imageUrl}
          alt="photograph"
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{techCo.name}</h5>
        <p className="card-summary">{techCo.summary}</p>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-warning col-5 ms-auto"
          onClick={() => props.onClick(techCo)}
        >
          Edit
        </button>
        <button type="button" className="btn btn-danger col-5 me-auto">
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(TechCoCard);
