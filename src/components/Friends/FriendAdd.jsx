import React from "react";
import * as userServices from "../../services/userServices";
import { toast } from "react-toastify";

toast.configure();
class FriendAdd extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      skills: "",
      primaryImage: "",
    },
  };
  componentDidMount(props) {
    let friId = this.props.match.params.friendId;
    console.log("componentDidMount", { friId });
    if (this.props.location.state) {
      this.setState((prevState) => {
        let primaryImage = this.props.location.state.primaryImage.imageUrl;
        let formData = { ...this.props.location.state };
        formData.primaryImage = primaryImage;
        if (formData.skills === null) {
          formData.skills = "";
        }
        return { formData };
      });
    }
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };
  onSubmitClicked = (e) => {
    e.preventDefault();
    console.log("firing", this.state.formData);
    var formData = { ...this.state.formData };
    formData.skills = formData.skills.split(",");
    console.log("firing", formData);
    if (formData.id > 0) {
      userServices
        .updateFriends(this.state.formData)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    } else {
      userServices
        .addFriends(this.state.formData)
        .then(this.onAddSuccess)
        .catch(this.onAddError);
    }
  };

  onAddSuccess = (response) => {
    toast.success("successful");
  };
  onAddError = (err) => {
    toast.error("Fail");
  };
  onUpdateSuccess = (response) => {
    console.log(response);
  };
  onUpdateError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <main role="main">
        <h1 className="display-7 fw-bold text-center">Add or Edit Friend</h1>
        <div className="container border border-warning border-3">
          <div className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-lg">
              <form>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.title}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="bio"
                    type="text"
                    className="form-control"
                    placeholder="Bio"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.bio}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="summary"
                    type="text"
                    className="form-control"
                    placeholder="Summary"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.summary}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="headline"
                    type="text"
                    className="form-control"
                    placeholder="Headline"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.headline}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="slug"
                    type="text"
                    className="form-control"
                    placeholder="Slugg"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.slug}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="statusId"
                    type="text"
                    className="form-control"
                    placeholder="Status"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.statusId}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="skills"
                    type="text"
                    className="form-control"
                    placeholder="Skills"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.skills}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" />
                  <input
                    name="primaryImage"
                    type="text"
                    className="form-control"
                    placeholder="Primary Image"
                    onChange={this.onFormFieldChange}
                    value={this.state.formData.primaryImage}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmitClicked}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default FriendAdd;
