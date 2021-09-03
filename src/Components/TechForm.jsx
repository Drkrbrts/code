import React from "react";
import TechButton from "./TechButton";
import {Route} from "react-router-dom";
import FriendsButton from "./FriendsButton";
import JobsButton from "./JobsButton";
import Logout from "./Logout";
import HomeButton from "./HomeButton";
import * as techService from "../services/techService"

class TechForm extends React.Component {

    state = {
        company: {
            name: "",
            profile: "",
            summary: "",
            headline: "",
            contactInformation: "DON'T FORGET THIS",
            slug: "",
            statusId: "Put Active",
            images: [
                {
                    imageTypeId: 1,
                    imageUrl: ""
                }
            ],
            "urls": [
                "string"
              ],
              "tags": [
                "string"    
              ],
              "friendIds": [
                0
              ]
        }
    }

    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;

        this.setState(() => {
            let company = {...this.state.company};
            inputName === "images" ? 
            company[inputName][0].imageUrl = newValue :
            company[inputName] = newValue;
            console.log(company[inputName])
            return {company};
        })
    }

    formSubmit = () => {       
        console.log(this.state.company);
        techService.addCompany(this.state.company).then(response => {
            console.log(response, "onAddCompanySuccess");

        }).catch(error => {
            console.warn(error, "onAddCompanyFailure");
        })
    }

    render() {

        return <React.Fragment>
                <header className="p-3 bg-secondary bg-gradient text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Route path="/" >
                <HomeButton {...this.props} ></HomeButton>
              </Route>
              <Route path="/" component={TechButton} />
             <Route path="/" component={FriendsButton} />
              <li>
                <button                                                                   
                  href="#"          
                  className="nav-link px-2 text-white link-button"
                >
                  Blogs
                </button>    
              </li>
              
              <Route path="/" component={JobsButton} />   
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Events
                </button>
              </li>
                <Route path="/"  component={Logout} />

            </ul>                                              
          </div>      
       
      </header>
                <h1 style={{marginLeft: "6%", marginTop: "10px"}}>Add Company</h1>
            <div className="mb-3 container border shadow" style={{float: "left", width: "30%", marginTop: "10px", marginLeft: "10px"}}>
               <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Name</p>
                       <input value={this.state.company.name} id="name" name="name" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div> 
                   <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Profile</p>
                       <input value={this.state.company.profile} id="profile" name="profile" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div>
                   <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Summary</p>
                       <input value={this.state.company.summary} id="summary" name="summary" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div> 
                   <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Headline</p>
                       <input value={this.state.company.headline} id="headline" name="headline" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div> 
                   <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Contact Info</p>
                       <input value={this.state.company.contactInformation} id="contactInformation" name="contactInformation" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div> 
                   <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Slug</p>
                       <input value={this.state.company.slug} id="slug" name="slug" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div>
                   <div className="row align-items-center">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Status Id</p>
                       <input value={this.state.company.statusId} id="statusId" name="statusId" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div>
                   <div style={{marginBottom: "10px"}} className="row align-items-center ">
                   <div className="col">
                       <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Image</p>
                       <input value={this.state.company.images[0].imageUrl} id="images" name="images" onChange={this.onFormFieldChange} className="form-control input shadow" style={{width: "70%", float: "right", bottom: "0", marginTop: "8px"}} ></input>
                   </div>
                   </div> 

                   <button onClick={this.formSubmit} style={{marginTop: "10px", marginBottom: "10px"}} className="btn-primary" type="button" >Submit</button>  
            </div>



        </React.Fragment>
    }
}






export default TechForm;