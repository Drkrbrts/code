import React from "react";
import Fade from '@material-ui/core/Fade';
import * as JobService from "../services/JobService";
import { toast } from 'react-toastify';

class AddJob extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClassName: "btn btn-primary mr-3 m-3 mb-1",
            buttonLabel: "Submit",
            formData: {
                title: "",
                description: "",
                summary: "",
                pay: "",
                slug: "",
                statusId: "",
                techCompanyId: "",
                skills: [""]
            }
        };
    }

    componentDidMount() {

        let jobId = this.props.match.params.jobId;
        console.log("ComponentDidMount", {jobId});

        if(jobId){
            JobService.getById(jobId)
                .then(this.onGetByIdSuccess)
                .catch(this.onGetByIdError);
        }
    }

    componentDidUpdate(prevProps) {

        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;
        console.log({currentPath, previousPath});

        let jobId = this.props.match.params.jobId;
        if(jobId && prevProps.match.params.friendId !== jobId){
            this.componentDidMount();
        }
    }

      onGetByIdSuccess = (response) => {
        console.log(response);
        this.setState({
            buttonClassName: "btn btn-warning mr-3 m-3 mb-1",
            buttonLabel: "Update",
            buttonOnClick: "this.onUpdateClicked",
            formData: {
                title: response.data.item.title,
                description: response.data.item.description,
                summary: response.data.item.summary,
                pay: response.data.item.pay,
                slug: response.data.item.slug,
                statusId: response.data.item.statusId,
                techCompanyId: response.data.item.techCompanyId,
                skills: response.data.item.skills,
            }
        });
    }

    onGetByIdError = (err) => {
        console.warn(err);
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
            formData.techCompanyId = Number(formData.techCompanyId);
            return {formData};
        });
    };

    onSubmitClicked = () => {
        let jobId = this.props.match.params.jobId;
        let data = {...this.state.formData};
        console.log(data);
        if(jobId){
            JobService.update(jobId, data)
                .then(this.onUpdateSuccess)
                .catch(this.onUpdateError);
        }
        else{
            JobService.addJob(data)
            .then(this.onAddJobSuccess)
            .catch(this.onAddJobError);
        }
    }

    onAddJobSuccess = (response) => {
        console.log(response);
        toast.success('🦄 You Successfully Created A Job Entry!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        let jId = response.data.item;
        this.props.history.push("/AddJob/" + jId);

    }

    onAddJobError = (err) => {
        console.log(err);
        toast.error('🦄 Oh no! Something went wrong', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    onUpdateSuccess = (response) => {
        console.log(response);
    }

    onUpdateError = (err) => {
        console.log(err);
    }

    render() {
        return(
            <Fade in={true} style={{ transitionDelay:'250ms'}}>
                    <div className="p-2 mb-4 bg-light rounded-3">
                <h4 style={{
                    textAlign: 'center'
                }}>Add Job</h4>
              <div className="container-fluid py-2">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Job Title: </label>
                        <input type="text" className="form-control" id="title" name="title" onChange={this.onFormFieldChanged} value={this.state.formData.title} defaultValue={this.state.formData.title}></input>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description">Job Description:</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={this.onFormFieldChanged} value={this.state.formData.description} defaultValue={this.state.formData.description}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="summary">Job Summary:</label>
                        <input type="text" className="form-control" id="summary" name="summary" onChange={this.onFormFieldChanged} value={this.state.formData.summary} defaultValue={this.state.formData.summary}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pay">Job Pay: </label>
                        <input type="text" className="form-control" id="pay" name="pay" onChange={this.onFormFieldChanged} value={this.state.formData.pay} defaultValue={this.state.formData.pay}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Slug: </label>
                        <input type="text" className="form-control" id="slug" name="slug" onChange={this.onFormFieldChanged} value={this.state.formData.slug} defaultValue={this.state.formData.slug}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="statusId">Id Status: </label>
                        <select name="statusId" id="statusId" className="form-control" onChange={this.onFormFieldChanged} value={this.state.formData.statusId} defaultValue={this.state.formData.statusId}>
                        <option value="">Select Id Status...</option>
                        <option value="1">NotSet</option>
                        <option value="2">Active</option>
                        <option value="3">Deleted</option>
                        <option value="4">Flagged</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="techCompanyId">Tech Company: </label>
                        <select name="techCompanyId" id="techCompanyId" className="form-control" onChange={this.onFormFieldChanged} value={this.state.formData.techCompanyId} defaultValue={this.state.formData.techCompanyId}>
                        <option value="">Select a Tech Company...</option>
                        <option value="26106">Google</option>
                        <option value="26105">Apple</option>
                        <option value="26104">Microsoft</option>
                        <option value="26104">Facebook</option>
                        <option value="26100">Twitter</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Job Skills: </label>
                        <input type="url" className="form-control" id="slug" name="slug" onChange={this.onFormFieldChanged} value={this.state.formData.skills} defaultValue={this.state.formData.skills}></input>
                    </div>
                        <button id="submit" name="submit" type="button" className={this.state.buttonClassName} onClick={this.onSubmitClicked}>{this.state.buttonLabel}</button>
                        </form>
                    </div>
                </div>
            </Fade>
            
        );
    }
}

export default AddJob;