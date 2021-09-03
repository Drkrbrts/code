import React from "react";

const PersonCard = (props) => {
  const handleEdit = () => {
    props.onEdit(props.person);
  };
  const handleDelete = () => {
    props.onDel(props.person);
  };
  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", display: "inline-block" }}
        alt="..."
        id={props.person.id}
      >
        <img
          className="card-img-top"
          alt="..."
          src={props.person.primaryImage.imageUrl}
        />
        <div className="card-body">
          <h5 className="card-title">{props.person.title}</h5>
          <p className="card-text">{props.person.summary}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonCard;
