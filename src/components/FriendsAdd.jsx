import React from "react";
import * as userService from "../services/userService";


class FriendsAdd extends React.Component {

    onRegisterBtnClick = (payload) =>{

        userService.register(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)
        console.log("click button is working")
        }

        onActionSuccess = (response) => {
          console.log("success")
        }

        onActionError = (errResponse) => {
          console.log("error")
        }

    state = {
        formData:{firstName:""
            , lastName:""
            , userEmail:""
            , password:""
            , passwordConfirm:""
            , avatarUrl:""
        }
    };


    onChange = event => {
    
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState(prevState => {
    
          const updatedFormData = {
            ...prevState.formData
          };
    
          updatedFormData[name] = value;
    
          return { formData: updatedFormData };
        }, this.stateChanged);
      };
    

    render() {
        return (

            <React.Fragment>

                    <form>
                        <h2>Add or Edit Friend</h2>
                        <div className="form-group col-md-4 p-1">   
                            <label className="form-label">Title</label>
                            <input type="text" 
                                name="firstLastName"
                                id="firstLastName" 
                                className="form-control" 
                                value={this.state.formData.firstLastName}
                                onChange={this.onChange}
                                placeholder="Dwight Schrute"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">  
                            <label className="form-label">Bio</label>
                            <input type="text" 
                                name="bio"
                                id="bio" 
                                className="form-control" 
                                value={this.state.formData.bio}
                                onChange={this.onChange}
                                placeholder="This is a bio."></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <label className="form-label">Summary</label>
                            <input type="text" 
                                className="form-control" 
                                name="summary"  
                                id="summary"
                                value={this.state.formData.summary}
                                onChange={this.onChange}
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></input>
                        </div>
                        <div className="form-group col-md-4 p-1"> 
                            <label className="form-label">Headline</label>
                            <input type="text" 
                                className="form-control" 
                                name="headline"
                                id="headline" 
                                value={this.state.formData.headline} 
                                onChange={this.onChange}
                                placeholder="This is a headline."></input>
                        </div>
                        <div className="form-group col-md-4 p-1"> 
                            <label className="form-label">Slug</label>
                            <input type="text" 
                                className="form-control" 
                                name="slug" 
                                id="slug" 
                                value={this.state.formData.slug} 
                                onChange={this.onChange}
                                placeholder="www.schrutefarms.com"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <label className="form-label">Status</label>
                            <input type="text" 
                                className="form-control" 
                                name="status" 
                                id="status"
                                value={this.state.formData.status} 
                                onChange={this.onChange}
                                placeholder="Active"></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <label className="form-label">Skills</label>
                            <input type="text" 
                                className="form-control" 
                                name="skills" 
                                id="skills"
                                value={this.state.formData.skills} 
                                onChange={this.onChange}
                                placeholder=""></input>
                        </div>
                        <div className="form-group col-md-4 p-1">   
                            <label className="form-label">Primary Image</label>
                            <input type="text" 
                                className="form-control" 
                                name="primaryImage" 
                                id="primaryImage"
                                value={this.state.formData.primaryImage} 
                                onChange={this.onChange}
                                placeholder="url"></input>
                        </div>
                      
                        <button type="Register" className="btn btn-primary" onClick={this.onRegisterBtnClick}>Submit</button>
                       
                       
                    </form>
   
            </React.Fragment>
        );
    }
}

export default FriendsAdd;