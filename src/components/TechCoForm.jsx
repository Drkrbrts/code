import React from "react";
import techcoService from "../services/techcoService";

class TechCoForm extends React.Component {
  state = {
    formData: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      images: "",
      urls: "",
      tags: "",
      friendIds: "",
    },
  };
  componentDidMount() {
    const { state: locState } = this.props.location;
    if (!locState || locState.type !== "EDIT_TECHCO") {
      return;
    }
    let cardData = locState.currentCard;
    const company = {
      name: cardData.name,
      profile: cardData.profile,
      summary: cardData.summary,
      headline: cardData.headline,
      slug: cardData.slug,
      statusId: cardData.statusId,
    };

    if (cardData.contactInformation !== null) {
      company.contactInformation = cardData.contactInformation.data;
      console.log(company.contactInformation);
    }

    if (cardData.images !== null) {
      const imagesArray = cardData.images;
      const images = [];
      for (let i = 0; imagesArray.length > i; i++) {
        const currentImages = imagesArray[i];
        images.push(currentImages.imageUrl);
      }
      console.log(images);
      company.images = images.join(",");
    }
    if (cardData.friends !== null) {
      const friendIdsArray = cardData.friends;
      const friendIds = [];
      for (let i = 0; friendIdsArray.length > i; i++) {
        const currentfriendIds = friendIdsArray[i];
        friendIds.push(currentfriendIds.id);
      }
      console.log(friendIds);
      company.friendIds = friendIds.join(",");
    }
    if (cardData.urls !== null) {
      const urlsArray = cardData.urls;
      const urls = [];
      for (let i = 0; urlsArray.length > i; i++) {
        const currentUrl = urlsArray[i];
        urls.push(currentUrl.url);
      }
      console.log(urls);
      company.urls = urls.join(",");
    }
    if (cardData.tags !== null) {
      const tagsArray = cardData.tags;
      const tags = [];
      for (let i = 0; tagsArray.length > i; i++) {
        const currentTags = tagsArray[i];
        tags.push(currentTags.tagName);
      }
      console.log(tags);
      company.tags = tags.join(",");
    }

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData = company;

      return { formData };
    });
  }

  onSubmitClicked = (e) => {
    e.preventDefault();

    const updateData = { ...this.state.formData };

    if (this.props.location.state.type === "EDIT_TECHCO") {
      updateData.id = this.props.location.state.currentCard.id;
    }

    if (this.state.formData.tags) {
      updateData.tags = this.state.formData.tags.split(",");
    }
    if (this.state.formData.friendIds) {
      updateData.friendIds = this.state.formData.friendIds.split(",");
    }
    if (this.state.formData.urls) {
      updateData.urls = this.state.formData.urls.split(",");
    }
    if (this.state.formData.images) {
      updateData.images = [
        { imageTypeId: 1, imageUrl: this.state.formData.images },
      ];
    }

    if (this.props.location.state.type !== "EDIT_TECHCO") {
      techcoService
        .add(updateData)
        .then(this.onAddSuccess)
        .catch(function (response) {
          console.log(response);
        });
    } else {
      techcoService
        .updateById(updateData)
        .then(this.onupdateByIdSuccess)
        .catch(this.onupdateByIdError);
    }
  };
  onupdateByIdSuccess = (response) => {
    console.log("updateSuccess", response);
  };
  onAddSuccess = (response) => {
    console.log("AddSuccess", response);
    this.props.history.push(`/techcocompanies/form?techCoId=${response.item}`, {
      type: "EDIT_TECHCO",
      id: response.item,
    });
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  render() {
    return (
      <>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <p
              className="
            d-flex
            align-items-center
            mb-3 mb-lg-0
            me-lg-auto
            text-dark text-decoration-none
          "
            >
              Add or Edit Tech Company
            </p>
          </div>
        </header>

        <form id="formTemplate">
          <div className="row g-3 align-items-center">
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputnameLabel" className="col-form-label">
                  Name
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="name"
                  id="inputname"
                  className="form-control"
                  name="name"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.name || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputBioLabel" className="col-form-label">
                  Profile
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="profile"
                  id="inputprofile"
                  className="form-control"
                  name="profile"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.profile || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSummaryLabel" className="col-form-label">
                  Summary
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Summary"
                  id="inputSummary"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.summary || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputHeadlineLabel" className="col-form-label">
                  Headline
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="headline"
                  id="inputheadline"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.headline || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label
                  htmlFor="inputContactInformationLabel"
                  className="col-form-label"
                >
                  Contact
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="contactInformation"
                  id="contactInformation"
                  className="form-control"
                  name="contactInformation"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.contactInformation || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSlugLabel" className="col-form-label">
                  Slug
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Slug"
                  id="inputSlug"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.slug || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputStatusLabel" className="col-form-label">
                  Status
                </label>
              </div>
              <div className="col-sm-5">
                <select
                  className="form-control"
                  name="statusId"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.statusId || ""}
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>NotSet</option>
                  <option>Deleted</option>
                  <option>Flagged</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputimagesLabel" className="col-form-label">
                  Images
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="images"
                  id="inputimages"
                  className="form-control"
                  name="images"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.images || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputUrlsLabel" className="col-form-label">
                  Urls
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="urls"
                  id="inputurls"
                  className="form-control"
                  name="urls"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.urls || ""}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputTagsLabel" className="col-form-label">
                  Tags
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="tags"
                  id="inputtags"
                  className="form-control"
                  name="tags"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.tags || ""}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputFriendIdsLabel" className="col-form-label">
                  Friend IDs
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="friendIds"
                  id="inputfriendIds"
                  className="form-control"
                  name="friendIds"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.friendIds || ""}
                ></input>
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary sumbitButton"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default TechCoForm;
