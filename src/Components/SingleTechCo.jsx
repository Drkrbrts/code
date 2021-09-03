import React from "react";

const SingleTechCo = (props) => {
  const editTechCo = () => {
    props.history.push(`/techco/${props.singleTechCo.id}/edit`, {
      type: "EDIT_TECHCO",
      payload: props.singleTechCo,
    });
  };

  return (
    <div className="card ">
      <img
        // src={props.singeTechCo.images.imageUrl}
        className="card-img-top"
        alt="techCo"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.singleTechCo.name}</h5>
        <p className="card-text">{props.singleTechCo.headline}</p>
        <button type="button" className="btn btn-info" onClick={editTechCo}>
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleTechCo;
