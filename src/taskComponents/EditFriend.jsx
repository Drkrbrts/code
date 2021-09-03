import React from "react"
import * as friendService from "../services/friendService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EditFriend extends React.Component {

    componentDidMount = () =>{

        console.log("Edit friend props", this.props.editFormData)
    }
    
    state = {
        formData:{
        title: this.props.editFormData.title
        ,bio: this.props.editFormData.bio
        ,summary: this.props.editFormData.summary
        ,headline: this.props.editFormData.headline
        ,slug: this.props.editFormData.slug
        ,statusId: this.props.editFormData.statusId
        ,primaryImage: this.props.editFormData.primaryImage.imageUrl
        ,id:this.props.editFormData.id
        }
        //,addOrUpdate: ""
    }
    
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;    // read current target value
        let newValue =                          // new property value
            currentTarget.type === "checkbox"   // is the current target a checkbox?
            ? currentTarget.checked             // if yes, what is the check value?
            : currentTarget.value;              // if no, what is the value of the field?

        let inputName = currentTarget.name;     // name of the current target input field example: "<input name='firstName'>"
        // inputName is coordinated with the properties of state.

        //console.log(newValue, currentTarget);

        this.setState(() => {
            let formData = {...this.state.formData}; // spread and coppy all of the existing properties of form data

            formData[inputName] = newValue;     // changing just one input and giving it the property of the new value
            // bracket notation must be used to bind state to the form fields.

            return { formData };
        })
    }


/*
====EDIT SUBMIT=================================================================================================================
*/    
    onClickSubmitHandler = (e) => {
        e.preventDefault();
        let box = this.state.formData;

        console.log("SUBMIT DATA",box)

        friendService.editFriend(box)
                    .then(this.onEditFriendSuccess)
                    .catch(this.onEditFriendError);
    }
    
    onEditFriendSuccess = (response) => {
        console.log("Edit friend success:",response)
        toast.success("You have successfully edited a friend!");
        this.props.history.push("/Friends")
    
    }
    
    onEditFriendError= (errResponse) => {
        let serverResponse = {error:errResponse};
        let responseError = serverResponse.error.response.data.errors[0];

        // console.log("login error:",{error: errResponse})
        toast.error(responseError);
    }


    render() {

        return (
            <React.Fragment>


                <header className="p-1 bg-secondary text-dark">
                <div className="">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  
                        <h2 className="text-light">Edit friend</h2>
                    </div>
                    </div>
                </div>
                </header>



                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card border-rad">
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Friend</h2>
            
                            <form id="first-form">
            
                            <div className="form-outline mb-4">
                                <input
                                value={this.state.formData.title}
                                onChange={this.onFormFieldChanged} 
                                placeholder="Title:" 
                                name="title" 
                                type="text" 
                                id="title" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.bio}
                                onChange={this.onFormFieldChanged}
                                placeholder="Bio:"  
                                name="bio"
                                type="text" 
                                id="bio" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.summary}
                                onChange={this.onFormFieldChanged}
                                name="summary"
                                placeholder="Summary:"  
                                type="summary" 
                                id="summary" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.headline}
                                onChange={this.onFormFieldChanged}
                                name="headline"
                                placeholder="Headline:"  
                                type="text" 
                                id="headline" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.slug}
                                onChange={this.onFormFieldChanged}
                                name="slug"
                                placeholder="Slug:"  
                                type="text" 
                                id="slug" 
                                className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.statusId}
                                onChange={this.onFormFieldChanged}
                                name="statusId"
                                placeholder="Status:"  
                                type="text" 
                                id="statusId" 
                                className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.primaryImage}
                                onChange={this.onFormFieldChanged}
                                name="primaryImage"
                                placeholder="Primary Image:"  
                                type="url" 
                                id="primaryImage" 
                                className="form-control form-control-lg" />
                            </div>
                            
            
                            <div className="d-flex justify-content-center">
                                <button
                                onClick={this.onClickSubmitHandler}
                                type="submit" 
                                className="btn btn-warning sign-in-button">
                                    Submit
                                </button>
                            </div>
            
                            </form>
            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </React.Fragment>

        );
    }    
};

export default EditFriend;