import React from "react";

const PersonCard = (props) => {
  console.log(props);
  const deletePerson = () => {
    props.handleDelete(props.person.id);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl5r-XOj4wXrKfT78BqjM-54d1QLb3c1Zhg&usqp=CAU"
        alt="..."
        onClick={props.clickingOnSomething}
      />
      <div className="card-body">
        <h5 className="card-title">{`${props.person.first_name} ${props.person.last_name} `}</h5>
        <button
          type="button"
          onClick={deletePerson}
          className="btn btn-sm btn-danger"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
