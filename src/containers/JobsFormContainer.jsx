import React from "react";
import JobsForm from "../components/JobsForm";
import { addJob, updateJob } from "../services/jobsService";
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
    console.log("componentDidMount firing");
    //use to import edit data by checking truthy value of route param
  }

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
