import React from "react";

class JobCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "20rem", padding: "20px" }}>
          <img
            src={this.props.imageUrl}
            className="card-img-top center"
            alt="..."
          ></img>
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">{this.props.pay}</h5>
            <p className="card-text">{this.props.title}</p>
            <p className="card-text">{this.props.description}</p>
          </div>
          <div className="row">
            <button
              className="btn btn-warning"
              style={{ width: "92%", margin: "auto" }}
              onClick={this.props.edit}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              style={{ width: "92%", margin: "auto" }}
              onClick={this.props.delete}
            >
              Delete
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary"
              style={{ width: "100%", margin: "auto" }}
              onClick={this.props.viewMore}
            >
              View More
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobCard;
