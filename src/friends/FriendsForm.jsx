import React from "react";
import * as friendService from "../services/friendService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FriendsForm extends React.Component
{

    state = {
        title: ""
        , bio: ""
        , summary: ""
        , headline: ""
        , slug: ""
        , status: ""
        , skills: ""
        , primaryImage: ""
    }

    componentDidMount(){
        let friend = this.props.location.state;
        console.log(this.props);
        if(this.props.location.state){
            this.setState(() => {
                return friend;
            })
        }
    }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(() =>{
            let newState = {};
            newState[inputName] = newValue;
            return newState;
        });
    }

    // updateRequested = updateFriend =>{
    //     this.setState(prevState => {
    //         const existingFriendIndex = prevState.
    //     })
    // }

    onClickAddFriendHandler = (e) =>
    {
        var data = this.state;
        e.stopPropagation();

        friendService.add(data)
            .then(this.onAddSuccess)
            .catch(this.onAddError);
    }

    onAddSuccess = (response) => {
        console.log(response);
        toast.success("Friend Created Successfully", {
            position: "top-right"
        });
    }

    onAddError = (errorResponse) => {
        console.error(errorResponse);
        toast.error("Friend Creation Error", {
            position: "top-right"
        });
    }
    

    render() {
        return(
            <React.Fragment>
                <div className="container col-md-8">
                    <h1>Add a New Friend</h1>

                    <form>
                        <div className="mb-3 form-group row">
                            <label htmlFor="exampleInputFName">Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="title"
                                name="title"
                                onChange={this.onFormFieldChanged}
                                value={this.state.title}
                            />
                        </div>

                        <div className="mb-3 form-group row">
                            <label htmlFor="exampleInputLName" className="form-label">Bio</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="bio" 
                                name="bio" 
                                onChange={this.onFormFieldChanged}
                                value={this.state.bio}
                            />
                        </div>

                        <div className="mb-3 form-group row">
                            <label htmlFor="exampleInputEmail" className="form-label">Summary</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="summary" 
                                name="summary" 
                                onChange={this.onFormFieldChanged}
                                value={this.state.summary}
                            />
                        </div>

                        <div className="mb-3 form-group row">
                            <label htmlFor="inputHeadline" className="form-label">Headline</label>
                            <input 
                                type="text" 
                                className="form-control validate" 
                                name="headline" 
                                id="headline"
                                onChange={this.onFormFieldChanged}
                                value={this.state.headline}
                            />
                        </div>

                        <div className="mb-3 form-group row">
                            <label htmlFor="exampleInputPassword2" className="form-label">Slug</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="slug" 
                                id="slug"
                                onChange={this.onFormFieldChanged}
                                value={this.state.slug}
                                placeholder="must be unique"
                            />
                        </div>  

                        <div className="mb-3 form-group row">
                            <label htmlFor="exampleInputPassword2" className="form-label">Status</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="status" 
                                id="status"
                                onChange={this.onFormFieldChanged}
                                value={this.state.status}
                                placeholder="NotSet, Active, Deleted, Flagged"
                            />
                        </div>  

                        <div className="mb-3 form-group row">
                            <label htmlFor="inputSkills" className="form-label">Skills</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="skills"
                                name="skills"
                                onChange={this.onFormFieldChanged}
                                value={this.state.skills}
                            />
                        </div>

                        <div className="mb-3 form-group row">
                            <label htmlFor="inputPrimaryImage" className="form-label">Primary Image</label>
                            <input 
                                type="url" 
                                className="form-control"
                                name="primaryImage"
                                id="primaryImage"
                                onChange={this.onFormFieldChanged}
                                value={this.state.primaryImage}    
                            />
                        </div>                

                        <button 
                            type="button"
                            className="btn btn-primary" 
                            onClick={this.onClickAddFriendHandler}
                            value="Submit"
                        >
                            Create Friend
                        </button>
                        
                    </form>
                    
                </div>
                
            </React.Fragment>
        );
    }   
}

export default FriendsForm;