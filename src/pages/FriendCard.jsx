import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import "./FriendCard.css";

class FriendCard extends Component {
  render() {
    const { friend } = this.props;

    if (!friend) {
      return null;
    }

    return (
      <div class="col-3 card-template">
        <div className="row">
          <div className="card-2 border-0 shadow">
            <img
              src={friend.primaryImage.imageUrl}
              class="card-img-top-1"
              alt="..."
            />
            <div className="card-body text-center">
              <h2 className="card-title-1 mb-0">{friend.title}</h2>
              <div>
                <div className="card-text ">Bio: {friend.bio}</div>
                <div className="card-text-2 ">Summary: {friend.summary}</div>
                <div className="card-text-3 ">{friend.headline}</div>
                <div className="card-text-slug ">{friend.slug}</div>
                <NavLink
                  className="btn btn-outline-secondary"
                  to={`/Updatefriend/${friend.id}`}
                >
                  <Button> Update Friend </Button>
                </NavLink>
                &nbsp;
                <button
                  className="btn-light btn-outline-secondary delete-button"
                  onClick={() => this.props.deleteFriend(friend.id)}
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

export default withRouter(FriendCard);
