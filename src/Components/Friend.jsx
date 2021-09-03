import React from "react";

class Friend extends React.Component {
  state = {};

  render() {
    return (
      <div className="col-md-4 mb-3 mt-1">
        <div className="card">
          <img
            className="card-img-top rounded image-url"
            src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/01/dwight-schrute-office-featured.jpg"
            alt="User"
          />
          <div className="card-body">
            <h5 className="card-title">Dwight Schrute</h5>
            <p className="card-text card-summary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button className="btn btn-primary edit-button">Edit</button>
            <button className="btn btn-danger delete-button">delete</button>
          </div>
          <div className="hiddenPayload d-none">
            <p className="card-bio">Head of sales</p>
            <p className="card-headline">regional manager</p>
            <p className="card-slug">salesman.com</p>
            <p className="card-status"></p>
            <p className="card-skills"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Friend;
