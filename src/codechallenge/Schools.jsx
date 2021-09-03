import React, { Component } from "react";
import SchoolCard from "./SchoolCard";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Schools extends Component {
  state = {
    schools: [],
  };

  getSchools = () => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/entities/Schools/`,

      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("item data", response.data.items);
        this.setState({
          schools: response.data.items,
        });
      })
      .catch((response) => {
        console.warn(response);
        this.setState({
          schools: [],
        });
      });
  };

  deleteSchool = (id) => {
    var config = {
      method: "DELETE",
      url: "https://api.remotebootcamp.dev/api/entities/Schools/" + id,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  componentDidMount() {
    this.getSchools();
  }

  render() {
    return (
      <div className="container">
        <div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="d-flex">
              &nbsp;
              <div className="ml-auto">
                <NavLink to="/AddSchool">
                  <Button className="btn-light btn-outline-secondary">
                    Add School
                  </Button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          {this.state.schools.map((school) => (
            <SchoolCard
              key={school.id}
              school={school}
              deleteSchool={this.deleteSchool}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Schools);
