import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
// import axios from "axios";
import "./EventCard.css";

class EventCard extends Component {
  render() {
    const { event } = this.props;
    console.log("cosole company", event);
    if (!event) {
      return null;
    }

    return (
      <div class="col-3 card-template">
        <div className="row">
          <div className="card-tech border-0 shadow">
            <div>
              {event.images &&
                event.images.map((item) => {
                  return (
                    <span key={Math.random()}>
                      <img
                        className="image-tech"
                        src={item.imageUrl}
                        // style={{ width: 50, height: 50, borderRadius: 10 }}
                        alt="tech"
                      />
                    </span>
                  );
                })}
            </div>
            <div className="card-body text-center">
              <h2 className="card-title-tech mb-0">{event.name}</h2>
              <div>
                <div className="card-text-tech-profile ">
                  Profile: {event.description}
                </div>

                <div className="card-text-tech-summary ">
                  Summary: {event.summary}
                </div>

                <div className="card-text-tech-slug">
                  {event.slug}
                  <h4> </h4>
                </div>

                {/* <div class="card-container-avatar ">
                  <h3 className="friend-title"> Friends </h3>
                  {company.friends &&
                    company.friends.map((item) => (
                      <span key={Math.random()}>
                        <img
                          className="avatar-image"
                          // style={{ width: 50, height: 50, borderRadius: 100 }}
                          src={item.primaryImage.imageUrl}
                          alt="imgfriends"
                        />
                      </span>
                    ))}
                </div>
                <div className="avatar-dots">...</div>
                        */}
              </div>

              <div class="updateEvent">
                <NavLink to={`/UpdateEvent/${event.id}`}>
                  <Button> Update Update </Button>
                </NavLink>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EventCard);
