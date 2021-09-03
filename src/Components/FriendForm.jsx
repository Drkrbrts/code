import React from "react";
import * as friendService from "../services/friendService";
import {Route} from "react-router-dom";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import { toast } from "react-toastify";
import Logout from "./Logout";
import JobsButton from "./JobsButton";
import TechButton from "./TechButton";

class FriendForm extends React.Component {

     state = {
            formData: this.props.friend,
            id: 1           
        }
    
        
     
    
        componentDidMount() {
            
                this.setState(() => {
                    if (this.props.friend.title) {
                    let formData = {...this.state.formData};
                    let newFriend = this.props.friend;
                    formData = newFriend;
                    return {formData};
                }
            })
        }
    

    

    onFormFieldChanged = (e) => {

        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;
        console.log(newValue);
        this.setState(() => {
            let formData = {...this.state.formData};
            formData[inputName] = newValue;

            return {formData};   
        })                    
    }        


        formSubmit = () => {                                                 
           
            
            friendService.addFriend(this.state.formData).then(response => {
                console.log(response, "onAddFriendSuccess");
                toast.success("Friend Added!")
                this.props.history.push("/friends");
            }).catch(error => {
                console.warn(error, "onAddFriendFailure");
                
            })
        }

        friendEdit = () => {               
            
            
            
            friendService.editFriend(this.props.friend.id, this.state.formData).then(response => {
                console.log(response, "onEditFriendSuccess");
                this.props.history.push("/friends");
            }).catch(error => {
                console.warn(error, "onEditFriendFailure");
            })
        }

    


    render() {          

        return <React.Fragment>

<header style={{backgroundColor: "steelBlue"}} className="p-3  text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
             <Route path="/" >
                 <HomeButton {...this.props} ></HomeButton>
             </Route>
             
              <Route path="/addFriend" >
                <FriendsButton {...this.props} />
              </Route>
              <Route path="/friends/(\d+)" >
                <FriendsButton {...this.props} />
              </Route>

              <li>
                <button className="nav-link px-2 text-white link-button">
                  Blogs
                </button>
              </li>

              <Route path="/" component={TechButton} />
              
            <Route path="/" component={JobsButton} />     
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Events
                </button>
              </li>
              <Logout {...this.props} />
            </ul>                                              
          </div>      
        
      </header>

        <div style={{padding: "20px"}}>
            <h2 style={{color: "lightBlack", marginLeft: "5%"}}>
                <strong>
                    Add or Edit Friend     
                </strong>
            </h2>
        </div>

<div className="mb-3 border shadow" style={{float: "left", width: "30%", marginLeft: "10px"}}>       

   
       
        
   <div className="row align-items-center" style={{marginTop: "10px"}} >
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Name</p>
    <input id="title" onChange={this.onFormFieldChanged} name="title" value={this.state.formData.title}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Bio</p>
    <input id="bio" onChange={this.onFormFieldChanged} name="bio" value={this.state.formData.bio}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Summary</p>
    <input id="summary" onChange={this.onFormFieldChanged} name="summary" value={this.state.formData.summary}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Headline</p>
    <input id="headline" onChange={this.onFormFieldChanged} name="headline" value={this.state.formData.headline}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Slug</p>
    <input id="slug" onChange={this.onFormFieldChanged} name="slug" value={this.state.formData.slug}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Status Id</p>
    <input id="statusId" onChange={this.onFormFieldChanged} name="statusId" value={this.state.formData.statusId}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Skills</p>
    <input id="skills" onChange={this.onFormFieldChanged} name="skills" value={this.state.formData.skills}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "5px"}}>Primary Image</p>
    <input id="primaryImage" onChange={this.onFormFieldChanged} name="primaryImage" value={this.state.formData.primaryImage}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    
        
    
    <span>
    <Route path="/addFriend">
    <button  onClick={this.formSubmit} type="button" className="btn btn-primary" style={{margin: "5px"}}>Submit</button>
    </Route>
    <Route path="/friends/(\d+)">
    <button  onClick={this.friendEdit} type="button" className="btn btn-primary" style={{margin: "5px"}}>Submit</button>
    </Route>
    
    </span>   
   
   </div>

                         
        </React.Fragment>
    }
}



export default FriendForm;