import React from "react";
import JobsForm from "../components/JobsForm";
import { addJob, updateJob, getJobById } from "../services/jobsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class JobsFormContainer extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: "",
      skills: "",
    },
  };

  componentDidMount() {
    //use to import edit data by checking truthy value of route param
    let isSearchEmptyString = this.props.location.search === "";
    console.log("componentDidMount firing", isSearchEmptyString);

    if (!isSearchEmptyString) {
      let path = this.props.location.search.split("=");
      let jobId = path[1];
      console.log("componentDidMount if firing", jobId);
      getJobById(jobId).then(this.onGetJobSuccess).catch(this.onGetJobError);
    }
  }

  onGetJobSuccess = (response) => {
    let jobToUpdate = response.data.item;
    console.log("onGetJobSuccess firing", { jobToUpdate });
    const job = {};
    job.id = jobToUpdate.id;
    job.title = jobToUpdate.title;
    job.description = jobToUpdate.description;
    job.summary = jobToUpdate.summary;
    job.pay = jobToUpdate.pay;
    job.slug = jobToUpdate.slug;
    job.techCompanyId = jobToUpdate.techCompany.id;
    job.statusId = jobToUpdate.statusId;

    const skillsArray = jobToUpdate.skills;
    const skills = [];
    for (let i = 0; skillsArray.length > i; i++) {
      const currentSkill = skillsArray[i];
      skills.push(currentSkill.name);
    }
    job.skills = skills.join(",");
    console.log("this is the new job", job);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData = job;
      return { formData };
    });
  };

  onGetJobError = (err) => {
    console.log("onGetJobError firing", err);
  };

  onFieldChangeRequested = (currentTarget) => {
    // console.log("onFieldChangeRequested", currentTarget.value);
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSaveRequested = () => {
    console.log("onSaveRequsted");
    let skills = this.state.formData.skills.split(",");
    let IdToNumber = parseInt(this.state.formData.techCompanyId);
    let formData = { ...this.state.formData };
    formData.skills = skills;
    formData.techCompanyId = IdToNumber;
    if (this.state.formData.id) {
      console.log("onSaveRequested if firing", this.state.formData);
      updateJob(formData).then(this.onSaveSuccess).catch(this.onSaveError);
    } else {
      addJob(formData).then(this.onSaveSuccess).catch(this.onSaveError);
    }
  };

  onSaveSuccess = (response) => {
    console.log("onSaveSuccess firing", response);

    if (response.data.item) {
      let newId = response.data.item;
      console.log("if firing", newId);
      let notify = () =>
        toast.success("Job post successfully added", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      notify();
      //setState
      this.setState((prevState) => {
        let formData = { ...prevState.formData };
        formData.id = newId;
        return { formData };
      });
    } else {
      let notify = () =>
        toast.success("Job post successfully updated", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      notify();
    }
  };

  onSaveError = (err) => {
    console.log("onSaveError firing", err);
    let notify = () =>
      toast.error(
        "There was an error saving your job post. Please try again.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  //was this the most efficient way to reset state?
  onCancelRequested = () => {
    console.log("onCancelRequested firing");
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData.title = "";
      formData.description = "";
      formData.summary = "";
      formData.pay = "";
      formData.slug = "";
      formData.statusId = "";
      formData.techCompanyId = "";
      formData.skills = "";

      return { formData };
    });
  };

  render() {
    return (
      <>
        <div className="row flex py-2 border-bottom bg-light">
          <div className="col">
            <h2 className="px-2">
              {this.state.formData.id ? "Edit" : "Add"} Job
            </h2>
          </div>
        </div>
        <div className="container flex">
          <div className="row justify-content-center">
            <div className="col-5">
              <JobsForm
                formData={this.state.formData}
                onChangeRequested={this.onFieldChangeRequested}
                onSaveRequested={this.onSaveRequested}
                onCancelRequested={this.onCancelRequested}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default JobsFormContainer;
