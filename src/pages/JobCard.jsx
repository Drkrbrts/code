import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
// import axios from "axios";
import "./JobCard.css";

class JobCard extends Component {
  state = {
    isReadMore: false,
  };

  readMore = (id, slug, summary) => {
    //    this.setState({ isReadMore: !isReadMore });
    //  name, skills, isReadMore : false --> true

    const moreText = document.getElementById(slug);
    const btnText = document.getElementById(id);
    if (moreText.style.display === "inline") {
      btnText.innerHTML = "More";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Less";
      moreText.style.display = "inline";
    }
  };

  render() {
    const { job } = this.props;
    console.log("job", job);
    if (!job) {
      return null;
    }
    function makeItem(skill, index) {
      return <li key={index}> {skill.name} </li>;
    }
    const items = job.skills && job.skills.map(makeItem);
    return (
      <div class="col-3 card-template">
        <div className="row">
          <div className="card border-0 hover-shadow">
            <img
              src={
                job.techCompany &&
                job.techCompany.images &&
                job.techCompany.images.map((item) => item.imageUrl)[0]
              }
              class="card-img-top"
              alt="..."
            />

            <div className="card-body text-center">
              <h2 className="card-title mb-0">{job.title}</h2>
              <div>
                <div className="card-text ">Description: {job.description}</div>
                <div className="card-text-job-2 ">Summary: {job.summary}</div>
                <div className="card-text-job-3 ">${job.pay}</div>
                <div className="card-text-job-slug ">{job.slug}</div>

                <div className="card-text-4">
                  <h6> Skills Needed </h6>

                  {/* <span id={job.slug} style={{ display: "none" }}>
                    {{ items }}
                  </span> */}

                  <span id={job.slug} style={{ display: "none" }}>
                    <ul class="skill-text" style={{ listStyle: "none" }}>
                      {items}
                    </ul>
                  </span>

                  <button
                    className="read-more btn-outline-secondary"
                    onClick={() => this.readMore(job.id, job.slug)}
                    id={job.id}
                  >
                    More
                  </button>
                </div>

                {/* <div class="card">
                  <h5>Friends</h5>:
                  <img
                    src={
                      job.techCompany &&
                      job.techCompany.friends.map(
                        (item) => item.primaryImage.imageUrl
                      )[0]
                    }
                    class="img-thumbnail"
                    alt="..."
                  />
                </div> */}

                <div class="company-name">
                  <h4 class="company-title">Company</h4>
                  <h6 class="company-text">
                    {job.techCompany && job.techCompany.name}
                  </h6>
                </div>

                {/* <li class="list-group-item list-group-item-primary">{items}</li> */}
                <div class="updateButton">
                  <NavLink to={`/UpdateJob/${job.id}`}>
                    <Button> Update Job </Button>
                  </NavLink>
                  &nbsp;
                </div>

                {/* job.techCompany &&
                job.techCompany.images.map((item) => item.imageUrl)[0] */}

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
      </div>
    );
  }
}

export default withRouter(JobCard);
