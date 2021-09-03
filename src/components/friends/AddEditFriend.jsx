import React from 'react'
import "../../css/add-edit-friend.css"
import { toast } from 'react-toastify';
import SecondNav from "../SecondNav"
import {createFriend, editFriend, getFriendById} from '../../services/friendServices'

class AddEditFriend extends React.Component {

  state = {
    formData: {
      id: "",
      bio: "",
      title : "",
      summary: "",
      headline: "",
      entityTypeId: "",
      statusId: "Active",
      slug: "",
      skills: "",
      primaryImage: {
        id: "",
        entityId: "",
        imageTypeId: "",
        imageURL: "",
      },
      dateCreated: "",
      dateModified: Date,
    }
  }

  componentDidMount = () => {
    this.wasPassedID(this.props.location)
  }

  wasPassedID = (hasState) => {
    if(hasState.state !== undefined) {
      let passedId = this.props.location.state.formData.id
      getFriendById(passedId)
        .then(this.onGetFriendByIdSuccess)
        .catch(this.onGetFriendByIdError)
    }
  }

  // @TODO populate the form fields when an ID is passed
  populateInputs = () => {
    let title  = this.state.formData.title
    let summary  = this.state.formData.summary
    return {summary, title}
  }

  onClickHandler = (e) => {
    e.preventDefault()
    // createFriend(this.state.formData)
    // .then(this.onCreateFriendSuccess)
    // .catch(this.onCreateFriendError);

    // editFriend(this.state.formData)
    // .then(this.onEditFriendSuccess)
    // .catch(this.onEditFriendError);
  }

  onGetFriendByIdSuccess = (res) => {
    console.log("onGetFriendByIdSuccess")
    let formData = res.data.item
    this.setState({formData})

  }

  fillFormInputs = () => {

  }

  onGetFriendByIdError = (err) => {
    console.log("onGetFriendByIdError")
    console.log(err)
  }

  onCreateFriendSuccess = (res) => {
    console.log("onCreateFriendSuccess");
    console.log(res);
    toast.success("Friend Added")
    // Redirect to the friends page
  }

  onCreateFriendError = (err) => {
    console.log("onCreateFriendError");
    console.log(err);
    toast.error("Error. Check your details and try again.")
    // Display error toast
  }

  onEditFriendSuccess = (res) => {
    console.log("onEditFriendSuccess");
    console.log(res);
    toast.success("Friend Added")
    // Display successful toast
    // Redirect to the friends page
  }

  onEditFriendError = (err) => {
    console.log("onEditFriendError");
    console.log(err);
    toast.error("Error. Check your details and try again.")
    // Display error toast
  }

  onFormFieldChange = (e) => {
    this.setState((state, props) => {
      let presState = {...this.state};
      
      let newState = {
        formData: {
          id: presState.formData.id,
          bio: presState.formData.bio,
          title : presState.formData.title,
          summary: presState.formData.summary,
          headline: presState.formData.headline,
          entityTypeId: presState.formData.entityTypeId,
          statusId: presState.formData.statusId,
          slug: presState.formData.slug,
          skills: presState.formData.skills,
          primaryImage: {
            id: presState.formData.primaryImage.id,
            entityId: presState.formData.primaryImage.entityId,
            imageTypeId: presState.formData.primaryImage.imageTypeId,
            imageURL: presState.formData.primaryImage.imageURL,
          },
          dateCreated: presState.formData.dateCreated,
          dateModified: Date,
        }
      }

      let isTitle = e.target.id === "title"
      let isBio = e.target.id === "bio"
      let isSummary = e.target.id === "summary"
      let isHeadline = e.target.id === "headline"
      let isSlug = e.target.id === "slug"
      let isPrimaryImage = e.target.id === "primaryImage"

      let inputValue = e.target.value;

      if(isTitle) {
        newState.formData.title = inputValue
      }

      if(isBio) {
        newState.formData.bio = inputValue
      }

      if(isSummary) {
        newState.formData.summary = inputValue
      }

      if(isHeadline) {
        newState.formData.headline = inputValue
      }

      if(isSlug) {
        newState.formData.slug = inputValue
      }

      if(isPrimaryImage) {
        newState.formData.primaryImage.imageURL = inputValue
      }

      return newState
    });
 }

  render() {
        return (
          <div className="container-fluid">
          <SecondNav></SecondNav>
          <div className="container-fluid form-container">
          <div className="page-title">
            <h4>Add or Edit Friend</h4>
          </div>
            <form>
              <div className="row">
                <div className="col-md-12 form-col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    id="title"
                    value={this.populateInputs}
                    onChange={this.onFormFieldChange}
                  />
                </div>
                <div className="col-md-12 form-col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Headline"
                    id="headline"
                    // value={this.state.formData.headline}
                    onChange={this.onFormFieldChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Slug"
                    id="slug"
                    // value={this.state.formData.slug}
                    onChange={this.onFormFieldChange}                    
                  />
                </div>
                <div className="col-md-12 form-col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Primary Image"
                    id="primaryImage"
                    // value={this.state.formData.primaryImage.imageURL}
                    onChange={this.onFormFieldChange}                  
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bio"
                    id="bio"
                    // value={this.state.formData.bio}
                    onChange={this.onFormFieldChange}                  
                  />
                </div>
                <div className="col-md-12 form-col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Summary"
                    id="summary"
                    // value={this.state.formData.summary}
                    onChange={this.onFormFieldChange}                  
                  />
                </div>
              </div>
            </form>
            <button type="button" className="btn btn-primary" id="addEditSubmitButton" onClick={this.onClickHandler}>
              Submit
            </button>
          </div>
        </div>
    )
  }
}

export default AddEditFriend