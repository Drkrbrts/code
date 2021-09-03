import React from "react";

function singleTechCo(props) {
  const oneTechCo = props.techCo;

  const onDeleteClick = function () {
    props.onClick(oneTechCo.id);
  };
  const onUpdateClick = function () {
    props.history.push(`/techCoForm/${oneTechCo.id}`);
  };
  const onModalClick = function () {
    props.onClick(oneTechCo);
  };

  return (
    <div className="card col-3 m-4 align-items-center ">
      {oneTechCo.images ? (
        <img
          src={oneTechCo.images[0].imageUrl}
          className="card-img-top m-1"
          alt="..."
        />
      ) : null}
      <div className="card-body">
        <h3 className="card-title">{oneTechCo.name}</h3>
        <h5>{oneTechCo.headline}</h5>
        <p className="card-text">{oneTechCo.summary}</p>
        <button className="btn btn-danger mx-1" onClick={onDeleteClick}>
          Delete
        </button>
        <button className="btn btn-info mx-1" onClick={onUpdateClick}>
          Update
        </button>
        <button className="btn btn-secondary mx-1" onClick={onModalClick}>
          Info
        </button>
      </div>
    </div>
  );
}

export default React.memo(singleTechCo);
