import React from "react";
import {Route} from "react-router-dom";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import Logout from "./Logout";
import * as friendService from "../services/friendService";
/*import {Route} from "react-router-dom";*/


class EditFriend extends React.Component {

    state = {
        formData: {
            title: "name of friend",
            bio: "just a bio",
            summary: "some fun facts",
            headline: "headline (nickname)",
            slug: "him@where.com",
            statusId: "put active",
            
            primaryImage: "favorite picture"
        }
    }

    componentDidMount() {
        
        this.setState(() => {
            let formData = {...this.state.formData};
            let friend = this.props.friend;
            for (let key in friend) {
                if (key !== "id") {
                    formData[key] = friend[key];
                }
            }
            console.log(formData);
            return {formData};
        })

    }

    onFormFieldChanged = (e) => {

        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;

        this.setState(() => {
            let formData = {...this.state.formData};
            formData[inputName] = newValue;

            return {formData};
        })
    }


        formSubmit = () => {  
            
            
            let inputs = {};
            
            for (let key in this.state.formData) {
                inputs[key] = document.querySelector(`#${key}`).value;
            }
            console.log(inputs);
            friendService.editFriend(this.props.friend.id, inputs).then(response => {
                console.log(response, "onEditFriendSuccess");
                this.props.history.push("/friends");
            }).catch(error => {
                console.warn(error, "onEditFriendFailure");
            })
        }

    
       queryValue = () => {
           console.log(document.querySelector("#bio").value);
       }

    render() {    

        return <React.Fragment>
         <header style={{backgroundColor: "steelBlue"}} className="p-3  text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
             <Route path="/" >
                 <HomeButton {...this.props} ></HomeButton>
             </Route>
             
              <Route path="/addFriends" >
                <FriendsButton {...this.props} />
              </Route>
              <Route path="/editFriend" >
                <FriendsButton {...this.props} />
              </Route>

              
              
              <li>
                <button    
                  href="#"           
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </button>                    
              </li>      
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
            <h2 style={{color: "lightBlack"}}>
                <strong>
                    Edit Friend
                </strong>
            </h2>
        </div>

<div className="mb-3" style={{border: "2px, solid, lightGrey"}}>       
   <form className="p-3" style={{float: "left", width: "30%"}}>
   
       
        
    
    
    <input id="title" onChange={this.onFormFieldChanged} name="title" value={this.state.formData.title}  className="form-control input" style={{margin: "5px"}} />
    <input id="bio" onChange={this.onFormFieldChanged} name="bio" value={this.state.formData.bio}  className="form-control input" style={{margin: "5px"}} />
    <input id="summary" onChange={this.onFormFieldChanged} name="summary" value={this.state.formData.summary} type="email" className="form-control input" style={{margin: "5px"}} />
    <input id="headline" onChange={this.onFormFieldChanged} name="headline" value={this.state.formData.headline}  className="form-control input" style={{margin: "5px"}} />
    <input id="slug" onChange={this.onFormFieldChanged} name="slug" value={this.state.formData.slug} type="email" className="form-control input" style={{margin: "5px"}} />
    <input id="statusId" onChange={this.onFormFieldChanged} name="statusId" value={this.state.formData.statusId}  className="form-control input" style={{margin: "5px"}} />
    
    <input id="primaryImage" onChange={this.onFormFieldChanged} name="primaryImage" value={this.state.formData.primaryImage}  className="form-control input" style={{margin: "5px"}} />
    <span>
    <button name="addFriend" onClick={this.formSubmit} type="button" className="btn btn-primary" style={{margin: "5px", backgroundColor: "steelBlue", border: "1px solid white"}}>Submit</button>
    
    </span>   
   </form>
   </div>

                         
        </React.Fragment>
    }
}



export default EditFriend;
