import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import "./SchoolCard.css";

class SchoolCard extends Component {
  render() {
    const { school } = this.props;

    if (!school) {
      return null;
    }

    return (
      <div class="col-3 card-template">
        <div className="row">
          <div className="card-2 border-0 shadow">
            {/* <img
              src={friend.primaryImage.imageUrl}
              class="card-img-top-1"
              alt="..."
            /> */}
            <div className="card-body text-center">
              <h2 className="card-title-1 mb-0">{school.name}</h2>
              <div>
                <div className="card-text ">Location: {school.location}</div>
                <div className="card-text-2 ">Level: {school.level}</div>
                <NavLink
                  className="btn btn-outline-secondary"
                  to={`/UpdateSchool/${school.id}`}
                >
                  <Button> Update School </Button>
                </NavLink>
                &nbsp;
                <button
                  className="btn-light btn-outline-secondary delete-button"
                  onClick={() => this.props.deleteSchool(school.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SchoolCard);
