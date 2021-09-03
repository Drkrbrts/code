import React from "react";

const TechCard = (props) => {
  const handleEdit = () => {
    props.onEdit(props.companyData);
  };
  const handleDelete = () => {
    props.onDelete(props.companyData);
  };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", display: "inline-block" }}
        alt="..."
        id={props.companyData.id}
      >
        <img
          className="card-img-top img-fluid"
          alt="Tech Company"
          src={props.companyData.images[0].imageUrl}
        />
        <div className="card-body">
          <h3 className="card-title">{props.companyData.name}</h3>
          <p>
            <strong>{props.companyData.headline}</strong>
          </p>
          <p className="card-text">
            <a
              href={props.companyData.profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </p>
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

export default TechCard;
