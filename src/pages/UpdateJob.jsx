import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./UpdateJob.css";

class UpdateJob extends React.Component {
  state = {
    form: {
      id: 0,
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: "",
      skills: [],
    },
    skill: "",
  };

  handleChange = (e) => {
    const newForm = { ...this.state.form };
    newForm[e.target.name] = e.target.value;

    this.setState({ form: newForm });
  };

  changeSkill = (e) => {
    this.setState({ skill: e.target.value });
  };

  addSkill = () => {
    const newForm = { ...this.state.form };
    newForm.skills.push(this.state.skill);
    this.setState({ form: newForm });
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state.form);
    this.updateJob()
      .then(() => {
        toast.success("updated Successfully");
        this.props.history.push("/jobs");
        console.log("job was updated");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  updateJob = () => {
    var config = {
      method: "PUT",
      url: `https://api.remotebootcamp.dev/api/jobs/${this.state.form.id}`,
      data: JSON.stringify({ ...this.state.form }),
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

  fetchJobById = (id) => {
    var config = {
      method: "GET",
      url: `https://api.remotebootcamp.dev/api/jobs/${id}`,
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log(" job data", response.data.item);
        const jobData = response.data.item;
        const skillNames = jobData.skills.map((skill) => skill.name);
        console.log(skillNames, "skillNames");
        const form = {
          id: jobData.id,
          title: jobData.title,
          description: jobData.description,
          summary: jobData.summary,
          pay: jobData.pay,
          slug: jobData.slug,
          statusId: jobData.statusId,
          techCompanyId: jobData.techCompanyId,
          skills: skillNames,
        };
        this.setState({ form });
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  componentDidMount() {
    // fetch the particular friend
    const JobId = this.props.match.params.id;
    this.fetchJobById(JobId);

    // set the data of that in the state
  }

  render() {
    console.log("state", this.state);

    function makeItem(skill, index) {
      return <li key={index}> {skill}</li>;
    }
    const items = this.state.form.skills.map(makeItem);

    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Update Your Job</h2>

            <p class="hint-text"></p>
            <div class="form-group">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                required="required"
                value={this.state.form.title}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="description" class="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-description-1"
                id="description"
                name="description"
                required="required"
                value={this.state.form.description}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="summary" class="form-label">
                Summary
              </label>
              <input
                type="text"
                className="form-summary-1"
                id="summary"
                name="summary"
                required="required"
                value={this.state.form.summary}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="headline" class="form-label">
                pay
              </label>
              <input
                type="text"
                class="form-control"
                id="pay"
                name="pay"
                required="required"
                value={this.state.form.pay}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="slug" class="form-label">
                Slug
              </label>
              <input
                type="text"
                class="form-control"
                id="slug"
                name="slug"
                required="required"
                value={this.state.form.slug}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="status id" class="form-label">
                Status ID
              </label>
              <input
                type="text"
                class="form-control"
                id="statusId"
                name="statusId"
                value={this.state.form.statusId}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="techCompanyId" class="form-label">
                Company Id
              </label>
              <input
                type="text"
                class="form-control"
                name="techCompanyId"
                id="techCompanyId"
                placeholder="Company Id"
                required="required"
                value={this.state.form.techCompanyId}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="techCompanyId" class="form-label">
                Skills
              </label>
              <ul>{items}</ul>
              <input
                type="text"
                class="form-control"
                name="skills"
                id="skills"
                placeholder="New Skill"
                value={this.state.skill}
                onChange={this.changeSkill}
              />
              <button
                id="updateJob-button"
                type="submit"
                class="btn btn-primary "
                // onClick={this.onItemClickedUpdate}
              >
                Update Job
              </button>
              &nbsp;
              <div class="d-grid gap-2 d-md-block">
                <button
                  type="button"
                  id="add-skill-button"
                  class="btn btn-primary "
                  onClick={this.addSkill}
                >
                  Add Skill
                </button>
              </div>
              &nbsp;
            </div>
          </form>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(UpdateJob);
