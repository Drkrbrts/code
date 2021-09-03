import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./AddJob.css";

class AddJobs extends React.Component {
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

  // changeSkill = (e) => {
  //   this.setState({ skill: e.target.value });
  // };

  // addSkill = () => {
  //   const newForm = { ...this.state.form };
  //   newForm.skills.push(this.state.skill);
  //   this.setState({ form: newForm });
  // };

  addJob = () => {
    var config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/jobs/",
      data: JSON.stringify({ ...this.state.form }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data.item);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  doFormSubmit = (e) => {
    e.preventDefault();

    console.log("newest form", this.state.form);
    if (this.state.form.title.length > 15) {
      toast.notify("Please write below 15 characters for the Title");
      // alert("Please write below 15 characters for the Title");

      // return null;
    } else {
      this.addJob()
        .then(() => {
          toast.success("Job Added Successfully");
          this.props.history.push("/jobs");
          console.log("job was added");
        })
        .catch(() => {
          console.warn("something went wrong");
        });
    }
  };

  // need to get all friends by person logged in

  render() {
    // console.log("jobbyjob", this.state.jobs);

    // const items = this.state.jobs.map((job) => (
    //   <div key={job.id} class="col-md-2 card-template">
    //     <section id="templateThree">
    //       <div class="row wd-25"></div>
    //       <div class="col-sm-8 mb-4">
    //         <div class="card border-0 shadow">
    //           <img
    //             // src={job.primaryImage.imageUrl}
    //             class="card-img-top"
    //             alt="..."
    //           />
    //           <div class="card-body text-center">
    //             <h5 class="card-title mb-0">{job.title}</h5>
    //             <div class="card-text text-black-50">{job.description}</div>
    //             <div class="card-text text-black-50">{job.summary}</div>
    //             <h5 class="card-text mb-0">{job.pay}</h5>
    //             <div class="card-text text-black-50">{job.skills}</div>
    //             <div>
    //               <div class="d-grid gap-2 d-md-block">
    //                 <button
    //                   class="btn btn-primary"
    //                   onClick={() => this.onItemClickedDelete(job.id)}
    //                   type="button"
    //                 >
    //                   Delete
    //                 </button>
    //                 <button
    //                   class="btn btn-primary"
    //                   onClick={this.onItemClickedUpdate}
    //                   type="button"
    //                 >
    //                   Update
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // ));
    function makeItem(skill, index) {
      return <li key={index}> {skill}</li>;
    }
    const items = this.state.form.skills.map(makeItem);
    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Create Your Job's List</h2>
            <p class="hint-text"></p>
            <div class="form-group">
              <label htmlfor="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                required="required"
                value={this.state.form.title}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlfor="description" class="form-label">
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
            <div className="form-group">
              <label htmlforfor="summary" class="form-label">
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
            <div className="form-group">
              <label htmlfor="headline" class="form-label">
                pay
              </label>
              <input
                type="text"
                className="form-control"
                id="pay"
                name="pay"
                required="required"
                value={this.state.form.pay}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlfor="slug" class="form-label">
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                required="required"
                value={this.state.form.slug}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlfor="status id" class="form-label">
                Status ID
              </label>
              <input
                type="text"
                className="form-control"
                id="statusId"
                name="statusId"
                value={this.state.form.statusId}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlfor="techCompanyId" class="form-label">
                Company Id
              </label>
              <input
                type="text"
                className="form-control"
                name="techCompanyId"
                id="techCompanyId"
                placeholder="Company Id"
                required="required"
                value={this.state.form.techCompanyId}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlfor="techCompanyId" class="form-label">
                Skills
              </label>
              <ul>{items}</ul>
              <input
                type="text"
                className="form-control"
                name="skills"
                id="skills"
                placeholder="New Skill"
                value={this.state.skill}
                onChange={this.changeSkill}
              />
              <div className="d-grid gap-2 d-md-block">
                <button
                  type="button"
                  id="add-skill-button"
                  className="btn btn-primary "
                  onClick={this.addSkill}
                >
                  Add Skill
                </button>
                <button
                  id="add-Job-button"
                  type="submit"
                  className="btn btn-secondary btn-lg"
                >
                  Add Job
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
export default withRouter(AddJobs);
