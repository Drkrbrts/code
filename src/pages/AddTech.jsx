import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./AddTech.css";

class AddTech extends React.Component {
  state = {
    form: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "NotSet",
      images: [],
      urls: [],
      tags: [],
      friendIds: [],
    },
    imageUrl: "",
    imageTypeId: 1,
    url: "",
    tag: "",
    friendId: "",
  };

  handleChange = (e) => {
    const newForm = { ...this.state.form };
    newForm[e.target.name] = e.target.value;
    this.setState({ form: newForm });
  };

  handleImageUrl = (e) => {
    console.log(e.target.value);

    this.setState({ imageUrl: e.target.value });

    console.log(this.state.imageUrl);
  };

  insertImage = (e) => {
    this.setState({ imageUrl: e.target.value });
    console.log(e.target.value);
  };

  addImage = () => {
    const newForm = { ...this.state.form };
    newForm.images.push({ imageUrl: this.state.imageUrl, imageTypeId: 1 });
    console.log(newForm);
    this.setState({ form: newForm });
  };

  insertUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  addUrl = () => {
    const newForm = { ...this.state.form };
    newForm.urls.push(this.state.url);
    this.setState({ form: newForm });
  };

  insertTag = (e) => {
    this.setState({ tag: e.target.value });
  };

  addTag = () => {
    const newForm = { ...this.state.form };
    newForm.tags.push(this.state.tag);
    this.setState({ form: newForm });
  };

  insertFriendId = (e) => {
    this.setState({ friendId: e.target.value });
  };

  addFriendId = () => {
    const newForm = { ...this.state.form };
    newForm.friendIds.push(this.state.friendId);
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

  addCompany = () => {
    var config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/techcompanies",
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
    if (this.state.form.name.length > 15) {
      // toast.notify("Please write below 15 characters for the Title");
      alert("Please write below 15 characters for the Title");

      // return null;
    } else {
      this.addCompany()
        .then(() => {
          toast.success("Job Added Successfully");
          // this.props.history.push("/tech");
          console.log("job was added");
        })
        .catch(() => {
          console.warn("something went wrong");
        });
    }
  };

  // need to get all friends by person logged in

  render() {
    // function makeImage(imageUrl, index) {
    //   return <li key={index}> {imageUrl} </li>;
    // }
    // const itemsImage = this.state.form.images.map(makeImage);

    function makeUrl(url, index1) {
      return <li key={index1}> {url}</li>;
    }
    const itemsUrl = this.state.form.urls.map(makeUrl);

    function makeTag(tag, index2) {
      return <li key={index2}> {tag}</li>;
    }
    const itemsTag = this.state.form.tags.map(makeTag);

    function makeFriendId(friendId, index3) {
      return <li key={index3}> {friendId}</li>;
    }
    const itemsFriendId = this.state.form.friendIds.map(makeFriendId);

    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Create Your Company </h2>
            <p class="hint-text"></p>
            <div class="form-group">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required="required"
                value={this.state.form.name}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="profile" class="form-label">
                Profile
              </label>
              <input
                type="text"
                className="form-description-1"
                id="profile"
                name="profile"
                required="required"
                value={this.state.form.profile}
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
                Headline
              </label>
              <input
                type="text"
                class="form-control"
                id="headline"
                name="headline"
                required="required"
                value={this.state.form.headline}
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group">
              <label for="contact informatiopn" class="form-label">
                Contact Information
              </label>
              <input
                type="text"
                class="form-control"
                id="contactInformation"
                name="contactInformation"
                required="required"
                value={this.state.form.contactInformation}
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
                // required="required"
                value={this.state.form.slug}
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group">
              <label for="statusId" class="form-label">
                Company Id
              </label>
              <input
                type="text"
                class="form-control"
                name="statusId"
                id="statusId"
                placeholder="Status Id"
                required="required"
                value={this.state.form.techCompanyId}
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group">
              <label for="images" class="form-label">
                Images
              </label>
              {/* {itemsImage} */}
              {this.state.form.images.map((item) => (
                <div>{item.imageUrl}</div>
              ))}
              <input
                type="url"
                class="form-control"
                name="imageUrl"
                id="imageUrl"
                placeholder="Image Url"
                required="required"
                value={this.state.imageUrl}
                onChange={this.insertImage}
              />
              <button
                type="button"
                id="add-url-button"
                class="btn btn-primary"
                disabled={this.state.form.images.length < 1 ? false : true}
                onClick={this.addImage}
              >
                Add Image
              </button>
            </div>

            <div class="form-group">
              <label for="Urls" class="form-label">
                Urls
              </label>
              <ul>{itemsUrl}</ul>
              <input
                type="text"
                class="form-control"
                name="urls"
                id="urls"
                placeholder="Place Urls"
                value={this.state.url}
                onChange={this.insertUrl}
              />

              <button
                type="button"
                id="add-url-button"
                class="btn btn-primary "
                onClick={this.addUrl}
              >
                Add Url
              </button>
            </div>

            <div class="form-group">
              <label for="tags" class="form-label">
                Tags
              </label>
              <ul>{itemsTag}</ul>
              <input
                type="text"
                class="form-control"
                name="tags"
                id="tags"
                placeholder="Insert Tags"
                value={this.state.tag}
                onChange={this.insertTag}
              />

              <button
                type="button"
                id="add-tag-button"
                class="btn btn-primary "
                onClick={this.addTag}
              >
                Add Tag
              </button>
            </div>

            <div class="form-group">
              <label for="FriendIds" class="form-label">
                Friend
              </label>
              <ul>{itemsFriendId}</ul>
              <input
                type="text"
                class="form-control"
                name="tags"
                id="tags"
                placeholder="Insert Tags"
                value={this.state.friendId}
                onChange={this.insertFriendId}
              />

              <button
                type="button"
                id="add-friendId-button"
                class="btn btn-primary "
                onClick={this.addFriendId}
              >
                Add Friend Id
              </button>
            </div>

            <div class="d-grid gap-2 d-md-block">
              <button
                id="add-Job-button"
                type="submit"
                class="btn btn-secondary btn-lg"
              >
                Add Company
              </button>
            </div>
          </form>
        </div>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(AddTech);
