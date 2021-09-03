import React from "react";
import Fade from '@material-ui/core/Fade';
import * as FriendService from "../services/FriendService";

class AddFriend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: "",
                bio: "",
                summary: "",
                headline: "",
                slug: "",
                statusId: "",
                skills: "",
                primaryImage: "",
            }
        };

        this.onGetByIdSuccess = this.onGetByIdSuccess.bind(this);
        this.onGetByIdUpdateSuccess = this.onGetByIdSuccess.bind(this);
        this.onFormFieldChanged = this.onFormFieldChanged.bind(this);
    }

    onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        console.log({currentTarget, newValue});
        
        this.setState(() => {
            let formData = {...this.state.formData};
            formData[inputName] = newValue;
            if(formData.statusId === "1"){
                formData.statusId = "NotSet";
            }
            if(formData.statusId === "2"){
                formData.statusId = "Active";
            }
            if(formData.statusId === "3"){
                formData.statusId = "Deleted";
            }
            if(formData.statusId === "4"){
                formData.statusId = "Flagged";
            }
            return {formData};
        });
    };

    onSubmitClicked = () => {
        const data = {...this.state.formData};
        let friendId = this.props.match.params.friendId;
        console.log(data);
        if(!friendId) {
            FriendService.add(data)
                .then(this.onAddFriendSuccess)
                .catch(this.onAddFriendError);
        }
        else {
            FriendService.update(friendId)
                .then(this.onUpdateFriendSuccess)
                .catch(this.onUpdateFriendError);
        }
    };

    onAddFriendSuccess(response) {
        console.log(response);
    }

    onAddFriendError(err) {
        console.log(err);
    }

    onUpdateFriendSuccess(response) {
        console.log(response);
    }

    onUpdateFriendError(err) {
        console.warn(err);
    }

    componentDidMount() {

        let friendId = this.props.match.params.friendId;
        console.log("ComponentDidMount", {friendId});

        if(friendId){

            FriendService.getById(friendId)
                .then(this.onGetByIdSuccess)
                .catch(this.onGetByIdError);
        }
    }

    onGetByIdSuccess(response) {
        console.log(response);
        this.setState({
            formData: {
                title: response.data.item.bio,
                bio: response.data.item.bio,
                summary: response.data.item.summary,
                headline: response.data.item.headline,
                slug: response.data.item.slug,
                statusId: response.data.item.statusId,
                skills: response.data.item.skills,
                primaryImage: response.data.item.primaryImage.imageUrl,
            }
        });
    }

    onGetByIdError(err) {
        console.warn(err);
    }

    componentDidUpdate(prevProps) {

        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;
        console.log({currentPath, previousPath});

        let friendId = this.props.match.params.friendId;
        if(friendId && prevProps.match.params.friendId !== friendId){
            FriendService.getById(friendId)
                .then(this.onGetByIdUpdateSuccess)
                .catch(this.onGetByIdUpdateError);
        }

      }

      onGetByIdUpdateSuccess(response) {
        console.log(response);
        this.setState({
            formData: {
                title: response.data.item.bio,
                bio: response.data.item.bio,
                summary: response.data.item.summary,
                headline: response.data.item.headline,
                slug: response.data.item.slug,
                statusId: response.data.item.statusId,
                skills: response.data.item.skills,
                primaryImage: response.data.item.primaryImage.imageUrl,
            }
        });
    }

    onGetByIdUpdateError(err) {
        console.warn(err);
    }

    render() {
        return(
            <Fade in={true} style={{ transitionDelay:'250ms'}}>
                    <div className="p-2 mb-4 bg-light rounded-3">
                <h4 style={{
                    textAlign: 'center'
                }}>Add a friend</h4>
              <div className="container-fluid py-1">
                <form>
                    <div className="form-group">
                        <label htmlFor="inputTitle">Title:</label>
                        <input type="text" className="form-control" id="inputTitle" name="inputTitle" defaultValue={this.state.formData.title}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputBio">Bio:</label>
                        <input type="text" className="form-control" id="inputBio" name="inputBio" defaultValue={this.state.formData.bio}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputSummary">Summary:</label>
                        <input type="text" className="form-control" id="inputSummary" name="inputSummary" defaultValue={this.state.formData.summary}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputHeadline">Headline:</label>
                        <input type="text" className="form-control" id="inputHeadline" name="inputHeadline" defaultValue={this.state.formData.headline}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputSlug">Slug:</label>
                        <input type="url" className="form-control" id="inputSlug" name="inputSlug" defaultValue={this.state.formData.slug}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="statusId">Status Id</label>
                        <select name="statusId" id="statusId" className="form-control" onChange={this.onFormFieldChanged} value={this.state.formData.statusId}>
                        <option value="">{this.state.formData.statusId}</option>
                        <option value="1">NotSet</option>
                        <option value="2">Active</option>
                        <option value="3">Deleted</option>
                        <option value="4">Flagged</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputSkills">Skills</label>
                        <input type="text" className="form-control" id="inputSkills" name="inputSkills" defaultValue={this.state.formData.skills}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPrimaryImg">Primary Image:</label>
                        <input type="url" className="form-control" id="inputPrimaryImg" name="inputPrimaryImg" defaultValue={this.state.formData.primaryImage}></input>
                    </div>
                        <button id="register" type="button" className="btn btn-primary mr-3 m-3 mb-1" onClick={this.props.submit}>Submit</button>
                        </form>
                    </div>
                </div>
            </Fade>
            
        );
    }
}

export default AddFriend;