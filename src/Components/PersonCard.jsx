import React from "react";

const PersonCard = (props) => {
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl5r-XOj4wXrKfT78BqjM-54d1QLb3c1Zhg&usqp=CAU"
        alt="..."
        onClick={props.clickingOnSomething}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
