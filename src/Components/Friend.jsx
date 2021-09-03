import React from "react";

class Friend extends React.Component {
  state = {};

  render() {
    return (
      <div className="col-md-4 mb-3 mt-1">
        <div className="card">
          <img
            className="card-img-top rounded image-url"
            src={this.props.imageUrl}
            alt="User"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{this.props.title}</h5>
            <p className="card-text card-summary">{this.props.summary}</p>
            <button
              onClick={() => this.props.edit(this.props.id)}
              className="btn btn-primary edit-button m-2"
            >
              Edit
            </button>
            <button
              onClick={() => this.props.delete(this.props.id)}
              className="btn btn-danger delete-button"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Friend;
