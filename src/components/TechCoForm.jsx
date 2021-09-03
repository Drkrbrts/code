import React from "react";
import { withRouter } from "react-router-dom";
import techCoService from "../services/techco";

class TechCoForm extends React.Component {
  state = {
    techCoForm: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      imageUrl: "",
      urls: [],
      tags: [],
      friendIds: [],
    },
  };

  componentDidMount() {
    if (this.props.location.state) {
      let locState = this.props.location.state;
      if (locState.type === "ADD_TO_JOBFORM") {
        this.setState({ techCoForm: locState.payload });
      }
    }
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let techCoForm = { ...this.state.techCoForm };
      techCoForm[inputName] = newValue;

      return { techCoForm };
    });
  };

  addBtnClick = () => {
    let payload = {
      name: this.state.techCoForm.name,
      profile: this.state.techCoForm.profile,
      summary: this.state.techCoForm.summary,
      headline: this.state.techCoForm.headline,
      contactInformation: this.state.techCoForm.contactInformation,
      slug: this.state.techCoForm.slug,
      statusId: "active",
      images: [
        {
          imageTypeId: 1,
          imageUrl: this.state.techCoForm.imageUrl,
        },
      ],
      urls: [this.state.techCoForm.urls],
      tags: [this.state.techCoForm.tags],
      friendIds: [this.state.techCoForm.friendIds],
    };

    techCoService.add(payload).then(this.addSuccess).catch(this.addError);
  };

  addSuccess = (response) => {
    let payload = {
      name: this.state.techCoForm.name,
      profile: this.state.techCoForm.profile,
      summary: this.state.techCoForm.summary,
      headline: this.state.techCoForm.headline,
      contactInformation: this.state.techCoForm.contactInformation,
      slug: this.state.techCoForm.slug,
      statusId: "active",
      images: [
        {
          imageTypeId: 1,
          imageUrl: this.state.techCoForm.imageUrl,
        },
      ],
      urls: [this.state.techCoForm.urls],
      tags: [this.state.techCoForm.tags],
      friendIds: [this.state.techCoForm.friendIds],
    };

    this.props.history.push("/techco/" + response.data.item + "/edit", {
      type: "ADD_TO_TECHCOFORM",
      payload: payload,
    });
  };

  addError = (response) => {
    console.error(response);
  };

  print = (item) => {
    return " " + item.imageUrl;
  };

  updateBtnClicked = () => {
    let id = this.props.match.params.id;
    let payload = {
      name: this.state.techCoForm.name,
      profile: this.state.techCoForm.profile,
      summary: this.state.techCoForm.summary,
      headline: this.state.techCoForm.headline,
      contactInformation: this.state.techCoForm.contactInformation,
      slug: this.state.techCoForm.slug,
      statusId: "active",
      images: [
        {
          imageTypeId: 1,
          imageUrl: this.state.techCoForm.imageUrl,
        },
      ],
      urls: [this.state.techCoForm.urls],
      tags: [this.state.techCoForm.tags],
      friendIds: [this.state.techCoForm.friendIds],
    };
    techCoService
      .edit(id, payload)
      .then(this.editSuccess)
      .catch(this.editError);
  };

  editSuccess = () => {
    this.props.history.push("/techco");
  };

  editError = (response) => {
    console.error(response);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="title">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.name}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="profile">Profile</label>
            <input
              type="text"
              className="form-control"
              id="profile"
              name="profile"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.profile}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              className="form-control"
              id="summary"
              name="summary"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.summary}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="form-control"
              id="headline"
              name="headline"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.headline}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="contactInformation">Contact Info</label>
            <input
              type="text"
              className="form-control"
              id="contactInformation"
              name="contactInformation"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.contactInformation}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.slug}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.imageUrl}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="urls">URL</label>
            <input
              type="url"
              className="form-control"
              id="urls"
              name="urls"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.url}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              className="form-control"
              id="tags"
              name="tags"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.tags}
            />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="friendIds">Friend Id</label>
            <input
              type="number"
              className="form-control"
              id="friendIds"
              name="friendIds"
              onChange={this.onFormFieldChange}
              value={this.state.techCoForm.friendIds}
            />
          </div>
        </form>
        <button
          type="button"
          className="btn btn-primary"
          onClick={
            this.props.match.params?.id
              ? this.updateBtnClicked
              : this.addBtnClick
          }
        >
          {this.props.match.params.id ? "Update" : "Submit"}
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(TechCoForm);
