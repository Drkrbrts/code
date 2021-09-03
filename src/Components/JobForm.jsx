import React from "react";
import * as jobService from "../services/jobService";
import {Route} from "react-router-dom";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import Logout from "./Logout";
import JobsButton from "./JobsButton";
import {  toast } from 'react-toastify';
import TechButton from "./TechButton";

class JobForm extends React.Component {

    state = {
        formData: {
            title: "",
            description: "",
            summary: "",
            pay: "",
            slug: "",
            statusId: "",
            techCompanyId: "1",
            skills: ""
        },
        addActive: true,
        editActive: false,
        id: ""           
    }

    componentDidMount() {
        this.setState(() => {
            if (this.props.job.title) {
                let formData = {...this.state.formData};
            let newFormData = this.props.job;
            let addActive = {...this.state.addActive};
                    let editActive = {...this.state.editActive};

                    addActive = false;
                    editActive = true;

            formData = newFormData;

            return {formData, addActive, editActive};
            }    
            
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


        addSubmit = () => {    
            let inputs = {};
            let array = [];
            
            for (let key in this.state.formData) {
                
                if (key === "skills") {
                    array.push(this.state.formData[key]);
                    inputs[key] = array;
                } else {
                    inputs[key] = this.state.formData[key];
                } 
                
            }
            
            jobService.addJob(inputs).then(response => {
                console.log(response, "onAddJobSuccess");
                toast.success("Job Created!");
                this.setState(() => {
                    let addActive = {...this.state.addActive};
                    let editActive = {...this.state.editActive};
                    let id = {...this.state.id};
                    id = response.data.item;
                    addActive = false;
                    editActive = true;
                    return {addActive, editActive, id};
                })
            }).catch(error => {
                console.warn(error, "onAddJobFailure");    
                toast.error("Job Failure!");
            })
        }

        editSubmit = () => {
            let inputs = {};
            let array = [];
            for (let key in this.state.formData) {     
                if (key !== "id") {
                    
                    if (key === "skills") {
                        array.push(document.querySelector(`#${key}`).value);
                        inputs[key] = array;
                    } else {
                        inputs[key] = document.querySelector(`#${key}`).value;
                    }

                }

            }
            jobService.editJob(this.props.job.id, inputs).then(response => {
                console.log(response, "onEditJobSuccess");
                toast.success(`Edited ${inputs.title}!`);
            }).catch(error => {
                console.warn(error, "onEditJobFailure");
                toast.error(`Didn't edit ${inputs.title}!`);
            })
        }

    


    render() {          

        return <React.Fragment>

<header style={{backgroundColor: "sienna"}} className="p-3  text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
             <Route path="/" >
                 <HomeButton {...this.props} ></HomeButton>
             </Route>
             
              
              <Route path="/" component={JobsButton} />
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Blogs
                </button>
              </li>

              <Route path="/" component={TechButton} />
              
              
              <Route path="/" >
                <FriendsButton {...this.props} />
              </Route>    
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
            <h2 style={{color: "lightBlack", marginLeft: "10%"}}>                                     
                <strong>
                    Add Job     
                </strong>
            </h2>
        </div>

<div className="mb-3 container border shadow" style={{border: "2px, solid, lightGrey", float: "left", width: "30%", marginLeft: "10px"}}>       
   
                   
       
        
    <div className="row align-items-center " style={{marginTop: "10px"}}>
        <div className="col">
    
    <input id="title" onChange={this.onFormFieldChanged} name="title" value={this.state.formData.title}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    <p style={{float: "right", bottom: "0", marginTop: "10px", marginRight: "10px"}}>Role</p>
    </div>
    </div>
    <div className="row align-items-start">              
        <div className="col">
    
    <select className="form-select" id="techCompanyId" onChange={this.onFormFieldChanged} value={this.state.formData.techCompanyId} name="techCompanyId" style={{float: "right", width: "70%", marginRight: "5px", marginTop: "6px"}}>
    <option value="1">Companies...</option>
    <option value="26054">Uber</option>
    <option value="26053">Facebook</option>
    <option value="26052">Twitter</option>
    <option value="26111">Amazon</option>
    <option value="26110">Google</option>
  </select>
  <p style={{float: "right", bottom: "0", marginTop: "10px", marginRight: "10px"}}>Tech Company</p>
    </div>    
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px"}}>Job Description</p>
    <input id="description" onChange={this.onFormFieldChanged} name="description" value={this.state.formData.description}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <p style={{float: "left", bottom: "0", marginTop: "10px", marginLeft: "8px"}}>Job Summary</p>
    <input id="summary" onChange={this.onFormFieldChanged} name="summary" value={this.state.formData.summary}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    </div>
    </div>       
    <div className="row align-items-center">
        <div className="col">
    <input id="pay" onChange={this.onFormFieldChanged} name="pay" value={this.state.formData.pay}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    <p style={{float: "right", bottom: "0", marginTop: "10px", marginRight: "10px"}}>Pay</p>
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <input id="skills" onChange={this.onFormFieldChanged} name="skills" value={this.state.formData.skills}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    <p style={{float: "right", bottom: "0", marginTop: "10px", marginRight: "10px"}}>Skills</p>
    </div>
    </div>
    <div className="row align-items-center">
        <div className="col">
    <input id="slug" onChange={this.onFormFieldChanged} name="slug" value={this.state.formData.slug}  className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    <p style={{float: "right", bottom: "0", marginTop: "10px", marginRight: "10px"}}>Slug</p>
    </div>
    </div>
    <div className="row align-items-center ">
        <div className="col">
    <input id="statusId" onChange={this.onFormFieldChanged} name="statusId" value={this.state.formData.statusId}   className="form-control input" style={{margin: "5px", width: "70%", float: "right"}} />
    <p style={{float: "right", bottom: "0", marginTop: "10px", marginRight: "10px"}}>Status</p>
    </div>
    </div>
    <span>
    
    <button  onClick={this.addSubmit} type="button" className={this.state.addActive ? "btn btn-primary" : "d-none"} style={{margin: "5px"}}>Submit</button>
    <button  onClick={this.editSubmit} type="button" className={this.state.editActive ? "btn btn-primary" : "d-none"} style={{margin: "5px"}}>Submit</button>

    
    
    </span>   
  
   </div>                          

                         
        </React.Fragment>
    }
}       



export default JobForm;