import React from "react"
import { toast } from 'react-toastify';
import * as userService from "../services/userService"


class UpdateFriend extends React.Component
{
    state ={
        formData: {
            title: "",
            bio: "",
            summary: "",
            headline: "",
            slug: "",
            statusId: "",
            primaryImage: ""
        }
    }
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(() =>{
            let newState = {...this.state.formData};
            newState[inputName] = newValue;

            return {formData: newState};
        })
    }

    onUpdateClicked = (e) =>
    {
        e.preventDefault();
        var title = this.state.formData.title;
        var bio = this.state.formData.bio;
        var summary = this.state.formData.summary;
        var headline = this.state.formData.headline;
        var slug = this.state.formData.slug;
        var statusId = this.state.formData.statusId;
        var primaryImage = this.state.formData.primaryImage;
        
        console.log(title, bio)
        const data = 
        {
            title: title,
            bio: bio,
            summary: summary,
            headline: headline,
            slug: slug,
            statusId: statusId,
            primaryImage: primaryImage
        }
        console.log(data)

        userService.updateFriend(data)
            .then(this.onUpdateFriendSuccess)
            .catch(this.onUpdateFriendError)
    }

    onUpdateFriendSuccess = (response) =>
    {
        console.log(response)
    }
    onUpdateFriendError = (err) =>
    {
        console.error(err)
    }
//.....................................................................................................................
    onUpdateClicked = (e) =>
    {
        console.log("update", e)
    }

    render()
    {
        return(
            <React.Fragment >
                <form className="container offset-lg-3">
                        <div className="row align-items-center  text-right">
                            <div className="col-1">
                                <h4>Title:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="title" id="title" value= {this.state.formData.title} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-1">
                                <h4>Bio:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="bio" id="bio" value= {this.state.formData.bio} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center no-gutters">
                            <div className="col-1">
                                <h4>Summary:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="summary" id="summary" value= {this.state.formData.summary} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-1">
                                <h4>Headline:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="headline" id="headline" value= {this.state.formData.headline} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-1">
                                <h4>Slug:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="slug" id="slug" value= {this.state.formData.slug} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-1">
                                <h4>Status:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="statusId" id="status" value= {this.state.formData.statusId} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-1">
                                <h4>Primary Image:</h4>
                            </div>
                            <div className="col-6">
                                <div className="form-group p-3">
                                    <input type="text" className="form-control" name="primaryImage" id="primaryImage" value= {this.state.formData.primaryImage} onChange={this.onFormFieldChanged}/>
                                </div>
                            </div>
                        </div>
                </form>
                
                <form className="col-lg-6 offset-lg-3 ">
                    <div className="row text-center">
                        <span className="input-group-btn">
                            <button className="btn btn-primary" onClick={this.onUpdateClicked}>Update</button>
                        </span>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default UpdateFriend