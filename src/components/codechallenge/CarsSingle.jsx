import React from "react";

class SingleCar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card col-md-3 m-1">
          <div className="card-body">
            <h5 className="card-title">{this.props.data.make}</h5>
            <h5 className="card-text">{this.props.data.model}</h5>
            <h5 className="card-text">{this.props.data.year}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleCar;
