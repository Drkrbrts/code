import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
// import axios from "axios";
import "./TechCard.css";

class TechCard extends Component {
  render() {
    const { company } = this.props;
    console.log("cosole company", company);
    if (!company) {
      return null;
    }

    return (
      <div class="col-3 card-template">
        <div className="row">
          <div className="card-tech border-0 shadow">
            <div>
              {company.images &&
                company.images.map((item) => {
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
              <h2 className="card-title-tech mb-0">{company.name}</h2>
              <div>
                <div className="card-text-tech-profile ">
                  Profile: {company.profile}
                </div>

                <div className="card-text-tech-summary ">
                  Summary: {company.summary}
                </div>
                {/* <div className="card-text-tech-headline ">
                  {company.headline}
                </div> */}
                {/* <div className="card-text-tech-contact ">
                  Contact:{company.contactInformation} 
                </div> */}

                <div className="card-text-tech-slug">
                  {company.slug}
                  <h4> </h4>
                </div>

                {/* <div className="card-text-tech-tags">
                  {company.tag}
                  <h4> </h4>
                </div> */}

                <div class="card-container-avatar ">
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

                {/* <span id={company.url} style={{ display: "none" }}>
                    {itemsUrl}
                  </span>
                </div>

                <div className="card-text-tech-tags">
                  <h4> Tags </h4>

                  <span id={company.url} style={{ display: "none" }}>
                    {itemsTag}
                  </span>
                </div>

                <div className="card-text-tech-friends">
                  <h4> Urls </h4>

                  <span id={company.friendIds} style={{ display: "none" }}>
                    {itemsFriendId}
                  </span> */}
              </div>

              {/* <button
                    onClick={() => this.readMore(company.pay, company.slug)}
                    id={company.pay}
                  >
                    Read more
                  </button> */}

              {/* <li class="list-group-item list-group-item-primary">{items}</li> */}
              <div class="updateCompany">
                <NavLink to={`/UpdateTech/${company.id}`}>
                  <Button> Update Tech </Button>
                </NavLink>
                &nbsp;
              </div>
              {/* <button
                  className="btn btn-primary"
                  onClick={() => this.props.deleteJob(job.id)}
                  type="button"
                >
                  Delete
                </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TechCard);
