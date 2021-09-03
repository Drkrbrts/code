import React from "react";

class Friend extends React.Component {
  onDeleteClick = (id) => {
    console.log(id);
    this.props.onClick(this.props.theFriend);
  };
  onEditClick = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div className="container col-md-2">
        <div className="friendsCard">
          <img
            src={this.props.theFriend.primaryImage.imageUrl}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h2 className="card-title">{this.props.theFriend.title}</h2>
            <p className="card-text">{this.props.theFriend.bio}</p>

            <div className="d-grid gap-4 d-md-block">
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.onDeleteClick}
              >
                Delete
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.onEditClick}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friend;
