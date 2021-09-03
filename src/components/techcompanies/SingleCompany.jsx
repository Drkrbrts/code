import React from "react";

function SingleCompany(props) {
  var company = props.company;

  function onEditClick(e) {
    e.preventDefault();
    props.Edit(company.id);
  }
  return (
    <div className="card col-md-3">
      <img
        className="card-img-top"
        src={
          company.images
            ? company.images[0].imageUrl
            : "https://images.globest.com/contrib/content/uploads/sites/311/2018/08/Screen-Shot-2018-08-21-at-11.02.31-PM.png"
        }
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{company.name}</h5>
        <p className="card-text">{company.summary}</p>
        <button className="btn btn-primary" onClick={onEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default SingleCompany;
